import React, { useState } from "react";
import { message, Segmented } from "antd";
import "./manage.scss";
import StudentTable from "./tables/StudentTable";
import ClassTable from "./tables/ClassTable";
import AddStudentModal from "./components/modals/AddStudentModal";
import AddClassModal from "./components/modals/AddClassModal";
import AddCardModal from "./components/modals/AddCardModal";

const ManagePage = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [tab, setTab] = useState("Sinh Viên");

  const errorNotification = (errorMessage) => {
    messageApi.open({
      type: "error",
      content: errorMessage,
    });
  };

  const handleRenderTable = () => {
    switch (tab) {
      case "Sinh Viên":
        return <StudentTable students={students} setStudents={setStudents} />;

      case "Lớp":
        return <ClassTable classes={classes} setClasses={setClasses} />;

      default:
        return <></>;
    }
  };
  return (
    <div className="manage-page">
      {contextHolder}
      <div className="control">
        <div className="btn-group">
          <AddStudentModal
            errorNotification={errorNotification}
            students={students}
            setStudents={setStudents}
            setClasses={setClasses}
            classes={classes}
          />
          <AddCardModal errorNotification={errorNotification} />
          <AddClassModal
            classes={classes}
            setClasses={setClasses}
            errorNotification={errorNotification}
          />
        </div>
      </div>
      <Segmented
        style={{ width: "fit-content" }}
        options={["Sinh Viên", "Lớp"]}
        onChange={(value) => setTab(value)}
      />
      {handleRenderTable()}
    </div>
  );
};

export default ManagePage;
