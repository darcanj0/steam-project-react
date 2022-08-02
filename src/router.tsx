import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home/index";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";
import ProfileSelection from "./pages/ProfileSelection";
import Settings from "./pages/Settings";
import { RoutePath } from "./types/routes";

interface RouterProps {
  lightMode: boolean;
}

const Router = (props: RouterProps) => {
  return (
    <Routes>
      <Route
        path={RoutePath.HOME}
        element={<Home inLightMode={props.lightMode} />}
      />
      <Route
        path={RoutePath.ADMIN}
        element={<Admin inLightMode={props.lightMode} />}
      />
      <Route
        path={RoutePath.LOGIN}
        element={<Login inLightMode={props.lightMode} />}
      />
      <Route
        path={RoutePath.PROFILES}
        element={<Profiles inLightMode={props.lightMode} />}
      />
      <Route
        path={RoutePath.PROFILESELECTION}
        element={<ProfileSelection inLightMode={props.lightMode} />}
      />
      <Route
        path={RoutePath.SETTINGS}
        element={<Settings inLightMode={props.lightMode} />}
      />
    </Routes>
  );
};

export default Router;
