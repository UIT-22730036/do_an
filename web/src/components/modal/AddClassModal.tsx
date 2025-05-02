import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { useGetClasses } from "../../hooks";
import { classService } from "../../services";

type Props = {};

type FieldType = {
  className: string;
};

const AddClassModal = (props: Props) => {
  const { getClasses } = useGetClasses();
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
      await classService.create({ name: data.className });
      await getClasses();

      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Thêm lớp
      </Button>
      <Modal
        title="Thêm lớp"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item<FieldType>
            label="Tên lớp"
            name="className"
            rules={[
              { required: true, message: "Tên lớp không được để trống!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddClassModal;
