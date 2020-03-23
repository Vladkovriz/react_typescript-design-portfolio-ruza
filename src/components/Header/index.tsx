import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";

import LogoIcon from "../../assets/logoBlack.png";
import { Avatar, AppBar, Toolbar, Box } from "@material-ui/core";

// import SocialLink from "@material-ui/core/Link";

import { NavigationMenu } from "./NavigationMenu";
import { MenuListIcons } from "./MenuListIcons";

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
    maxWidth: "900px",
    width: "100%",
    margin: "0 auto",
    boxShadow: "none"
  },
  toolbar: {
    height: "150px",
    display: "flex",
    justifyContent: "space-between"
  },
  boxMenu: {
    display: "flex",
    width: "auto"
  },
  HeaderAvatar: {
    color: "black",
    width: "70px",
    height: "88px",
    backgroundColor: deepOrange[500]
  }
}));

interface HeaderProps {
  location: any;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const classes = useStyles();
  const { location } = props;
  console.log(location);
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.container}>
        <Toolbar className={classes.toolbar}>
          <Avatar
            variant="square"
            src={LogoIcon}
            className={classes.HeaderAvatar}
          ></Avatar>
          <Box className={classes.boxMenu}>
            <NavigationMenu location={location} />
            <MenuListIcons />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
