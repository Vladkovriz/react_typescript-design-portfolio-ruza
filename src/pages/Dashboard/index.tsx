import React from "react";

import Header from "../../components/header";
import { makeStyles } from "@material-ui/core/styles";

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
    maxWidth: "1400px",
    width: "100%",
    minHeight: "calc(100vh - 380px)",
    padding: "0 10px",
    margin: "0 auto",
    boxSizing: "border-box"
  }
}));

const Dashboard = (props: any) => {
  const classes = useStyles();
  console.log(props);
  return (
    <div className={"dashboard"}>
      <Header />
      <div className={classes.container}>
        <div>{props.children}</div>
      </div>

      <footer>
        <div className="top-footer"></div>
        <div className="bottom-footer"></div>
      </footer>
    </div>
  );
};

export default Dashboard;
