import { Button, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useGetClasses } from "../../hooks";
import { classService } from "../../services";
import { EditOutlined } from "@ant-design/icons";

type Props = {
  record: Record<string, unknown>;
};

type FieldType = {
  className: string;
};

const EditClassModal = ({ record }: Props) => {
  const { getClasses } = useGetClasses();
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        ...record,
        className: record.name,
      });
    }
  }, [record, form]);

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
      await classService.updateClass(record.id as number, {
        name: data.className,
      });
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
        <EditOutlined />
      </Button>
      <Modal
        title="Sửa lớp"
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

export default EditClassModal;
