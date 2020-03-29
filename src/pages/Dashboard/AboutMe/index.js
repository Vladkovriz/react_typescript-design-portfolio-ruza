import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Icon } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
// import { Button } from "components/Button";

import IconSVG from "../../../components/IconSVG";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { ContentBox } from "components/contentBox";

import DownloadIcon from "assets/Download-B.svg";
import PenIcon from "assets/Pen-B.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridGap: "10px"
  },
  content: {
    padding: "20px 30px ",
    gridColumn: "2/4",
    gridRow: "1/3",
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#EEEEEE"
  },
  headText: {
    fontFamily: "Fira Sans",
    fontSize: "18px",
    lineHeight: "22px",
    margin: "0"
  },
  text: {
    fontFamily: "Fira Sans",
    fontSize: "12px"
  },
  greenText: {
    color: "#35D69B"
  },
  headSkilText: {
    fontFamily: "Fira Sans",
    fontSize: "18px"
  },
  button: {
    width: "calc(50% - 10px)",
    fontSize: "12px",
    lineHeight: "14px",
    background: "#35D69B",
    color: "black",
    boxShadow: "none",
    padding: "6px",
    borderRadius: "0",
    whiteSpace: "nowrap",
    textTransform: "none"
  }
}));
const AboutMe = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box
        style={{
          gridColumn: "1/2",
          gridRow: "1/3",
          minHeight: "445px",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://uploads.codesandbox.io/uploads/user/181a3a32-9208-4242-8f7f-410dc2dc386e/d3oX-%D0%91%D0%BB%D0%BE%D0%BA%20_%D0%9E%D0%B1%D0%BE%20%D0%BC%D0%BD%D0%B5_.png)"
        }}
      ></Box>
      <Box style={{}} className={classes.content}>
        <Box>
          <h6 className={classes.headText}>
            <br />
            <span className={classes.greenText}>Привет</span>, меня зовут
            Рузанна Полонская
            <br />
          </h6>
          <p className={classes.text}>
            <span className={classes.greenText}>Я</span>, графический дизайнер,
            специализирующийся на широком спекторе услуг. Опыт работы на
            типографии позволяет учитывать все технические нюансы в реализации
            макетов, ведь даже направление волокон бумаги влияет на цвет. Есть
            подписка на shutterstock.com, что позволяет использовать
            лицензированные изображения.
            <br />
          </p>
          <p className={classes.text}>
            <span className={classes.greenText}>Н</span>а моем сайте
            представлены работы, над которыми мне довелось трудиться последние
            годы. В их число входят совместные, заказные и личные проекты. Я
            очень рада возможности ознакомить Вас с ними и если хотите обсудить
            будущее сотрудничество, обращайтесь.
            <br />
          </p>
          <p className={classes.text}>
            <span className={classes.greenText}>Б</span>удет прекрасно применить
            свой опыт и знания для реализации Ваших идей.
            <br />
          </p>
          <p className={classes.headSkilText}>
            {" "}
            <span className={classes.greenText}>М</span>ои навыки:
            <br />
          </p>
          <p className={classes.text}>
            Adobe Illustrator, Photoshop, InDesign, CorelDraw
            <br />
          </p>
          <Box>
            <Button
              variant="default"
              color="primary"
              style={{ marginRight: "10px" }}
              className={classes.button}
              endIcon={<IconSVG icon={DownloadIcon} size={20} />}
            >
              Скачать резюме / CV
            </Button>
            <Button
              variant="default"
              color="primary"
              style={{ marginLeft: "10px" }}
              className={classes.button}
              endIcon={<IconSVG icon={PenIcon} size={20} />}
            >
              Написать мне
            </Button>
          </Box>
        </Box>
      </Box>
      <ContentBox variant={2} columns={"4/5"} rows={"1/2"} />
      <ContentBox variant={3} columns={"4/5"} rows={"2/3"} />
    </Box>
  );
};

export default AboutMe;
