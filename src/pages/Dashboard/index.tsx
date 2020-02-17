import React from "react";

import Header from "../../components/header";

const Dashboard = (props: any) => {
  console.log(props);
  return (
    <div className={"dashboard"}>
      <Header></Header>
      <div className="container">{props.children}</div>
      <footer>
        <div className="top-footer"></div>
        <div className="bottom-footer"></div>
      </footer>
    </div>
  );
};

export default Dashboard;
