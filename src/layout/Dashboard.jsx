import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Dashboard/Shared/Topbar";
import Sidebar from "../components/Dashboard/Shared/Sidebar";
import AddUser from "../components/Dashboard/AddUser/AddUser";
import ViewMeal from "../components/Dashboard/ViewMeal/ViewMeal";
import ViewRoutine from "../components/Dashboard/ViewRoutine/ViewRutine";
import AddMealPlan from "../components/Dashboard/AddMealPlan/AddMealPlan";
import AddAvailability from "../components/Dashboard/AddAvailability/AddAvailability";
import AddTrainer from "../components/Dashboard/AddTrainer/AddTrainer";
import ViewUser from "../components/Dashboard/ViewUser/ViewUser";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  // handel sidebar
  const [sidebar, setSidebar] = useState(false);

  return (
    <div
      className="overflow-y-auto h-screen"
      style={{ fontFamily: "'Lexend', sans-serif" }}
    >
      <Topbar sidebar={sidebar} setSidebar={setSidebar}></Topbar>
      <div className="mt-[60px] flex ">
        <Sidebar sidebar={sidebar}></Sidebar>
        <div className="  bg-[#fff2f2] w-full px-4 py-6">
          <Outlet></Outlet>
        </div>{" "}
      </div>
      {/* Modals */}
      <AddUser></AddUser>
      <ViewMeal></ViewMeal>
      <ViewRoutine></ViewRoutine>
      <AddMealPlan></AddMealPlan>
      <AddAvailability></AddAvailability>
      <AddTrainer></AddTrainer>
      <ViewUser></ViewUser>

      {/* React Hot toast */}
      <Toaster />
    </div>
  );
};

export default Dashboard;
