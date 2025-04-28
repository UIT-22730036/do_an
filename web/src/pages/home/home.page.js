import React, { useEffect, useMemo, useState } from "react";
import { useStudentStore } from "../../store";
import { studentService } from "../../services/students.service";
import { Button, Form, Input, message, Table } from "antd";
import * as moment from "moment";
import { Modal } from "../../components";
import "./home.scss";

const HomePage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { students, setStudents } = useStudentStore();
  const [form] = Form.useForm();

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
        dataIndex: "lop",
        key: "lop",
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
        lop: std.lop,
        createdAt: std.createdAt,
        updatedAt: std.updatedAt,
      })) ?? []
    );
  }, [students]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      const { tenSV, email, lop } = form.getFieldsValue();
      const res = await studentService.createStudent(tenSV, email, lop);
      console.log(res);

      setStudents([...students, res.data]);
      form.resetFields();
      setIsModalOpen(false);
    } catch (error) {
      errorNotification(error.response.data.message);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const errorNotification = (errorMessage) => {
    messageApi.open({
      type: "error",
      content: errorMessage,
    });
  };

  return (
    <div className="home-page">
      {contextHolder}
      <div className="control">
        <Button type="primary" className="add-student-btn" onClick={showModal}>
          Thêm Sinh Viên
        </Button>
      </div>
      <Table
        className="student-table"
        bordered
        columns={columns}
        dataSource={tableData}
      />
      <Modal
        title="Thêm Sinh Viên"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="modal-content">
          <Form form={form} className="add-student-form" layout="vertical">
            <Form.Item
              layout="vertical"
              label="Tên SV"
              name="tenSV"
              required
              rules={[
                { required: true, message: "Tên SV không được để trống" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              layout="vertical"
              label="Email"
              name="email"
              required
              rules={[
                { required: true, message: "Email SV không được để trống" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              layout="vertical"
              label="Lớp"
              name="lop"
              required
              rules={[
                { required: true, message: "Lớp SV không được để trống" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;
