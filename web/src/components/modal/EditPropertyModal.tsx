import React, { useEffect, useState } from "react";
import { useGetProperties } from "../../hooks";
import { Button, Form, Input, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { propService } from "../../services";
import { useNotification } from "../../Notification";

type Props = {
  record: Record<string, unknown>;
};

type FieldType = {
  name: string;
};

const EditPropertyModal = ({ record }: Props) => {
  const notificationApi = useNotification();
  const { getProperties } = useGetProperties();
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
      await propService.updateProp(record.id as number, {
        name: data.name,
      });
      await getProperties();

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
        title="Sửa thiết bị"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item<FieldType>
            label="Tên thiết bị"
            name="name"
            rules={[
              { required: true, message: "Tên thiết bị không được để trống!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditPropertyModal;
