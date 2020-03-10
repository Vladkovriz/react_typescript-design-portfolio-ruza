import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import IconSVG from "./IconSVG";
import Arrow from "../assets/Arrow.svg";
const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "280px",
    width: "100%",
    display: "flex",
    position: "relative",
    overflow: "hidden",
    "&:hover .infoContent": {
      bottom: "0",
      opacity: "1",
      transition: ".5s"
    },
    // "&:hover .maskContent": {
    //   left: "300px",
    //   transition: ".5s"
    // },
    "& > .infoContent": {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      padding: "20px",
      boxSizing: "border-box",
      backgroundColor: "rgba(0,0,0,0.7)",
      position: "absolute",
      left: "0",
      bottom: "-67px",
      transition: ".5s",
      opacity: "0"
    },
    "& > .maskContent": {
      width: "100%",
      height: "100%",
      backgroundColor: "green",
      position: "absolute",
      left: "0",
      transition: ".5s"
    }
  }
}));

// type PropsContentBox = {
//   columns?: string;
//   rows?: string;
//   rootBlock?: {
//     background?: string | void;
//   };
//   infoBlock?: {
//     text?: string | void;
//   };
// };

export const ContentBox = ({ columns, rows, rootBlock, infoBlock }) => {
  console.log(infoBlock);
  const classes = useStyle();
  return (
    <div
      className={classes.root}
      style={{ gridColumn: columns, gridRow: rows }}
    >
      <div
        className={"maskContent"}
        style={{
          backgroundImage: `url(${rootBlock.background})`
        }}
      >
        Графический дизайнер
      </div>
      <div className={"infoContent"}>
        <span>{infoBlock.text}</span>
        <IconSVG icon={Arrow} size={12} />
      </div>
    </div>
  );
};
