import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import { RoutePath } from "./types/routes";

const Router = (props: any) => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
    </Routes>
  );
};

export default Router;
