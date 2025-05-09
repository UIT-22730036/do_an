import moment from "moment";
import React, { useEffect, useMemo } from "react";
import { useGetPositions } from "../../hooks";
import { useStore } from "../../store";
import { Button, Table, Upload, UploadProps } from "antd";
import DeletePositionModal from "../modal/DeletePositionModal";
import { getUploadProps } from "../../utils";
import { useNotification } from "../../Notification";

type Props = {};

const PositionTable = (props: Props) => {
  const notificationApi = useNotification();
  const { getPositions } = useGetPositions();
  const { positions } = useStore();
  const uploadProps: UploadProps = getUploadProps("positions", notificationApi);

  useEffect(() => {
    getPositions();
  }, []);

  const handleRenderType = (value: string) => {
    switch (value) {
      case "area":
        return "Khu vực";

      case "route":
        return "Lối đi";

      default:
        return "";
    }
  };

  const columns = [
    {
      title: "Mã vị trí",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên vị trí",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Loại vị trí",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value) => (
        <span>{moment(value).format("HH:mm DD/MM/YYYY (ddd)")}</span>
      ),
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (value) => (
        <span>{moment(value).format("HH:mm DD/MM/YYYY (ddd)")}</span>
      ),
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: 8 }}>
          <DeletePositionModal record={record} />
        </div>
      ),
    },
  ];

  const data = useMemo(() => {
    return positions.map((item) => ({
      ...item,
      key: item.id,
      type: handleRenderType(item.type),
    }));
  }, [positions]);
  return (
    <div className="table-container">
      <div className="btn-group">
        <Upload {...uploadProps}>
          <Button type="primary">Import</Button>
        </Upload>
      </div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default PositionTable;
