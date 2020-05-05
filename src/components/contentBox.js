import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, ListItem, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import LinkOut from "@material-ui/core/Link";

import IconSVG from "./IconSVG";
import Arrow from "../assets/Arrow.svg";
import AllWorkIcon from "assets/AllWorkIcon.svg";
import ContactInfo from "assets/ContactInfo.svg";
import * as path from "../constants/routes";
import * as social from "../constants/social";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "216px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    color: "#43d69b",
    background: "black",
    fontWeight: "500",
    fontSize: "14px",
    fontFamily: "'Fira Sans', sans-serif",
    "&:hover .infoContent": {
      bottom: "0",
      opacity: "1",
      transition: ".5s",
    },
    "&:hover .maskContent[variant='1']": {
      width: "120%",
      height: "120%",
      left: "-10%",
      top: "-10%",
      bottom: "0",
      opacity: "1",
      transition: ".5s",
    },
    "&:hover .maskContent": {
      bottom: "0",
      opacity: "1",
      transition: ".5s",
    },
    "& > .infoContent": {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      padding: "20px 10px",
      boxSizing: "border-box",
      backgroundColor: "rgba(0,0,0,0.7)",
      position: "absolute",
      left: "0",
      bottom: "-67px",
      transition: ".5s",
      opacity: "0",
    },
    "& > .maskContent": {
      width: "100%",
      height: "100%",
      position: "absolute",
      left: "0",
      top: "0",
      transition: ".5s",
      opacity: ".5",
    },
  },
  headingText: {
    fontFamily: "Fira Sans",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "29px",
  },
  infoContainer: {
    padding: "5px",
    margin: "5px 0",
    height: "29px",
    boxSizing: "border-box",
    width: "100%",
    position: "relative",
    border: "1px solid #43d69b",
    overflow: "hidden",
    transition: ".3s",
    "&:hover": {
      backgroundColor: "#43d69b",
      transition: ".3s",
    },
    "& > span": {
      width: "calc(100% - 10px)",
      textAlign: "center",
      color: "#43d69b",
      // position: "absolute",
    },
    "&:hover span": {
      color: "black",
      transition: ".3s",
    },
    "& > .firstText": {
      display: "inline-block",
    },
    "&:hover .firstText": {
      display: "none",
    },
    "& > .secondText": {
      display: "none",
    },
    "&:hover .secondText": {
      display: "inline-block",
    },
  },
}));

