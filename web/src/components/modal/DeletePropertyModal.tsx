import React, { useState } from "react";
import { useGetProperties } from "../../hooks";
import { Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { propService } from "../../services";
import { useNotification } from "../../Notification";

type Props = {
  record: Record<string, unknown>;
};

const DeletePropertyModal = ({ record }: Props) => {
  const notificationApi = useNotification();
  const { getProperties } = useGetProperties();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await propService.deleteProp(record.id as number);
      await getProperties();
    } catch (error) {
      notificationApi.error({
        message: "Lỗi",
        description: error.message,
      });
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button variant="solid" color="danger" onClick={showModal}>
        <DeleteOutlined />
      </Button>
      <Modal
        title="Xóa thiết bị"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          variant: "solid",
          color: "danger",
        }}
      >
        <p>
          Bạn chắc chắn muốn xóa thiết bị{" "}
          <strong>{record.name as string}</strong>?
        </p>
      </Modal>
    </>
  );
};

export default DeletePropertyModal;
