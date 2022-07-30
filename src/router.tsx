import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home/index";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";
import ProfileSelection from "./pages/ProfileSelection";
import { RoutePath } from "./types/routes";

const Router = (props: any) => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.ADMIN} element={<Admin />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.PROFILES} element={<Profiles />} />
      <Route path={RoutePath.PROFILESELECTION} element={<ProfileSelection />} />
    </Routes>
  );
};

export default Router;
