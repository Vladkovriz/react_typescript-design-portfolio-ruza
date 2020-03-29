import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import RuzaPhoto from "assets/Ruza.png";
const useStyle = makeStyles((theme) => ({
  root: {
    width: "calc(100% - 6px)",
    margin: "3px",
    display: "flex",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down(900)]: {
      minHeight: "280px"
    },
    // "&:hover .infoContent": {
    //   left: "0",
    //   transition: ".5s"
    // },
    // "&:hover .maskContent": {
    //   left: "50px",
    //   transition: ".5s"
    // },
    "& > .infoContent": {
      maxWidth: "300px",
      width: "100%",
      height: "100%",
      position: "absolute",
      left: "-300px",
      transition: ".5s",
      zIndex: "10"
    },
    "& > .maskContent": {
      width: "100%",
      position: "relative",
      left: "0",
      transition: ".5s",
      "& > img": {
        objectFit: "cover",
        height: "100%"
      },
      "& > h1": {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%);",
        margin: "0 auto 0 90px",
        fontFamily: "Fira Sans",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "38px",
        zIndex: "10",
        color: "white"
      }
    }
  }
}));

export const ProfileBlock = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.root} style={{ gridColumn: props.columns }}>
      {/* <div className={"infoContent"}>asdfwws12 12ds12</div> */}
      <div className={"maskContent"}>
        <img src={RuzaPhoto} />
        <h1>Графический дизайнер</h1>
      </div>
    </div>
  );
};
