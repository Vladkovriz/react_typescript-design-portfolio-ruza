import React, { useEffect, useState } from "react";

// import { SIGN_IN } from "../constants/routes";

// import { useHistory } from "react-router-dom";
// import { useLocation } from "react-router";

export const withAuth = (WrappedComponent) => {
  const ProtectedRoute = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    // const history = useHistory();

    useEffect(() => {
      chechAuth();
    }, []);

    const chechAuth = () => {
      // console.log("TRY", token);
      // console.log("window.localStorage", window.localStorage);
      // console.log(
      //   "window.localStorage.getItem",
      //   window.localStorage.getItem("token")
      // );
      // console.log("window.sessionStorage", window.sessionStorage);
      // console.log(
      //   "window.sessionStorage.getItem",
      //   window.sessionStorage.getItem("token")
      // );

      const token = false;
      //     JSON.parse(
      //       window.localStorage.getItem("token") ||
      //         window.sessionStorage.getItem("token")
      //     ) !== null ? window.localStorage.getItem("token") ||
      //     window.sessionStorage.getItem("token")
      // ).token : false;
      // console.log("token", token);
      // const payload = await props.authorization({ variables: { token } });
      // if (payload.data.verifyToken.payload) {
      if (token) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    };
    // console.log(isAuth);
    return <WrappedComponent isAuth={isAuth} {...props} />;
  };
  return ProtectedRoute;
};
