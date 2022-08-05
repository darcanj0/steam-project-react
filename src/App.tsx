import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Router from "./router";

function App() {
  const [lightMode, setLightMode] = useState<boolean>(false);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Router lightMode={lightMode}></Router>;
    </>
  );
}

export default App;
