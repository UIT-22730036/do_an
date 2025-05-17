import React, { useEffect, useMemo } from "react";
import { useGetProperties } from "../../hooks";
import { useStore } from "../../store";
import moment from "moment";
import { Button, Table, Upload, UploadProps } from "antd";
import DeletePropertyModal from "../modal/DeletePropertyModal";
import EditPropertyModal from "../modal/EditPropertyModal";
import AddPropModal from "../modal/AddPropModal";
import { getUploadProps } from "../../utils";
import { useNotification } from "../../Notification";

type Props = {};

const PropertyTable = (props: Props) => {
  const notificationApi = useNotification();
  const { getProperties } = useGetProperties();
  const { properties } = useStore();
  const uploadProps: UploadProps = getUploadProps(
    "property",
    notificationApi,
    getProperties,
  );

  useEffect(() => {
    getProperties();
  }, []);

  const columns = [
    {
      title: "Mã thiết bị",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên thiết bị",
      dataIndex: "name",
      key: "name",
      filters: properties.map((item) => ({
        text: item.name,
        value: item.name,
      })),
      onFilter: (value, record) => record.name.startsWith(value as string),
    },
    {
      title: "Vị trí",
      dataIndex: "positionName",
      key: "positionName",
      filters: properties.map((item) => ({
        text: item.position.name,
        value: item.position.name,
      })),
      onFilter: (value, record) =>
        record.position.name.startsWith(value as string),
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
          <EditPropertyModal record={record} />
          <DeletePropertyModal record={record} />
        </div>
      ),
    },
  ];

  const data = useMemo(() => {
    return properties.map((item) => ({
      ...item,
      positionName: item.position.name,
      key: item.id,
    }));
  }, [properties]);

  return (
    <div className="table-container">
      <div className="btn-group">
        <AddPropModal />
        <Upload {...uploadProps}>
          <Button type="primary">Import</Button>
        </Upload>
      </div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default PropertyTable;
