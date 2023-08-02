import { Outlet } from "react-router-dom";
import Header from "../../layout/Header/Header";
// import { Sidebar } from "../../layout/Sidebar/Sidebar";
import { Fragment } from "react";

export const WithNav = () => {
  return (
    <Fragment>
      <Header />
      {/* <Sidebar /> */}
      <Outlet />
    </Fragment>
  );
};
