import { Form } from "antd";
import React from "react";

const EditStudentModal = ({ student }) => {
  const [studentForm] = Form.useForm();
  const [isEditStudentModalOpen, setIsEditStudentModalOpen] = useState(false);

  const showEditStudentModal = () => {
    setIsEditStudentModalOpen(true);
  };

  const handleEditStudentOk = async () => {
    try {
      studentForm.submit();
      const value = studentForm.getFieldsValue();
      if (Object.values(value).some((v) => !v)) return;
      const { tenSV, email, tenLop } = value;
      const res = await studentService.createStudent(tenSV, email, tenLop);
      setStudents([...students, res.data]);
      studentForm.resetFields();
      setIsEditStudentModalOpen(false);
    } catch (error) {
      errorNotification(error.response.data.message);
    }
  };

  const handleEditStudentCancel = () => {
    setIsEditStudentModalOpen(false);
    studentForm.resetFields();
  };
  return <div>EditStudentModal</div>;
};

export default EditStudentModal;
