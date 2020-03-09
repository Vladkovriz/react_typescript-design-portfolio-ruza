import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { deepOrange, green } from "@material-ui/core/colors";

import * as path from "../constants/routes";
import LogoIcon from "../assets/logo.png";
import {
  ListItem,
  Avatar,
  AppBar,
  Toolbar,
  Typography,
  Button,
  ListItemIcon,
  ListItemText,
  List,
  Box,
  SvgIcon,
  IconButton
} from "@material-ui/core";

import IconSVG from "./IconSVG";

import WA from "../assets/WA.svg";
import Viber from "../assets/viber.svg";
import Telegram from "../assets/Telegram.svg";
import Instagram from "../assets/Instagram.svg";
import In from "../assets/In.svg";

const useStyles = makeStyles(theme => ({
  root: {
    height: "150px",
    flexGrow: 1,
    backgroundColor: "white",
    "& div": {
      backgroundColor: "white"
    }
  },
  toolbar: {
    height: "150px",
    display: "flex",
    justifyContent: "space-between"
  },
  boxIcon: {
    display: "flex"
  },
  menuList: {
    display: "flex",
    marginRight: theme.spacing(2),
    "& a": {
      whiteSpace: "nowrap"
    }
  },
  menuListIcon: {
    display: "flex",
    width: "140px",
    justifyContent: "space-between"
  },
  title: {
    flexGrow: 1
  },
  square: {
    color: "black",
    width: "70px",
    height: "88px",
    backgroundColor: deepOrange[500]
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Avatar
            variant="square"
            src={LogoIcon}
            className={classes.square}
          ></Avatar>
          <Box className={classes.boxIcon}>
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

            <List className={classes.menuListIcon}>
              <ListItem>
                <Link to={path.HOME}>
                  <IconSVG icon={WA} size={18}></IconSVG>
                </Link>
              </ListItem>
              <ListItem>
                <Link to={path.ABOUT_ME}>
                  <IconSVG icon={Viber} size={18}></IconSVG>
                </Link>
              </ListItem>{" "}
              <ListItem>
                <Link to={path.PORTFOLIO}>
                  <IconSVG icon={Telegram} size={18}></IconSVG>
                </Link>
              </ListItem>
              <ListItem>
                <Link to={path.FAQ}>
                  <IconSVG icon={Instagram} size={18}></IconSVG>
                </Link>
              </ListItem>{" "}
              <ListItem>
                <Link to={path.CONTACTS}>
                  <IconSVG icon={In} size={18}></IconSVG>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
