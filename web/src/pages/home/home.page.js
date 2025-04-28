import React, { useEffect, useMemo, useState } from "react";
import { useStudentStore } from "../../store";
import { Button, Cascader, Form, Input, message, Select, Table } from "antd";
import * as moment from "moment";
import { Modal } from "../../components";
import "./home.scss";
import { studentService, classService } from "../../services";
import { useClassStore } from "../../store/class.store";

const HomePage = () => {
  const [studentForm] = Form.useForm();
  const [classForm] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);
  const [isAddClassModalOpen, setIsAddClassModalOpen] = useState(false);

  const { students, setStudents } = useStudentStore();
  const { classes, setClasses } = useClassStore();

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

  const handleFocusClassSelect = async () => {
    const res = await classService.getClasses();
    setClasses(res.data);
  };

  const showAddStudentModal = () => {
    setIsAddStudentModalOpen(true);
  };

  const handleAddStudentOk = async () => {
    try {
      studentForm.submit();
      const value = studentForm.getFieldsValue();
      if (Object.values(value).some((v) => !v)) return;
      const { tenSV, email, tenLop } = value;
      const res = await studentService.createStudent(tenSV, email, tenLop);
      setStudents([...students, res.data]);
      studentForm.resetFields();
      setIsAddStudentModalOpen(false);
    } catch (error) {
      errorNotification(error.response.data.message);
    }
  };

  const handleAddStudentCancel = () => {
    setIsAddStudentModalOpen(false);
    studentForm.resetFields();
  };

  const showAddClassModal = () => {
    setIsAddClassModalOpen(true);
  };

  const handleAddClassOk = async () => {
    try {
      classForm.submit();
      const value = classForm.getFieldsValue();
      if (Object.values(value).some((v) => !v)) return;
      const { tenLop } = value;
      const res = await classService.createClass(tenLop);
      setClasses([...classes, res.data]);
      classForm.resetFields();
      setIsAddClassModalOpen(false);
    } catch (error) {
      errorNotification(error.response.data.message);
    }
  };

  const handleAddClassCancel = () => {
    setIsAddClassModalOpen(false);
    classForm.resetFields();
  };

  const errorNotification = (errorMessage) => {
    messageApi.open({
      type: "error",
      content: errorMessage,
    });
  };
  console.log(studentForm.getFieldsValue());

  return (
    <div className="home-page">
      {contextHolder}
      <div className="control">
        <div className="btn-group">
          <Button
            type="primary"
            className="add-student-btn"
            onClick={showAddStudentModal}
          >
            Thêm Sinh Viên
          </Button>
          <Button
            type="primary"
            className="add-class-btn"
            onClick={showAddClassModal}
          >
            Thêm Lớp
          </Button>
        </div>
      </div>
      <Table
        className="student-table"
        bordered
        columns={columns}
        dataSource={tableData}
      />
      <Modal
        title="Thêm Sinh Viên"
        open={isAddStudentModalOpen}
        onOk={handleAddStudentOk}
        onCancel={handleAddStudentCancel}
      >
        <div className="modal-content">
          <Form
            form={studentForm}
            className="add-student-form"
            layout="vertical"
          >
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
              name="tenLop"
              required
              rules={[
                { required: true, message: "Lớp SV không được để trống" },
              ]}
            >
              <Select
                onFocus={handleFocusClassSelect}
                options={classes.map((cls) => ({
                  value: cls.tenLop,
                  label: cls.tenLop,
                }))}
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <Modal
        title="Thêm Lớp"
        open={isAddClassModalOpen}
        onOk={handleAddClassOk}
        onCancel={handleAddClassCancel}
      >
        <div className="modal-content">
          <Form form={classForm} className="add-class-form" layout="vertical">
            <Form.Item
              layout="vertical"
              label="Tên lớp"
              name="tenLop"
              required
              rules={[
                { required: true, message: "Tên lớp không được để trống" },
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
