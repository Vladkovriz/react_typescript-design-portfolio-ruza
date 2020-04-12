import React from "react";
// import classes from "*.module.css"
import { makeStyles } from "@material-ui/core/styles";
// import { deepOrange, green } from "@material-ui/core/colors";
import icons from "../../constants/index.js";
const useStyles = makeStyles((theme) => ({
  icon: {}
}));
const IconSVG = (props) => {
  console.log(props.icon)
  const classes = useStyles();
  const { icon, size } = props;
  return (
    <img src={icon} alt="" style={{ height: size }} className={classes.icon} />
  );
};

export default IconSVG;
