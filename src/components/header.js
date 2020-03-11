import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { deepOrange, green } from "@material-ui/core/colors";

import * as path from "../constants/routes";
import LogoIcon from "../assets/logoBlack.png";
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

import WA from "../assets/Social/WA.svg";
import Viber from "../assets/Social/viber.svg";
import Telegram from "../assets/Social/Telegram.svg";
import Instagram from "../assets/Social/Instagram.svg";
import In from "../assets/Social/In.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "150px",
    flexGrow: 1,
    backgroundColor: "white",
    "& div": {
      backgroundColor: "white"
    }
  },
  container: {
    maxWidth: "900px",
    width: "100%",
    margin: "0 auto",
    boxShadow: "none"
  },
  toolbar: {
    height: "150px",
    display: "flex",
    justifyContent: "space-between"
  },
  boxMenu: {
    display: "flex",
    width: "auto"
  },
  menuList: {
    display: "flex",
    // marginRight: theme.spacing(2),
    "& a": {
      whiteSpace: "nowrap",
      textDecoration: "none",
      color: "black",
      fontFamily: "Fira Sans",
      textTransform: "uppercase",
      fontStyle: "Regular",
      fontSize: "14px"
    }
  },
  menuListIcon: {
    display: "flex",
    maxWidth: "172px",
    justifyContent: "space-between",
    position: "relative",
    padding: theme.spacing(1, 2, 1, 1),
    // boxSizing: "border-box",
    "&::after": {
      content: "' '",
      width: "1px",
      height: "38px",
      left: "0",
      backgroundColor: "black",
      position: "absolute"
    },
    "& > li": {
      padding: theme.spacing(1)
    }
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
      <AppBar position="static" className={classes.container}>
        <Toolbar className={classes.toolbar}>
          <Avatar
            variant="square"
            src={LogoIcon}
            className={classes.square}
          ></Avatar>
          <Box className={classes.boxMenu}>
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
