import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/header";
import { Footer } from "../../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "150px",
    flexGrow: 1,
    backgroundColor: "white",
    "& div": {
      backgroundColor: "white"
    }
  },
  container: {
    maxWidth: "900px",
    width: "100%",
    minHeight: "calc(100vh - 380px)",
    padding: "0 10px",
    margin: "0 auto",
    boxSizing: "border-box"
  }
}));

const Dashboard = (props: any) => {
  const classes = useStyles();
  return (
    <div className={"dashboard"}>
      <Header />
      <div className={classes.container}>
        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
