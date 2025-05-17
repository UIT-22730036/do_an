import React, { useEffect, useMemo } from "react";
import moment from "moment";
import { useStore } from "../../store";
import { Button, Table, TableProps, Upload, UploadProps } from "antd";
import { AddStudentModal, AssignCardModal } from "../modal";
import { useGetStudents } from "../../hooks";
import EditStudentModal from "../modal/EditStudentModal";
import DeleteStudentModal from "../modal/DeleteStudentModal";
import { getUploadProps } from "../../utils";
import { useNotification } from "../../Notification";
import { text } from "stream/consumers";

type Props = {};

const StudentTable = (props: Props) => {
  const notificationApi = useNotification();
  const { getStudents } = useGetStudents();
  const { students } = useStore();
  const uploadProps: UploadProps = getUploadProps(
    "students",
    notificationApi,
    getStudents,
  );

  useEffect(() => {
    getStudents();
  }, []);

  const columns = [
    {
      title: "Mã SV",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên SV",
      dataIndex: "name",
      key: "name",
      filters: students.map((std) => ({
        text: std.name,
        value: std.name,
      })),
      onFilter: (value, record) => record.name.startsWith(value as string),
    },
    {
      title: "Email SV",
      dataIndex: "email",
      key: "email",
      filters: students.map((std) => ({
        text: std.email,
        value: std.email,
      })),
      onFilter: (value, record) => record.email.startsWith(value as string),
    },
    {
      title: "Mã thẻ SV",
      dataIndex: "cardId",
      key: "cardId",
      render: (value) => <span>{value ?? "N/A"}</span>,
    },
    {
      title: "Lớp",
      dataIndex: "className",
      key: "className",
      render: (value) => <span>{value ?? "N/A"}</span>,
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
          <EditStudentModal record={record} />
          <DeleteStudentModal record={record} />
        </div>
      ),
    },
  ];

  const data = useMemo(() => {
    return students.map((std) => ({
      key: std.id,
      id: std.id,
      name: std.name,
      email: std.email,
      cardId: std.card?.id,
      className: std.lop?.name,
      createdAt: std.createdAt,
      updatedAt: std.updatedAt,
    }));
  }, [students]);

  return (
    <div className="table-container">
      <div className="btn-group">
        <AddStudentModal />
        <AssignCardModal />
        <Upload {...uploadProps}>
          <Button type="primary">Import</Button>
        </Upload>
      </div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default StudentTable;
