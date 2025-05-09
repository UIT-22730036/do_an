import React, { useState } from "react";
import { useGetPositions } from "../../hooks";
import { Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { positionService } from "../../services";
import { useNotification } from "../../Notification";

type Props = {
  record: Record<string, unknown>;
};

const DeletePositionModal = ({ record }: Props) => {
  const notificationApi = useNotification();
  const { getPositions } = useGetPositions();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await positionService.deletePosition(record.id as number);
      await getPositions();
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
        title="Xóa vị trí"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          variant: "solid",
          color: "danger",
        }}
      >
        <p>
          Bạn chắc chắn muốn xóa vị trí <strong>{record.name as string}</strong>
          ?
        </p>
      </Modal>
    </>
  );
};

export default DeletePositionModal;
