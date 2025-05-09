import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useGetClasses, useGetStudents } from "../../hooks";
import { useStore } from "../../store";
import { studentService } from "../../services";
import { useNotification } from "../../Notification";

type Props = {
  record: Record<string, unknown>;
};

type FieldType = {
  name: string;
  email: string;
  classId: number;
};

const EditStudentModal = ({ record }: Props) => {
  const notificationApi = useNotification();
  const { getStudents } = useGetStudents();
  const { getClasses } = useGetClasses();
  const { classes } = useStore();

  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getClasses();
  }, []);

  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        name: record.name,
        email: record.email,
        classId: classes.find((item) => item.name === record.className)?.id,
      });
    }
  }, [record, classes, form]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async () => {
    try {
      const data = form.getFieldsValue();
      await studentService.updateStudent(record.id as number, data);
      await getStudents();

      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      notificationApi.error({
        message: "Lỗi",
        description: error.message,
      });
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <EditOutlined />
      </Button>
      <Modal
        title="Sửa Sinh Viên"
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
              options={classes.map((item) => ({
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

export default EditStudentModal;
