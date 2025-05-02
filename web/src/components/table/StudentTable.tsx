import React, { useEffect, useMemo } from "react";
import moment from "moment";
import { useStore } from "../../store";
import { Button, message, Table, Upload, UploadProps } from "antd";
import { AddStudentModal, AssignCardModal } from "../modal";
import { useGetStudents } from "../../hooks";
import EditStudentModal from "../modal/EditStudentModal";
import DeleteStudentModal from "../modal/DeleteStudentModal";

const uploadProps: UploadProps = {
  name: "file",
  action: `${process.env.REACT_APP_API_URL}/students/upload`,
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

type Props = {};

const StudentTable = (props: Props) => {
  const { getStudents } = useGetStudents();
  const { students } = useStore();

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
    },
    {
      title: "Email SV",
      dataIndex: "email",
      key: "email",
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
