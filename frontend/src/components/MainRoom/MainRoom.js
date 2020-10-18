import React from "react";

import Navbar from "./Navbar/Navbar";
import MessageInput from "./MessageInput/MessageInput";
import ChatList from "./ChatList/ChatList";
import "./MainRoom.scss";

const MainRoom = ({ messages }) => {
  return (
    <div className="mainRoom">
      <Navbar />
      <div className="wrapper">
        <ChatList messages={messages} />
        <MessageInput />
      </div>
    </div>
  );
};

export default MainRoom;
