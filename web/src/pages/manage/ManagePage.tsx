import { Tabs, TabsProps } from "antd";
import { ClassTable, StudentTable } from "../../components";
import CardTable from "../../components/table/CardTable";
import "./ManagePage.scss";
import { useGetClasses, useGetStudents } from "../../hooks";

type Props = {};

const ManagePage = (props: Props) => {
  const { getStudents } = useGetStudents();
  const { getClasses } = useGetClasses();

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Sinh viên",
      children: <StudentTable />,
    },
    {
      key: "2",
      label: "Lớp",
      children: <ClassTable />,
    },
    {
      key: "3",
      label: "Thẻ SV",
      children: <CardTable />,
    },
  ];

  const handleChange = (value: string) => {
    switch (value) {
      case "1":
        getStudents();
        break;

      case "2":
        getClasses();
        break;

      default:
        break;
    }
  };
  return (
    <div className="manage-page">
      <Tabs defaultActiveKey="1" items={items} onChange={handleChange} />
    </div>
  );
};

export default ManagePage;
