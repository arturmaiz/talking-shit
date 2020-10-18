import React from "react";

import Navbar from "./Navbar/Navbar";
import MessageInput from "./MessageInput/MessageInput";

import "./MainRoom.scss";

const MainRoom = () => {
  return (
    <div className="mainRoom">
      <Navbar />
      <MessageInput />
    </div>
  );
};

export default MainRoom;
