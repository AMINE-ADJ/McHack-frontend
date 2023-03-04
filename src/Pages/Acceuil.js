import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";

export default function Acceuil() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Outlet />
      
    </div>
  );
}
