import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Avatar } from "@material-ui/core";

import LogoIcon from "../assets/logoWhite.png";

const useStyles = makeStyles((theme) => ({
  root: {},

  topFooter: {
    width: "100%",
    height: "125px",
    backgroundColor: "#3eb489",
    marginTop: "40px"
  },
  bottomFooter: {
    width: "100%",
    height: "200px",
    backgroundColor: "#333333"
  },
  container: {
    width: "200px",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto"
  },
  square: {
    color: "black",
    width: "70px",
    height: "88px"
  }
}));

export const Footer: React.FC = (props) => {
  const classes = useStyles();
  return (
    <footer>
      <div className={classes.topFooter}></div>
      <div className={classes.bottomFooter}>
        <div className={classes.container}>
          <Avatar
            variant="square"
            src={LogoIcon}
            className={classes.square}
          ></Avatar>
        </div>
      </div>
    </footer>
  );
};
