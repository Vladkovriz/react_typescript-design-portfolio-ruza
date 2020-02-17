import React, { Suspense } from "react";
// import { withRouter, Switch, Route } from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as path from "../../constants/routes";
// import SignUp from "pages/SignUp";
import SignIn from "../SignIn/index";
import Dashboard from "../Dashboard/index";
import Home from "../Dashboard/Home/index"
import AboutMe from "../Dashboard/AboutMe/index"
import Portfolio from "../Dashboard/Portfolio/index"
import FAQ from "../Dashboard/FAQ/index"
import Contacts from "../Dashboard/Contacts/index"
import Admin from "../Admin";
import AdminPortfolio from "../Admin/Portfolio/index"


 const AppRouter = (props: any) => (
  <Router>
    {/* <div> */}
    {/* <Route path={path.ADMIN} exact component={SignIn} />
    <Route path={"/"} render={() => "/"} exact /> */}
      <Dashboard>
        <Route exact path={path.HOME} component={Home} />
        <Route exact path={path.ABOUT_ME} component={AboutMe} />
        <Route exact path={path.PORTFOLIO} component={Portfolio} />
        <Route exact path={path.FAQ} component={FAQ} />
        <Route exact path={path.CONTACTS} component={Contacts} />
      </Dashboard>
      {/* <Admin>
      <Router>
      <Route exact path={path.ADMIN_PORTFOLIO} component={AdminPortfolio} />
 
      </Router>
      </Admin> */}
      {/* </div> */}
    {/* <Route exact render={() => "404"} /> */}
  </Router>
);

export default AppRouter