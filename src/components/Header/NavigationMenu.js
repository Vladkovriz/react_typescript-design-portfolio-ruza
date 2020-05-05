import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem } from "@material-ui/core";

import * as path from "../../constants/routes";

const useStyles = makeStyles((theme) => ({
  menuList: {
    display: "flex",
    // marginRight: theme.spacing(2),
    "& li": {
      "& a": {
        whiteSpace: "nowrap",
        textDecoration: "none",
        color: "black",
        fontFamily: "Fira Sans",
        textTransform: "uppercase",
        fontStyle: "Regular",
        fontSize: "14px",
      },
    },
    "& li.defaultLink": {
      "&:before": {
        content: "' '",
        width: "100%",
        height: "1px",
        background: "#35D69B",
        position: "absolute",
        bottom: "-10px",
        left: "0",
        opacity: "0",
        transition: ".2s",
      },
      "&:hover": {
        "&:before": {
          bottom: "0",
          left: "0",
          opacity: "1",
          transition: ".2s",
        },
      },
    },
    "& li.activeLink": {
      borderBottom: "1px solid #35D69B",
    },
  },
}));

const menuListLink = [
  {
    link: path.HOME,
    name: "Главная",
  },
  {
    link: path.ABOUT_ME,
    name: "Обо мне",
  },
  {
    link: path.PORTFOLIO,
    name: "Портфолио",
  },
  {
    link: path.FAQ,
    name: "FAQ",
  },
  {
    link: path.CONTACTS,
    name: "Контакты",
  },
];

export const NavigationMenu = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.menuList}>
      {menuListLink.map((item, id) => (
        <ListItem
          key={id}
          className={
            props.location.pathname === item.link ? "activeLink" : "defaultLink"
          }
        >
          <Link to={item.link}>{item.name}</Link>
        </ListItem>
      ))}
    </List>
  );
};
