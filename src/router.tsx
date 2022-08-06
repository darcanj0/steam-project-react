import { Dispatch, SetStateAction } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home/index";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";
import ProfileSelection from "./pages/ProfileSelection";
import Settings from "./pages/Settings";
import Profile from "./types/profiles";
import { RoutePath } from "./types/routes";

interface RouterProps {
  lightMode: boolean;
  currentProfile: Profile | undefined;
  setCurrentProfile: Dispatch<SetStateAction<Profile | undefined>>;
}

const Router = ({
  lightMode,
  currentProfile,
  setCurrentProfile,
}: RouterProps) => {
  return (
    <Routes>
      <Route
        path={RoutePath.HOME}
        element={
          <Home inLightMode={lightMode} currentProfile={currentProfile} />
        }
      />
      <Route
        path={RoutePath.ADMIN}
        element={<Admin inLightMode={lightMode} />}
      />
      <Route
        path={RoutePath.LOGIN}
        element={<Login inLightMode={lightMode} />}
      />
      <Route
        path={RoutePath.PROFILES}
        element={<Profiles inLightMode={lightMode} />}
      />
      <Route
        path={RoutePath.PROFILESELECTION}
        element={
          <ProfileSelection
            inLightMode={lightMode}
            setCurrentProfile={setCurrentProfile}
          />
        }
      />
      <Route
        path={RoutePath.SETTINGS}
        element={<Settings inLightMode={lightMode} />}
      />
    </Routes>
  );
};

export default Router;
