import { Button, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { classService, studentService } from "../../../../services";
import PropTypes from "prop-types";

const AddStudentModal = ({
  students,
  setStudents,
  errorNotification,
  setClasses,
  classes,
}) => {
  const [studentForm] = Form.useForm();

  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);

  const handleFocusClassSelect = async () => {
    const res = await classService.getClasses();
    setClasses(res.data);
  };

  const showAddStudentModal = () => {
    setIsAddStudentModalOpen(true);
  };

  const handleAddStudentOk = async () => {
    try {
      studentForm.submit();
      const value = studentForm.getFieldsValue();
      if (Object.values(value).some((v) => !v)) return;
      const { tenSV, email, tenLop } = value;
      const res = await studentService.createStudent(tenSV, email, tenLop);
      setStudents([...students, res.data]);
      studentForm.resetFields();
      setIsAddStudentModalOpen(false);
    } catch (error) {
      errorNotification(error.response.data.message);
    }
  };

  const handleAddStudentCancel = () => {
    setIsAddStudentModalOpen(false);
    studentForm.resetFields();
  };

  return (
    <div>
      <Button
        type="primary"
        className="add-student-btn"
        onClick={showAddStudentModal}
      >
        Thêm Sinh Viên
      </Button>
      <Modal
        title="Thêm Sinh Viên"
        open={isAddStudentModalOpen}
        onOk={handleAddStudentOk}
        onCancel={handleAddStudentCancel}
      >
        <div className="modal-content">
          <Form
            form={studentForm}
            className="add-student-form"
            layout="vertical"
          >
            <Form.Item
              layout="vertical"
              label="Tên SV"
              name="tenSV"
              required
              rules={[
                { required: true, message: "Tên SV không được để trống" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              layout="vertical"
              label="Email"
              name="email"
              required
              rules={[
                { required: true, message: "Email SV không được để trống" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              layout="vertical"
              label="Lớp"
              name="tenLop"
              required
              rules={[
                { required: true, message: "Lớp SV không được để trống" },
              ]}
            >
              <Select
                onFocus={handleFocusClassSelect}
                options={classes.map((cls) => ({
                  value: cls.tenLop,
                  label: cls.tenLop,
                }))}
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

AddStudentModal.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired,
  errorNotification: PropTypes.func.isRequired,
  setClasses: PropTypes.func.isRequired,
  classes: PropTypes.array.isRequired,
};

export default AddStudentModal;
