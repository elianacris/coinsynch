import { Outlet } from "react-router-dom";
// import Header from "../../layout/Header/Header";
// import { Sidebar } from "../../layout/Sidebar/Sidebar";
import { Fragment } from "react";
import Footer from "../../layout/Footer/Footer";
import ResponsiveAppBar from "../../layout/Header/HeaderResponse";

export const WithNav = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      <ResponsiveAppBar />
      {/* <Sidebar /> */}
      <Outlet />
      <Footer />
    </Fragment>
  );
};
