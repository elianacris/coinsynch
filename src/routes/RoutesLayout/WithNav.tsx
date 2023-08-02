import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../layout/Header/Header";
import { Sidebar } from "../../layout/Sidebar/Sidebar";

export const WithNav = () => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Outlet />
    </React.Fragment>
  );
};
