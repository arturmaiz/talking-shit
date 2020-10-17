import React from "react";

import Avatar from "@material-ui/core/Avatar";

import { useStyles, StyledBadge } from "./UserAvatar.styles";

const UserAvatar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
    </div>
  );
};

export default UserAvatar;
