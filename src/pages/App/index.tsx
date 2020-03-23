import React, { Suspense } from "react";
// import { withRouter, Switch, Route } from "react-router";
import {
  Route,
  // Link,
  Switch,
  Redirect
} from "react-router-dom";
import * as path from "../../constants/routes";
// import SignUp from "pages/SignUp";
import SignIn from "../SignIn/index";
import Dashboard from "../Dashboard/index";
import Home from "../Dashboard/Home/index";
import AboutMe from "../Dashboard/AboutMe/index";
import Portfolio from "../Dashboard/Portfolio/index";
import FAQ from "../Dashboard/FAQ/index";
import Contacts from "../Dashboard/Contacts/index";
// import Admin from "../Admin";
// import AdminHome from "../Admin/Home";
// import AdminPortfolio from "../Admin/Portfolio/index";

// import CheckSignIn from "../CheckSignIn";

const withRouter: React.FC = (props: any) => {
  return (
    <Switch>
      <Route exact path={path.SIGN_IN} component={SignIn} />

      <Dashboard {...props}>
        <Suspense fallback={"Loader"}>
          <Redirect exact from="/" to={path.HOME} />

          <Switch>
            <Route exact path={path.HOME} component={Home} />
            <Route exact path={path.ABOUT_ME} component={AboutMe} />
            <Route exact path={path.PORTFOLIO} component={Portfolio} />
            <Route exact path={path.FAQ} component={FAQ} />
            <Route exact path={path.CONTACTS} component={Contacts} />
          </Switch>
        </Suspense>
      </Dashboard>
      <Route exact component={Home} />
    </Switch>
  );
};

export default withRouter;
