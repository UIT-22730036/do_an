import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { classService } from "../../../../services";
import PropTypes from "prop-types";

const AddClassModal = ({ setClasses, errorNotification, classes }) => {
  const [classForm] = Form.useForm();
  const [isAddClassModalOpen, setIsAddClassModalOpen] = useState(false);

  const showAddClassModal = () => {
    setIsAddClassModalOpen(true);
  };

  const handleAddClassOk = async () => {
    try {
      classForm.submit();
      const value = classForm.getFieldsValue();
      if (Object.values(value).some((v) => !v)) return;
      const { tenLop } = value;
      const res = await classService.createClass(tenLop);
      setClasses([...classes, res.data]);
      classForm.resetFields();
      setIsAddClassModalOpen(false);
    } catch (error) {
      errorNotification(error.response.data.message);
    }
  };

  const handleAddClassCancel = () => {
    setIsAddClassModalOpen(false);
    classForm.resetFields();
  };
  return (
    <div>
      <Button
        type="primary"
        className="add-class-btn"
        onClick={showAddClassModal}
      >
        Thêm Lớp
      </Button>
      <Modal
        title="Thêm Lớp"
        open={isAddClassModalOpen}
        onOk={handleAddClassOk}
        onCancel={handleAddClassCancel}
      >
        <div className="modal-content">
          <Form form={classForm} className="add-class-form" layout="vertical">
            <Form.Item
              layout="vertical"
              label="Tên lớp"
              name="tenLop"
              required
              rules={[
                { required: true, message: "Tên lớp không được để trống" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

AddClassModal.propTypes = {
  setClasses: PropTypes.func.isRequired,
  errorNotification: PropTypes.func.isRequired,
  classes: PropTypes.array.isRequired,
};

export default AddClassModal;
