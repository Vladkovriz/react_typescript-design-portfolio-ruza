import React, { ReactNode } from "react";
import { Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "3px",
    display: "grid",
    gridTemplateColumns: "repeat( 4, 1fr )",
    gridTemplateRow: "repeat( 2, 1fr )",
    gridGap: "6px"
  }
}));

type Props = {
  children?: ReactNode;
};

export const GridContainer: React.FC<Props> = (props: any) => {
  console.log(props);
  const classes = useStyles();
  return <Box className={classes.root}>{props.children}</Box>;
};
