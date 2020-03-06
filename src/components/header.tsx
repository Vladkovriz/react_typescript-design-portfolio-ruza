import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { deepOrange, green } from "@material-ui/core/colors";

import * as path from "../constants/routes";

import {
  ListItem,
  Avatar,
  AppBar,
  Toolbar,
  Typography,
  Button,
  ListItemIcon,
  ListItemText,
  List
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "150px",
    flexGrow: 1,
    backgroundColor: "white",
    "& div": {
      backgroundColor: "white"
    }
  },
  toolbar: {
    height: "150px"
  },
  menuList: {
    display: "flex",
    marginRight: theme.spacing(2),
    "& a": {
      whiteSpace: "nowrap"
    }
  },
  title: {
    flexGrow: 1
  },
  square: {
    color: "black",
    backgroundColor: deepOrange[500]
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Avatar variant="square" className={classes.square}>
            A
          </Avatar>
          <List className={classes.menuList}>
            <ListItem>
              <Link to={path.HOME}>Home</Link>
            </ListItem>
            <ListItem>
              <Link to={path.ABOUT_ME}>About Me</Link>
            </ListItem>{" "}
            <ListItem>
              <Link to={path.PORTFOLIO}>Portfolio</Link>
            </ListItem>
            <ListItem>
              <Link to={path.FAQ}>FAQ</Link>
            </ListItem>{" "}
            <ListItem>
              <Link to={path.CONTACTS}>Contacts</Link>
            </ListItem>
          </List>
          {/* 
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul> */}
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
