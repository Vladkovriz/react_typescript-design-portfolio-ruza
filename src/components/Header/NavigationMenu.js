import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem } from "@material-ui/core";

import * as path from "../../constants/routes";

const useStyles = makeStyles((theme) => ({
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
  }
}));

const menuListLink = [
  {
    link: path.HOME,
    name: "Home"
  },
  {
    link: path.ABOUT_ME,
    name: "About Me"
  },
  {
    link: path.PORTFOLIO,
    name: "Portfolio"
  },
  {
    link: path.FAQ,
    name: "FAQ"
  },
  {
    link: path.CONTACTS,
    name: "Contacts"
  }
];

export const NavigationMenu = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <List className={classes.menuList}>
      {menuListLink.map((item, id) => (
        <ListItem
          style={
            props.location.pathname === item.link
              ? { borderBottom: "1px solid #35D69B" }
              : { borderBottom: "0px" }
          }
        >
          <Link to={item.link}>{item.name}</Link>
        </ListItem>
      ))}
    </List>
  );
};
