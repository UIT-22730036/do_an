import { DeleteOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useGetClasses } from "../../hooks";
import { classService } from "../../services";
import { useNotification } from "../../Notification";

type Props = {
  record: Record<string, unknown>;
};

const DeleteClassModal = ({ record }: Props) => {
  const notificationApi = useNotification();
  const { getClasses } = useGetClasses();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await classService.deleteClass(record.id as number);
      await getClasses();
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
        title="Xóa lớp"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          variant: "solid",
          color: "danger",
        }}
      >
        <p>
          Bạn chắc chắn muốn xóa lớp <strong>{record.name as string}</strong>?
        </p>
      </Modal>
    </>
  );
};

export default DeleteClassModal;
