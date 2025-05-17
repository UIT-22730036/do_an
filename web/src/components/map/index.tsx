import React, { useRef, useEffect, useState } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Polygon from "@arcgis/core/geometry/Polygon";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import Point from "@arcgis/core/geometry/Point";
import Polyline from "@arcgis/core/geometry/Polyline";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";

import "@arcgis/core/assets/esri/themes/light/main.css";
import {
  useGetCards,
  useGetLogs,
  useGetPositions,
  useGetProperties,
  useGetStudents,
} from "../../hooks";
import { useStore } from "../../store";
import {
  convertCards,
  convertLogs,
  convertPositionsToArea,
  convertPositionsToRoute,
  convertProperties,
  convertStudentPoints,
  convertStudents,
} from "../../utils";
import "./index.scss";

const MapComponent = () => {
  const { students, cards, logs, positions, properties } = useStore();
  const mapRef = useRef(null);

  const { getStudents } = useGetStudents();
  const { getCards } = useGetCards();
  const { getLogs } = useGetLogs();
  const { getPositions } = useGetPositions();
  const { getProperties } = useGetProperties();

  const [mapView, setMapView] = useState(null);

  useEffect(() => {
    getStudents();
    getCards();
    getLogs();
    getPositions();
    getProperties();
  }, []);

  useEffect(() => {
    // Initialize the map and view only once when the component mounts
    if (!mapView && mapRef.current) handleRenderMap();

    return () => {
      // Cleanup the map view when the component unmounts
      if (mapView) {
        mapView.destroy();
      }
    };
  }, [mapView, students, cards, logs, positions, properties]);

  useEffect(() => {
    handleRenderMap();
  }, [students, cards, logs, positions, properties]);

  const handleRenderMap = () => {
    const map = new Map({
      basemap: "streets-navigation-vector",
    });

    const view = new MapView({
      container: mapRef.current,
      map: map,
      center: [106.803207, 10.871367],
      zoom: 17,
    });

    setMapView(view);

    // Sample Data (replace with your actual data fetching)
    const sinhViens = students.length > 0 ? convertStudents(students) : [];

    const theSinhViens = cards.length > 0 ? convertCards(cards) : [];

    const points = students.length > 0 ? convertStudentPoints(students) : [];

    const routes =
      positions.length > 0 ? convertPositionsToRoute(positions) : [];

    const viTris =
      positions.length > 0 ? convertPositionsToArea(positions) : [];

    const thietBis = properties.length > 0 ? convertProperties(properties) : [];

    const giaoDichs = logs.length > 0 ? convertLogs(logs) : [];

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    // Draw student points
    points.forEach((sv) => {
      const point = new Point({
        longitude: sv.ToaDo[0],
        latitude: sv.ToaDo[1],
      });

      const markerSymbol = new PictureMarkerSymbol({
        url: "http://static.arcgis.com/images/Symbols/Basic/YellowStickpin.png",
        width: "24px",
        height: "24px",
      });

      const sinhVien = sinhViens.find((v) => v.MaSV === sv.MaSV);
      const pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol,
        attributes: sinhVien,
        popupTemplate: {
          title: "Thông Tin Sinh Viên",
          content:
            "<b>Mã Sinh Viên:</b> {MaSV}<br><b>Tên Sinh Viên:</b> {TenSV}<br><b>Lớp:</b> {Lop}",
        },
      });
      view.graphics.add(pointGraphic);
    });

    // Draw locations
    viTris.forEach((vt) => {
      const thietBiText = thietBis
        .filter((tb) => tb.MaViTri === vt.MaViTri)
        .map((tb) => tb.TenTB)
        .join(", ");

      const giaoDichText = giaoDichs
        .filter((gd) => gd.MaViTri === vt.MaViTri)
        .map((gd) => {
          const theSinhVien = theSinhViens.find((sv) => sv.MaThe === gd.MaThe);
          const sinhVien = sinhViens.find(
            (sv) => sv.MaSV === theSinhVien?.MaSV,
          );
          return `${theSinhVien?.MaThe || ""} - ${sinhVien?.TenSV || ""}`;
        })
        .join(", ");

      const polygon = new Polygon({
        rings: vt.ToaDo as any,
        spatialReference: { wkid: 4326 },
      });
      const backgroundColor = [...vt.Color, 0.3];
      const symbol = new SimpleFillSymbol({
        color: backgroundColor,
        // size: "15px" as any,
        outline: {
          color: vt.Color,
          width: 2,
        },
      });

      const popupContent = `
        <b>Vị trí:</b> ${vt.TenViTri}<br>
        <b>Thiết bị:</b> ${thietBiText}<br>
        <b>Giao dịch:</b><br> ${giaoDichText}
      `;

      const graphic = new Graphic({
        geometry: polygon,
        symbol: symbol,
        popupTemplate: {
          title: "Thông tin khu vực",
          content: popupContent,
        },
      });
      graphicsLayer.add(graphic);
    });

    // Draw routes
    routes.forEach((route) => {
      const path = route.ToaDo.map((coord) => [coord[0], coord[1]]);

      const polyline = new Polyline({
        paths: [path],
        spatialReference: new SpatialReference({ wkid: 4326 }),
      });

      const polylineGraphic = new Graphic({
        geometry: polyline,
        symbol: {
          type: "simple-line",
          color: [226, 119, 40],
          width: 4,
        },
        attributes: {
          name: route.TenDuong,
          startPoint: `${route.ToaDo[0][0]}, ${route.ToaDo[0][1]}`,
          endPoint: `${route.ToaDo[route.ToaDo.length - 1][0]}, ${
            route.ToaDo[route.ToaDo.length - 1][1]
          }`,
        },
        popupTemplate: {
          title: "Thông Tin Đoạn Đường",
          content:
            "<h3>{name}</h3>" +
            "<p><strong>Toạ độ bắt đầu:</strong> {startPoint}</p>" +
            "<p><strong>Toạ độ kết thúc:</strong> {endPoint}</p>",
        },
      });
      view.graphics.add(polylineGraphic);
    });
  };
  return (
    <div
      id="viewDiv"
      ref={mapRef}
      style={{ width: "100%", height: "80vh" }}
    ></div>
  );
};

export default MapComponent;
