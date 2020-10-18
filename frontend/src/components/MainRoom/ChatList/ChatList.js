import React from "react";

import ChaItem from "./ChatItem/ChatItem";

const ChatList = ({ messages }) => {
  return messages.map((message) => (
    <ChaItem key={message._id} message={message} />
  ));
};

export default ChatList;
