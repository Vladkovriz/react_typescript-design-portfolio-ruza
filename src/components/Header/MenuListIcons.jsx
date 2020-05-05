import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { List, ListItem, Link } from "@material-ui/core";

import IconSVG from "../IconSVG";

import * as social from "../../constants/social";

import icons from "../../constants/index.js";

const useStyles = makeStyles((theme) => ({
  menuListIcon: {
    display: "flex",
    maxWidth: "205px",
    justifyContent: "space-between",
    position: "relative",
    padding: theme.spacing(1, 0, 1, 1),
    "&::after": {
      content: "' '",
      width: "1px",
      height: "38px",
      left: "0",
      backgroundColor: "black",
      position: "absolute",
    },
    "& > li": {
      padding: theme.spacing(1),
      "& a": {
        backgroundRepeat: "no-repeat",
        width: "18px",
        height: "18px",
        transition: ".3s",
        objectFit: "contain",
        backgroundSize: "contain",
        "&:hover": {
          transition: ".3s",
        },
      },
      "& a.Wa": {
        backgroundImage: `url(${icons.WA})`,
        "&:hover": {
          backgroundImage: `url(${icons.activeWA})`,
        },
      },
      "& a.Be": {
        backgroundImage: `url(${icons.Be})`,
        "&:hover": {
          backgroundImage: `url(${icons.activeBe})`,
        },
      },
      "& a.Viber": {
        backgroundImage: `url(${icons.Viber})`,
        "&:hover": {
          backgroundImage: `url(${icons.activeViber})`,
        },
      },
      "& a.Telegram": {
        backgroundImage: `url(${icons.Telegram})`,
        "&:hover": {
          backgroundImage: `url(${icons.activeTelegram})`,
        },
      },
      "& a.Instagram": {
        backgroundImage: `url(${icons.Instagram})`,
        "&:hover": {
          backgroundImage: `url(${icons.activeInstagram})`,
        },
      },
      "& a.In": {
        backgroundImage: `url(${icons.In})`,
        "&:hover": {
          backgroundImage: `url(${icons.activeIn})`,
        },
      },
    },
  },
}));

export const MenuListIcons = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.menuListIcon}>
      <ListItem>
        <Link
          href={social.WhatsApp}
          target="_blank"
          variant="body2"
          className={"Wa"}
        />
      </ListItem>
      <ListItem>
        <Link
          href={social.Telegram}
          target="_blank"
          variant="body2"
          className={"Telegram"}
        />
      </ListItem>{" "}
      <ListItem>
        <Link
          href={social.Viber}
          target="_blank"
          variant="body2"
          className={"Viber"}
        />
      </ListItem>
      <ListItem>
        <Link
          href={social.Behance}
          target="_blank"
          variant="body2"
          className={"Be"}
          style={{ width: "24px", height: "24px" }}
        />
      </ListItem>{" "}
      <ListItem>
        <Link
          href={social.Instagram}
          target="_blank"
          variant="body2"
          className={"Instagram"}
        />
      </ListItem>
      <ListItem>
        <Link
          href={social.LinkedIn}
          target="_blank"
          variant="body2"
          className={"In"}
        />
      </ListItem>
    </List>
  );
};
