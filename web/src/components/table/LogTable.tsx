import moment from "moment";
import React, { useEffect, useMemo } from "react";
import { useGetLogs } from "../../hooks";
import { useStore } from "../../store";
import { Button, Table, Upload, UploadProps } from "antd";
import { getUploadProps } from "../../utils";
import { useNotification } from "../../Notification";

type Props = {};

const LogTable = (props: Props) => {
  const notificationApi = useNotification();
  const { getLogs } = useGetLogs();
  const { logs } = useStore();
  const uploadProps: UploadProps = getUploadProps(
    "logs",
    notificationApi,
    getLogs,
  );

  useEffect(() => {
    getLogs();
  }, []);

  const columns = [
    {
      title: "Mã Giao Dịch",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Mã Thẻ",
      dataIndex: "cardId",
      key: "cardId",
    },
    {
      title: "Vị Trí",
      dataIndex: "positionName",
      key: "positionName",
      filters: logs.map((item) => ({
        text: item.position.name,
        value: item.position.name,
      })),
      onFilter: (value, record) =>
        record.positionName.startsWith(value as string),
    },
    {
      title: "Ngày tạo",
      dataIndex: "time",
      key: "time",
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
      render: (_, record) => <div style={{ display: "flex", gap: 8 }}></div>,
    },
  ];

  const data = useMemo(() => {
    return logs.map((log) => ({
      key: log.id,
      id: log.id,
      cardId: log.cardId,
      positionName: log.position.name,
      time: log.time,
      updatedAt: log.updatedAt,
    }));
  }, [logs]);

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

export default LogTable;
