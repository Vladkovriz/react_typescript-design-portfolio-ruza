import React from "react";

// import { makeStyles } from "@material-ui/core/styles";

import { TopFooter } from "./TopFooter";
import { BottomFooter } from "./BottomFooter";

// const useStyles = makeStyles((theme) => ({}));

export const Footer: React.FC = (props) => {
  // const classes = useStyles();
  return (
    <footer>
      <TopFooter />
      <BottomFooter />
    </footer>
  );
};
