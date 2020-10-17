import React, { useState } from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import IconButton from "@material-ui/core/IconButton";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { ThemeProvider } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

import useStyles from "./Navbar.styles";

const Navbar = () => {
  const [themeToggle, setThemeToggle] = useState(false);
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <ListItem className={classes.ListItem}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          className={classes.ListItemText}
          primary="Photos"
          secondary="Jan 9, 2014"
        />
      </ListItem>
      <IconButton onClick={() => setThemeToggle(!themeToggle)}>
        {theme.palette.type && themeToggle ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </div>
  );
};

export default Navbar;
