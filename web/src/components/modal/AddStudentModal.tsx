import { Button, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { studentService } from "../../services";
import { useGetStudents } from "../../hooks";

type Props = {};

type FieldType = {
  name: string;
  email: string;
  classId: number;
};

const AddStudentModal = (props: Props) => {
  const { getStudents } = useGetStudents();
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const onFinish = async () => {
    try {
      const data = form.getFieldsValue();
      await studentService.createStudent(data);
      await getStudents();

      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Thêm SV
      </Button>
      <Modal
        title="Thêm Sinh Viên"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item<FieldType>
            label="Tên SV"
            name="name"
            rules={[{ required: true, message: "Tên không được để trông!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Email SV"
            name="email"
            rules={[{ required: true, message: "Email không được để trống!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType> label="Lớp" name="classId">
            <Select
              options={[].map((item) => ({
                value: item.id,
                label: item.name,
              }))}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddStudentModal;
