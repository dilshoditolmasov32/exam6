import { Outlet } from "react-router-dom";
import Sidebar from "../paperbase";
import "./index.css";

const Index = () => {
  return (
    <div className="main_page">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Index;
