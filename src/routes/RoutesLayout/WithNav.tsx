import { Outlet } from "react-router-dom";
import Header from "../../layout/Header/Header";
// import { Sidebar } from "../../layout/Sidebar/Sidebar";
import { Fragment } from "react";
import Footer from "../../layout/Footer/Footer";

export const WithNav = () => {
  return (
    <Fragment>
      <Header />
      {/* <Sidebar /> */}
      <Outlet />
      <Footer />
    </Fragment>
  );
};
