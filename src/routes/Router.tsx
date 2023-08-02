import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Dashboard } from "../pages/Dashboard/Dashboard";

// eslint-disable-next-line react-refresh/only-export-components
export enum ROUTES {
  HOME = "/",
  LOGIN = "/login",
  DASHBOARD = "/dashboard",
  NOAUTHORIZED = "/no-authorized",
}

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
    </Routes>
  );
}
