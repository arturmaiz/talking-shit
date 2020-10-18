import React, { useEffect } from "react";
import Pusher from "pusher-js";

import MainRoom from "./components/MainRoom/MainRoom";
import Sidebar from "./components/Sidebar/Sidebar";

import "./style.scss";

const App = () => {
  useEffect(() => {
    const pusher = new Pusher("ed615816d21fdd790ef8", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="wrapper">
      <Sidebar />
      <MainRoom />
    </div>
  );
};

export default App;
