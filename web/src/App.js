import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
