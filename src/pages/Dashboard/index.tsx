import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer/index";

import { withAuth } from "../../hocs/privateRoute";

import { AdminPanel } from "../../components/Admin/AdminPanel";

const useStyles = makeStyles((theme) => ({
  dashboard: {
    width: "calc(100vw- 44px)",
    minHeight: "calc(100vh - 44px)",
    margin: "22px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff"
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
    <>
      {console.log(props)}

      {props.isAuth && <AdminPanel />}
      <div className={classes.dashboard}>
        <Header location={props.location} />
        <div className={classes.container}>{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

export default withAuth(Dashboard);
