import React, { useEffect, useMemo } from "react";
import { useGetCards } from "../../hooks/card.hook";
import { useStore } from "../../store";
import { Button, Table, Upload, UploadProps } from "antd";
import moment from "moment";
import DeleteCardModal from "../modal/DeleteCardModal";
import { useNotification } from "../../Notification";
import { getUploadProps } from "../../utils";

type Props = {};

const CardTable = (props: Props) => {
  const notificationApi = useNotification();
  const { getCards } = useGetCards();
  const { cards } = useStore();
  const uploadProps: UploadProps = getUploadProps(
    "cards",
    notificationApi,
    getCards,
  );

  useEffect(() => {
    getCards();
  }, []);

  const columns = [
    {
      title: "Mã Thẻ",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Mã SV",
      dataIndex: "studentId",
      key: "studentId",
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "expiredAt",
      key: "expiredAt",
      render: (value) => (
        <span>{moment(value).format("HH:mm DD/MM/YYYY (ddd)")}</span>
      ),
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
          <DeleteCardModal record={record} />
        </div>
      ),
    },
  ];

  const data = useMemo(() => {
    return cards.map((item) => ({
      key: item.id,
      id: item.id,
      studentId: item.studentId,
      expiredAt: item.expiredAt,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));
  }, [cards]);

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

export default CardTable;
