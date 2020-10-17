import React from "react";

import MainRoom from "./components/MainRoom/MainRoom";
import Sidebar from "./components/Sidebar/Sidebar";

import "./style.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <MainRoom />
    </div>
  );
};

export default App;
