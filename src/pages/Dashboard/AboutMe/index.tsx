import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";

import IconSVG from "../../../components/IconSVG";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridGap: "10px"
  },
  headText: {
    fontFamily: "Fira Sans",
    fontSize: "18px",
    lineHeight: "22px"
  },
  text: {
    fontFamily: "Fira Sans",
    fontSize: "12px"
  },
  headSkilText: {
    fontFamily: "Fira Sans",
    fontSize: "18px"
  }
}));
const AboutMe = (props: any) => {
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
      <Box
        style={{
          gridColumn: "2/4",
          gridRow: "1/3",
          backgroundColor: "#EEEEEE"
        }}
      >
        <Box>
        <h6 className={classes.headText}>
          <span style={{ color: "#35D69B" }}>Привет</span>, меня зовут Рузанна
          Полонская
        </h6>
        <p className={classes.text}>
          Я, графический дизайнер, специализирующийся на широком спекторе услуг.
          Опыт работы на типографии позволяет учитывать все технические нюансы в
          реализации макетов, ведь даже направление волокон бумаги влияет на
          цвет. Есть подписка на shutterstock.com, что позволяет использовать
          лицензированные изображения.
        </p>
        <p className={classes.text}>
          На моем сайте представлены работы, над которыми мне довелось трудиться
          последние годы. В их число входят совместные, заказные и личные
          проекты. Я очень рада возможности ознакомить Вас с ними и если хотите
          обсудить будущее сотрудничество, обращайтесь.
        </p>
        <p className={classes.text}>
          Будет прекрасно применить свой опыт и знания для реализации Ваших
          идей.
        </p>
        <p className={classes.headSkilText}>Мои навыки:</p>
        <p className={classes.text}>
          Adobe Illustrator, Photoshop, InDesign, CorelDraw
        </p>
        <Box>
          <Button>Скачать резюме / CV</Button>
          <Button>Написать мне</Button>
        </Box>
        </Box>
      </Box>
      <Box
        style={{
          gridColumn: "4/5",
          gridRow: "1/2",
          backgroundColor: "#222222"
        }}
      >
        <p>
          <IconSVG></IconSVG>Чем я занимаюсь?
        </p>
        <p>ПОЛИГРАФИЯI2</p>
      </Box>
      <Box
        style={{
          gridColumn: "4/5",
          gridRow: "2/3",
          backgroundColor: "#222222"
        }}
      >
        <p></p>
      </Box>
    </Box>
  );
};

export default AboutMe;
