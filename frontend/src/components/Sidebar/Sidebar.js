import React from "react";

import Divider from "@material-ui/core/Divider";

import UserAvatar from "../UserAvatar/UserAvatar";
import Rooms from "./Rooms/Rooms";

import "./styles.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <UserAvatar />
      <Divider />
      <Rooms />
    </div>
  );
};

export default Sidebar;
