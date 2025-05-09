import React, { useState } from "react";
import { useGetPositions, useGetProperties } from "../../hooks";
import { Button, Form, Input, Modal, Select } from "antd";
import { useStore } from "../../store";
import { propService } from "../../services";
import { useNotification } from "../../Notification";

type Props = {};

type FieldType = {
  name: string;
  positionId: number;
};

const AddPropModal = (props: Props) => {
  const notificationApi = useNotification();
  const { getProperties } = useGetProperties();
  const { getPositions } = useGetPositions();
  const { positions } = useStore();
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

      await propService.createProp({
        name: data.name,
        positionId: data.positionId,
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
        Thêm thiết bị
      </Button>
      <Modal
        title="Thêm thiết bị"
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
          <Form.Item<FieldType>
            label="Vị trí"
            name="positionId"
            rules={[{ required: true, message: "Vị trí không được để trống!" }]}
          >
            <Select
              onFocus={getPositions}
              options={positions.map((item) => ({
                label: item.name,
                value: item.id,
              }))}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddPropModal;
