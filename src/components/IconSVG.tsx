import React from "react"
import classes from "*.module.css"
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, green } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    icon: {

    }
  }));
const IconSVG = (props: any) => {
    const classes = useStyles();
    const {icon, size} = props;
    console.log(props)
    return (
        <img src={icon} alt="" style={{height: size}} className={classes.icon}/>
    )
}

export default IconSVG;