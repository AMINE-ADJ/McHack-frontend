import React from "react";
import { Outlet } from "react-router-dom";
import DashboardBar from "../Components/DashboardBar";
export default function Dashboard() {
  return (
    <div>
      <DashboardBar />
      <Outlet />
    </div>
  );
}
