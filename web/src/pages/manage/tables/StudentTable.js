import React, { useEffect, useMemo } from "react";
import { Table } from "antd";
import * as moment from "moment";
import PropTypes from "prop-types";
import { studentService } from "../../../services";

const StudentTable = ({ students, setStudents }) => {
  useEffect(() => {
    const fetchStudents = async () => {
      const res = await studentService.getStudents();
      setStudents(res.data);
    };

    fetchStudents();
  }, []);

  const columns = useMemo(() => {
    return [
      {
        title: "Mã SV",
        dataIndex: "maSV",
        key: "maSV",
      },
      {
        title: "Tên SV",
        dataIndex: "tenSV",
        key: "tenSV",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Lớp",
        dataIndex: "tenLop",
        key: "tenLop",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
        render: (text) => moment(text).format("DD/MM/YYYY HH:mm:ss"),
      },
      {
        title: "Updated At",
        dataIndex: "updatedAt",
        key: "updatedAt",
        render: (text) => moment(text).format("DD/MM/YYYY HH:mm:ss"),
      },
    ];
  }, []);

  const tableData = useMemo(() => {
    return (
      students?.map((std) => ({
        maSV: std.maSV,
        tenSV: std.tenSV,
        email: std.email,
        tenLop: std.lop.tenLop,
        createdAt: std.createdAt,
        updatedAt: std.updatedAt,
      })) ?? []
    );
  }, [students]);
  return (
    <Table
      className="student-table"
      bordered
      columns={columns}
      dataSource={tableData}
    />
  );
};

StudentTable.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired,
};

export default StudentTable;
