import React, { useEffect, useMemo } from "react";
import { classService } from "../../../services";
import moment from "moment";
import { Table } from "antd";
import PropTypes from "prop-types";

const ClassTable = ({ classes, setClasses }) => {
  useEffect(() => {
    const fetchClasses = async () => {
      const res = await classService.getClasses();
      setClasses(res.data);
    };

    fetchClasses();
  }, []);

  const columns = useMemo(() => {
    return [
      {
        title: "Mã Lớp",
        dataIndex: "maLop",
        key: "maLop",
      },
      {
        title: "Tên Lớp",
        dataIndex: "tenLop",
        key: "tenLop",
      },
      {
        title: "Số SV",
        dataIndex: "soSV",
        key: "soSV",
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
      classes?.map((std) => ({
        maLop: std.maLop,
        tenLop: std.tenLop,
        soSV: std.soSV,
        createdAt: std.createdAt,
        updatedAt: std.updatedAt,
      })) ?? []
    );
  }, [classes]);

  return (
    <Table
      className="class-table"
      bordered
      columns={columns}
      dataSource={tableData}
    />
  );
};

ClassTable.propTypes = {
  classes: PropTypes.array.isRequired,
  setClasses: PropTypes.func.isRequired,
};

export default ClassTable;
