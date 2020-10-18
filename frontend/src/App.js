import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "axios";

import MainRoom from "./components/MainRoom/MainRoom";
import Sidebar from "./components/Sidebar/Sidebar";

import "./style.scss";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const messages = await axios.get(`/messages`);
      setMessages(messages.data.messages);
    }

    fetchMyAPI();
  }, []);

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
