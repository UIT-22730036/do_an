import { Route, Routes, useNavigate } from "react-router-dom";
import { HomePage, ManagePage } from "./pages";
import "./App.scss";
import { Segmented } from "antd";

function App() {
  const navigate = useNavigate();

  const handleNavigate = (value) => {
    switch (value) {
      case "Home":
        navigate("/");
        break;

      case "Manage":
        navigate("/manage");
        break;

      default:
        break;
    }
  };
  return (
    <div className="app">
      <div className="content">
        <div className="segmented-container">
          <Segmented options={["Home", "Manage"]} onChange={handleNavigate} />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manage" element={<ManagePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
