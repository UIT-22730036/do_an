import { DeleteOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useGetStudents } from "../../hooks";
import { studentService } from "../../services";
import { useNotification } from "../../Notification";

type Props = {
  record: Record<string, unknown>;
};

const DeleteStudentModal = ({ record }: Props) => {
  const notificationApi = useNotification();
  const { getStudents } = useGetStudents();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await studentService.deleteStudent(record.id as number);
      await getStudents();
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
        title="Xóa Sinh Viên"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          variant: "solid",
          color: "danger",
        }}
      >
        <p>
          Bạn chắc chắn muốn xóa sinh viên tên{" "}
          <strong>{record.name as string}</strong> với mã sinh viên{" "}
          <strong>{record.id as number}</strong>?
        </p>
      </Modal>
    </>
  );
};

export default DeleteStudentModal;
