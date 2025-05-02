import { DeleteOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { cardService } from "../../services";
import { useGetCards } from "../../hooks/card.hook";

type Props = {
  record: Record<string, unknown>;
};

const DeleteCardModal = ({ record }: Props) => {
  const { getCards } = useGetCards();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await cardService.deleteCard(record.id as number);
      await getCards();
    } catch (error) {
      console.log(error);
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
        title="Xóa thẻ"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          variant: "solid",
          color: "danger",
        }}
      >
        <p>
          Bạn chắc chắn muốn xóa thẻ <strong>{record.id as string}</strong>?
        </p>
      </Modal>
    </>
  );
};

export default DeleteCardModal;
