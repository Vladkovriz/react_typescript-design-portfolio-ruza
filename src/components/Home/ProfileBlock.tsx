import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import RuzaPhoto from "../../assets/Ruza.png";
const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "400px",
    width: "100%",
    padding: "3px",
    display: "flex",
    position: "relative",
    overflow: "hidden",
    "&:hover .infoContent": {
      left: "0",
      transition: ".5s"
    },
    "&:hover .maskContent": {
      width: "calc(100% - 300px)",
      left: "300px",
      transition: ".5s"
    },
    "& > .infoContent": {
      maxWidth: "300px",
      width: "100%",
      height: "100%",
      backgroundColor: "blue",
      position: "absolute",
      left: "-300px",
      transition: ".5s"
    },
    "& > .maskContent": {
      width: "100%",
      height: "100%",
      // height: "100%",
      backgroundColor: "green",
      position: "absolute",
      left: "0",
      transition: ".5s",
      "& > img": {
        width: "100%",
        height: "100%"
      },
      "& > h1": {
        position: "absolute",
        margin: "0 auto 0 90px",
        fontFamily: "Fira Sans",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "38px",
        zIndex: "10"
      }
    }
  }
}));

type PropsContentBox = {
  columns?: string;
};

export const ProfileBlock: React.FC<PropsContentBox> = (props) => {
  console.log(props);
  const classes = useStyle();
  return (
    <div className={classes.root} style={{ gridColumn: props.columns }}>
      <div className={"infoContent"}>asdfwws12 12ds12</div>
      <div className={"maskContent"}>
        <img src={RuzaPhoto} />
        <h1>Графический дизайнер</h1>
      </div>
    </div>
  );
};
