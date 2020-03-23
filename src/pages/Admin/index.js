import React, { useEffect } from "react";

import { withAuth } from "../../hocs/privateRoute";
import { useHistory } from "react-router-dom";

import { SIGN_IN } from "../../constants/routes";

const Admin = (props) => {
  // console.log(props);
  // const history = useHistory();

  // useEffect(() => {
  //   history.goBack();
  // }, []);

  return <>{props.children}</>;
};

export default withAuth(Admin);
