import { Route, Routes, useNavigate } from "react-router-dom";
import { MapComponent } from "./components";
import { Segmented } from "antd";
import { ManagePage } from "./pages";
import { useEffect, useState } from "react";

function App() {
  const [tab, setTab] = useState<string>("Home");
  const navigate = useNavigate();

  useEffect(() => {
    if (tab === "Home") {
      navigate("/");
      return;
    }

    navigate(`/${tab.toLowerCase()}`);
  }, [tab]);

  const handleChange = (value: string) => {
    setTab(value);
  };

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <div style={{ width: "80%", margin: "auto" }}>
        <Segmented<string>
          options={["Home", "Manage"]}
          onChange={handleChange}
          style={{ width: "fit-content", marginBottom: 16 }}
          value={tab}
        />
        <Routes>
          <Route path="/" element={<MapComponent />} />
          <Route path="/manage" element={<ManagePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
