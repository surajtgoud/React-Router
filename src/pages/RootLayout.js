import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import "./RootLayout.css";

export default function RootLayout() {
  return (
    <div>
      <MainNavigation />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
