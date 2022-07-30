import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home/index";
import { RoutePath } from "./types/routes";

const Router = (props: any) => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.ADMIN} element={<Admin />} />
    </Routes>
  );
};

export default Router;
