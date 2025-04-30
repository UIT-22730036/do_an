import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, Modal, Select } from "antd";
import {
  cardService,
  classService,
  studentService,
} from "../../../../services";

const AddCardModal = ({ errorNotification }) => {
  const [cardForm] = Form.useForm();

  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);

  const handleFocusClassSelect = async () => {
    const res = await classService.getClasses();
    setClasses(res.data);
  };

  const handleFocusStudentSelect = async () => {
    const tenLop = cardForm.getFieldValue("tenLop");
    const res = await studentService.getStudentsByClass(tenLop);
    setStudents(res.data);
  };

  const showAddCardModal = () => {
    setIsAddCardModalOpen(true);
  };

  const handleAddCardOk = async () => {
    try {
      cardForm.submit();
      const value = cardForm.getFieldsValue();
      if (Object.values(value).some((v) => !v)) return;
      const { maSV } = value;
      const res = await cardService.createCardByStudentId(maSV);
      cardForm.resetFields();
      setIsAddCardModalOpen(false);
    } catch (error) {
      errorNotification(error.response.data.message);
    }
  };

  const handleAddCardCancel = () => {
    setIsAddCardModalOpen(false);
    cardForm.resetFields();
  };

  console.log(
    `cardForm.getFieldValue("tenLop")`,
    cardForm.getFieldValue("tenLop"),
  );

  return (
    <div>
      <Button
        type="primary"
        className="add-card-btn"
        onClick={showAddCardModal}
      >
        Cấp Thẻ
      </Button>
      <Modal
        title="Cấp Thẻ"
        open={isAddCardModalOpen}
        onOk={handleAddCardOk}
        onCancel={handleAddCardCancel}
      >
        <div className="modal-content">
          <Form form={cardForm} className="add-card-form" layout="vertical">
            <Form.Item
              layout="vertical"
              label="Lớp"
              name="tenLop"
              required
              rules={[{ required: true, message: "Lớp không được để trống" }]}
            >
              <Select
                onFocus={handleFocusClassSelect}
                onChange={() =>
                  setIsDisabled(!cardForm.getFieldValue("tenLop"))
                }
                options={classes.map((cls) => ({
                  value: cls.tenLop,
                  label: cls.tenLop,
                }))}
              />
            </Form.Item>
            <Form.Item
              layout="vertical"
              label="Sinh Viên"
              name="maSV"
              required
              rules={[{ required: true, message: "SV không được để trống" }]}
            >
              <Select
                disabled={isDisabled}
                onFocus={handleFocusStudentSelect}
                options={students.map((std) => ({
                  value: std.maSV,
                  label: `${std.maSV} - ${std.tenSV}`,
                }))}
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

AddCardModal.propTypes = {
  errorNotification: PropTypes.func.isRequired,
};

export default AddCardModal;