export const ContentBox = ({
  columns,
  rows,
  rootBlock,
  infoBlock,
  variant,
  link,
}) => {
  const [category, setCategory] = React.useState([
    "Консультация",
    "Полиграфия",
    "Широкоформатная печать",
    "Фирменный стиль",
    "Брендирование",
    "Логотипы",
    "Многостраничная печать",
  ]);

  const [activeCategory, setActiveCategory] = React.useState("");
  const classes = useStyle();
  useEffect(() => {
    let i = 0;
    let j = 0;
    let str1 = "";
    const addJ = () => j++;
    const recCycleCategories = async () => {
      i++;
      if (i < category.length && i !== j) {
        await textPrintAnimation(category[i - 1], str1);
      }
      if (i === category.length) {
        i = 1;
        j = 0;
        await textPrintAnimation(category[i - 1], str1);
      }
    };
    const textPrintAnimation = async (item, str) => {
      let strIndex = 0;
      let removeStrIndex = -1;
      let addCharTimeout = await setTimeout(function addChar() {
        strIndex++;
        str += item[strIndex - 1];
        setActiveCategory(str);
        if (strIndex < item.length) {
          addCharTimeout = setTimeout(addChar, 100);
        } else {
          let removeCharTimeout = setTimeout(function addChar() {
            strIndex--;
            str = item.slice(0, removeStrIndex);
            setActiveCategory(str);
            removeStrIndex--;
            if (strIndex > 0) {
              removeCharTimeout = setTimeout(addChar, 100);
            }
            if (strIndex === 0) {
              j++;
              recCycleCategories();
            }
          }, 1000);
        }
      }, 1000);
      strIndex = 0;
    };
    recCycleCategories();
  }, []);
  return (
    <>
      {variant === 0 && (
        <div
          className={classes.root}
          style={{ gridColumn: columns, gridRow: rows }}
        >
          <div
            className={"maskContent"}
            style={{
              background: `url(${rootBlock.background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      )}
      {variant === 1 && (
        <div
          className={classes.root}
          style={{ gridColumn: columns, gridRow: rows }}
        >
          <div
            className={"maskContent"}
            variant={"1"}
            style={{
              background: `url(${rootBlock.background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className={"infoContent"}>
            <span>{infoBlock.text}</span>
            {infoBlock.link ? (
              <Link to={infoBlock.link}>
                <IconSVG icon={Arrow} size={12} />
              </Link>
            ) : (
              <IconSVG icon={Arrow} size={12} />
            )}
          </div>
        </div>
      )}
      {variant === 2 && (
        <Box
          className={classes.root}
          style={{ gridColumn: columns, gridRow: rows }}
        >
          <Box
            className={"maskContent"}
            style={{
              background: "#222222",
              padding: "50px 10px",
              boxSizing: "border-box",
              opacity: "1",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <IconSVG icon={AllWorkIcon} size={40} />
              <Typography
                style={{ fontFamily: "'Fira Sans', sans-serif" }}
                variant="body1"
              >
                Чем я занимаюсь?
              </Typography>
            </Box>
            <Box>
              <Typography
                style={{
                  fontFamily: "'Fira Sans', sans-serif",
                  fontSize: "22px",
                }}
                variant="h5"
              >
                {activeCategory}
              </Typography>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              padding: "14px 10px",
              boxSizing: "border-box",
              position: "absolute",
              alignItems: "center",
              color: "#43d69b",
            }}
            className={"infoContent"}
          >
            <span style={{ marginRight: "10px", whiteSpace: "nowrap" }}>
              Все работы
            </span>
            <IconSVG icon={Arrow} size={12} />
          </Box>
        </Box>
      )}
      {variant === 3 && (
        <Box
          className={classes.root}
          style={{ gridColumn: columns, gridRow: rows }}
        >
          <Box
            className={"maskContent"}
            style={{
              background: "#222222",
              padding: "15px",
              boxSizing: "border-box",
              opacity: "1",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // marginBottom: "15px"
              }}
            >
              <IconSVG icon={ContactInfo} size={40} />
              <Typography
                style={{
                  fontFamily: "'Fira Sans', sans-serif",
                  fontStyle: "Regular",
                }}
                variant="body1"
              >
                Мои контакты
              </Typography>
            </Box>
            <Box style={{ overflow: "hidden" }}>
              <Typography
                style={{ fontFamily: "'Fira Sans', sans-serif" }}
                variant="body1"
              >
                Телефон:
              </Typography>
              <LinkOut href={social.WhatsApp} target="_blank" variant="body2">
                <Box className={classes.infoContainer}>
                  <span className={"firstText"}> +7(985)844-31-19</span>
                  <span className={"secondText"}>Связаться</span>
                </Box>
              </LinkOut>
            </Box>

            <Box style={{ overflow: "hidden" }}>
              <Typography
                style={{ fontFamily: "'Fira Sans', sans-serif" }}
                variant="body1"
              >
                E-mail:
              </Typography>
              <Link to={path.CONTACTS}>
                {" "}
                <Box className={classes.infoContainer}>
                  <span className={"firstText"}>ruza-design@ya.ru</span>
                  <span className={"secondText"}>Написать</span>
                </Box>
              </Link>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              padding: "14px 10px",
              boxSizing: "border-box",
              position: "absolute",
              left: "0",
              bottom: "0",
              alignItems: "center",
              color: "#43d69b",
            }}
          >
            <span style={{ marginRight: "10px" }}>Подробнее</span>
            <IconSVG icon={Arrow} size={12} />
          </Box>
        </Box>
      )}
    </>
  );
};
