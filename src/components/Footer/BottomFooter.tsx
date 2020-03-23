import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Avatar, List, ListItem, Link, Typography } from "@material-ui/core";
import LogoIcon from "../../assets/logoWhite.png";

import WhatsApp from "../../assets/Social/White_Icons/White_WA.svg";
import Viber from "../../assets/Social/White_Icons/White_Viber.svg";
import Telegram from "../../assets/Social/White_Icons/White_Telegram.svg";
import Instagram from "../../assets/Social/White_Icons/White_Instagram.svg";
import LinkedIn from "../../assets/Social/White_Icons/White_In.svg";

import IconSVG from "../IconSVG";

import * as social from "../../constants/social";

const useStyles = makeStyles((theme) => ({
  bottomFooter: {
    width: "100%",
    height: "200px",
    backgroundColor: "#333333"
  },
  container: {
    width: "200px",
    minHeight: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "0 auto"
  },
  logo: {
    color: "black",
    width: "auto",
    height: "75px"
  },
  socialLink: {
    display: "flex",
    justifyContent: "center",
    "& > li": {
      padding: "4px"
    }
  },
  text: {
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    textAlign: "center",
    color: "white"
  }
}));

export const BottomFooter: React.FC = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.bottomFooter}>
      <div className={classes.container}>
        <Avatar
          variant="square"
          src={LogoIcon}
          className={classes.logo}
        ></Avatar>
        <List className={classes.socialLink}>
          <ListItem>
            <Link href={social.WhatsApp} variant="body2">
              <IconSVG icon={WhatsApp} size={23}></IconSVG>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={social.Viber} variant="body2">
              <IconSVG icon={Viber} size={23}></IconSVG>
            </Link>
          </ListItem>{" "}
          <ListItem>
            <Link href={social.Telegram} variant="body2">
              <IconSVG icon={Telegram} size={23}></IconSVG>
            </Link>
          </ListItem>
          <ListItem>
            <Link href={social.Instagram} variant="body2">
              <IconSVG icon={Instagram} size={23}></IconSVG>
            </Link>
          </ListItem>{" "}
          <ListItem>
            <Link href={social.LinkedIn} variant="body2">
              <IconSVG icon={LinkedIn} size={23}></IconSVG>
            </Link>
          </ListItem>
        </List>
        <Typography align="center" className={classes.text}>
          Made with love by Curt1s & Vlad <br /> © 2020
        </Typography>
      </div>
    </div>
  );
};
