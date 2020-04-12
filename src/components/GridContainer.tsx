import React, { ReactNode } from "react";
import { Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "10px",
    display: "grid",
    gridTemplateColumns: "repeat( 4, 1fr )",
    gridTemplateRows: "repeat( 2, 1fr )",
    gridGap: "10px"
  }
}));

type Props = {
  children?: ReactNode;
};

export const GridContainer: React.FC<Props> = (props: any) => {
  const classes = useStyles();
  return <Box className={classes.root}>{props.children}</Box>;
};
