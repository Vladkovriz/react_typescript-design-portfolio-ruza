import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { List, ListItem, Link } from "@material-ui/core";

import IconSVG from "../IconSVG";

import * as social from "../../constants/social";

import icons from "../../constants/index.js";
console.log(icons)
console.log(icons.WA)

const useStyles = makeStyles((theme) => ({
  menuListIcon: {
    display: "flex",
    maxWidth: "172px",
    justifyContent: "space-between",
    position: "relative",
    padding: theme.spacing(1, 0, 1, 1),
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

export const MenuListIcons= (props) => {
  const classes = useStyles();
  return (
    <List className={classes.menuListIcon}>
      <ListItem>
        <Link href={social.WhatsApp} variant="body2">
            {/*<IconSVG icon={WA} size={18} />*/}
            <IconSVG icon={icons.WA} size={18} />
        </Link>
      </ListItem>

      <ListItem>
        <Link href={social.Viber} variant="body2">
            {/*<IconSVG icon={Viber} size={18} />*/}
            <IconSVG icon={icons.Viber} size={18} />
        </Link>
      </ListItem>{" "}
      <ListItem>
        <Link href={social.Telegram} variant="body2">
            {/*<IconSVG icon={Telegram} size={18} />*/}
            <IconSVG icon={icons.Telegram} size={18} />
        </Link>
      </ListItem>
      <ListItem>
        <Link href={social.Instagram} variant="body2">
          <IconSVG icon={icons.Instagram} size={18} />
        </Link>
      </ListItem>{" "}
      <ListItem>
        <Link href={social.LinkedIn} variant="body2">
            {/*<IconSVG icon={In} size={18} />*/}
            <IconSVG icon={icons.In} size={18} />
        </Link>
      </ListItem>
    </List>
  );
};
