import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end"
  },
  buttonConteiner: {
    display: "grid",
    gridTemplateColumns: "repeat(3, auto)",
    gridAutoFlow: "dense"
  },
  button: {
    background: "white",
    color: "black",
    borderRadius: "0",
    border: "1px solid black",
    margin: "5px 7px",
    fontSize: "14px",
    lineHeight: "17px",
    boxShadow: "none",
    padding: "9px 7px"
  }
}));

export const NavigationMenu = (props) => {
  const classes = useStyles();
  const handleChangeCategorie = (e) => {
    props.setCategorie(e);
  };
  return (
    <Box className={classes.root}>
      <Box>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => handleChangeCategorie(null)}
        >
          Все работы
        </Button>
      </Box>
      <Box>
        <Box className={classes.buttonConteiner}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => handleChangeCategorie(null)}
          >
            Полиграфия
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => handleChangeCategorie(null)}
          >
            Широкоформатная печать
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => handleChangeCategorie("style")}
          >
            Фирменный стиль
          </Button>
        </Box>
        <Box className={classes.buttonConteiner}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => handleChangeCategorie("brand")}
          >
            Брендирование
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => handleChangeCategorie("logo")}
          >
            Логотипы
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => handleChangeCategorie(null)}
          >
            Многостраничная печать
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
