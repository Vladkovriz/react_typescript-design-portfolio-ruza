import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "125px",
        backgroundColor: "#3eb489",
    }
}))

export const TopFooter: React.FC = () => {
    const classes = useStyles();
  return <div className={classes.root}></div>;
};
