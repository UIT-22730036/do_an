import { Button, Form, Modal, Select } from "antd";
import React, { useState } from "react";
import { useGetStudents } from "../../hooks";
import { cardService } from "../../services";
import { useStore } from "../../store";
import { useGetCards } from "../../hooks/card.hook";

type Props = {};

type FieldType = {
  studentId: number;
};

const AssignCardModal = (props: Props) => {
  const { getStudents } = useGetStudents();
  const { getCards } = useGetCards();
  const { students } = useStore();
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
      await cardService.createCard(data.studentId);
      await getStudents();
      await getCards();

      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Cấp thẻ
      </Button>
      <Modal
        title="Cấp thẻ"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item<FieldType>
            label="Sinh Viên"
            name="studentId"
            rules={[{ required: true, message: "Vui lòng chọn sinh viên" }]}
          >
            <Select
              options={students
                .filter((item) => !item.card)
                .map((item) => ({
                  value: item.id,
                  label: `${item.id} - ${item.name}`,
                }))}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AssignCardModal;
