import { useState } from "react";
import Router from "./router";

function App() {
  const [lightMode, setLightMode] = useState<boolean>(false);

  return <Router lightMode={lightMode}></Router>;
}

export default App;
