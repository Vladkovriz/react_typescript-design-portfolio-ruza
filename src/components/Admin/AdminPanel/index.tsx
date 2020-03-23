import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  adminPanel: {
    height: "100px",
    maxWidth: "100vw",
    backgroundColor: "black",
    color: "white"
  }
}));

export const AdminPanel = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.adminPanel}>
      <span>asd</span>
    </div>
  );
};
