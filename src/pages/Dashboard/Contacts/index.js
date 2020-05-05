import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Box, TextField, Typography, Input, Button } from "@material-ui/core";

import { ContentBox } from "components/contentBox";
import { images } from "assets/index";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridGap: "10px",
  },
  formContainer: {
    background: "#EEEEEE",
    padding: "20px",

    gridColumn: "1/3",
    gridRow: "1/3",
  },
  form: {
    minHeight: "350px",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  inputText: {
    background: "#d9d9d9",
    padding: "0 10px",
    "& input": {
      "&::placeholder": {
        color: "black",
        fontSize: "14px",
        opacity: "1",
      },
    },
    "&::before": {
      borderBottom: "0",
    },
  },
  textArea: {
    background: "#d9d9d9",
    padding: "10px",
    "& input": {
      "&::placeholder": {
        color: "black",
        fontSize: "14px",
        opacity: "1",
      },
    },
    "&::before": {
      borderBottom: "0",
    },
  },
}));

const Contacts = (props) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.formContainer}>
          <Typography
            style={{
              fontFamily: "Fira Sans",
              fontSize: "12px",
              lineHeight: "14px",
            }}
          >
            Пожалуйста, заполните форму, чтобы связаться со мной. Я отвечу так
            быстро, как только смогу.
          </Typography>
          <form className={classes.form}>
            <Input
              placeholder="Имя*"
              inputProps={{ "aria-label": "description" }}
              className={classes.inputText}
            />
            <Input
              placeholder="E-mail*"
              inputProps={{ "aria-label": "description" }}
              className={classes.inputText}
            />
            <Input
              placeholder="Ваш телефон"
              inputProps={{ "aria-label": "description" }}
              className={classes.inputText}
            />
            <Input
              placeholder="Выберите услугу"
              inputProps={{ "aria-label": "description" }}
              className={classes.inputText}
            />
            <Input
              placeholder="Ваше сообщение"
              inputProps={{ "aria-label": "description" }}
              className={classes.textArea}
              multiline
              rows="3"
            />
            <Button
              variant="contained"
              style={{ background: "black", color: "white", borderRadius: "0" }}
            >
              ОТПРАВИТЬ
            </Button>
          </form>
        </Box>
        <ContentBox
          variant={0}
          rootBlock={{ background: images.portfolio.portfolioRuza }}
        />
        <ContentBox variant={3} />
        <ContentBox
          variant={0}
          rootBlock={{
            background:
              "https://uploads.codesandbox.io/uploads/user/181a3a32-9208-4242-8f7f-410dc2dc386e/vKMM-FAQ.png",
          }}
          columns={"3/5"}
          rows={"2/3"}
        />
      </Box>
    </>
  );
};

export default Contacts;
