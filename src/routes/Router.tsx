import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { WithNav } from "./RoutesLayout/WithNav";

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
      <Route element={<WithNav />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
