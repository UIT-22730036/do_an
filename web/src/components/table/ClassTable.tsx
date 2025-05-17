import React, { useEffect, useMemo } from "react";
import { useGetClasses } from "../../hooks";
import { useStore } from "../../store";
import moment from "moment";
import { Table } from "antd";
import AddClassModal from "../modal/AddClassModal";
import EditClassModal from "../modal/EditClassModal";
import DeleteClassModal from "../modal/DeleteClassModal";

type Props = {};

const ClassTable = (props: Props) => {
  const { getClasses } = useGetClasses();
  const { classes } = useStore();

  useEffect(() => {
    getClasses();
  }, []);

  const columns = [
    {
      title: "Mã Lớp",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên Lớp",
      dataIndex: "name",
      key: "name",
      filters: classes.map((item) => ({
        text: item.name,
        value: item.name,
      })),
      onFilter: (value, record) => record.name.startsWith(value as string),
    },
    {
      title: "Sĩ số",
      dataIndex: "studentCount",
      key: "studentCount",
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
          <EditClassModal record={record} />
          <DeleteClassModal record={record} />
        </div>
      ),
    },
  ];

  const data = useMemo(() => {
    return classes.map((item) => ({
      key: item.id,
      id: item.id,
      name: item.name,
      studentCount: item.studentCount,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));
  }, [classes]);

  return (
    <div className="table-container">
      <div className="btn-group">
        <AddClassModal />
      </div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default ClassTable;
