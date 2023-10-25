import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Dashboard/Shared/Topbar";
import Sidebar from "../components/Dashboard/Shared/Sidebar";

const Dashboard = () => {

    // handel sidebar
    const [sidebar, setSidebar] = useState(false)

  return (
    <div className="overflow-hidden" style={{ fontFamily: "'Lexend', sans-serif" }}>
      <Topbar sidebar={sidebar} setSidebar={setSidebar}></Topbar>
      <div className="mt-[60px] flex">
        <Sidebar sidebar={sidebar}></Sidebar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
