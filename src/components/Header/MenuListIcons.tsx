import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { List, ListItem, Link } from "@material-ui/core";
import IconSVG from "../IconSVG";

import WA from "../../assets/Social/Black_Icons/Black_WA.svg";
import Viber from "../../assets/Social/Black_Icons/Black_Viber.svg";
import Telegram from "../../assets/Social/Black_Icons/Black_Telegram.svg";
import Instagram from "../../assets/Social/Black_Icons/Black_Instagram.svg";
import In from "../../assets/Social/Black_Icons/Black_In.svg";

import * as social from "../../constants/social";

const useStyles = makeStyles((theme) => ({
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
  }
}));

export const MenuListIcons: React.FC = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.menuListIcon}>
      <ListItem>
        <Link href={social.WhatsApp} variant="body2">
          <IconSVG icon={WA} size={18} />
        </Link>
      </ListItem>
      <ListItem>
        <Link href={social.Viber} variant="body2">
          <IconSVG icon={Viber} size={18} />
        </Link>
      </ListItem>{" "}
      <ListItem>
        <Link href={social.Telegram} variant="body2">
          <IconSVG icon={Telegram} size={18} />
        </Link>
      </ListItem>
      <ListItem>
        <Link href={social.Instagram} variant="body2">
          <IconSVG icon={Instagram} size={18} />
        </Link>
      </ListItem>{" "}
      <ListItem>
        <Link href={social.LinkedIn} variant="body2">
          <IconSVG icon={In} size={18} />
        </Link>
      </ListItem>
    </List>
  );
};
