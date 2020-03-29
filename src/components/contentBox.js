import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

import IconSVG from "./IconSVG";
import Arrow from "../assets/Arrow.svg";
import AllWorkIcon from "assets/AllWorkIcon.svg";
import ContactInfo from "assets/ContactInfo.svg";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "216px",
    width: "100%",
    display: "flex",
    position: "relative",
    overflow: "hidden",
    color: "#43d69b",

    "&:hover .infoContent": {
      bottom: "0",
      opacity: "1",
      transition: ".5s"
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
      opacity: "0"
    },
    "& > .maskContent": {
      width: "100%",
      height: "100%",
      position: "absolute",
      left: "0",
      transition: ".5s"
    }
  },
  headingText: {
    fontFamily: "Fira Sans",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "29px"
  }
}));

export const ContentBox = ({
  columns,
  rows,
  rootBlock,
  infoBlock,
  variant
}) => {
  const classes = useStyle();
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
              backgroundRepeat: "no-repeat"
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
            style={{
              background: `url(${rootBlock.background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
          <div className={"infoContent"}>
            <span>{infoBlock.text}</span>
            <IconSVG icon={Arrow} size={12} />
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
              boxSizing: "border-box"
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom: "15px"
              }}
            >
              <IconSVG icon={AllWorkIcon} size={40} />
              <Typography variant="body1">Чем я занимаюсь?</Typography>
            </Box>
            <Box>
              <Typography variant="h5">ПОЛИГРАФИЯ</Typography>
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
              color: "#43d69b"
            }}
          >
            <span style={{ marginRight: "10px", whiteSpace: "nowrap" }}>
              Посмотреть все работы
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
              boxSizing: "border-box"
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
                // marginBottom: "15px"
              }}
            >
              <IconSVG icon={ContactInfo} size={40} />
              <Typography variant="body1">Мои контакты</Typography>
            </Box>
            <Box>
              <Typography variant="body1">Телефон:</Typography>
              <Box
                style={{
                  padding: "5px",
                  margin: "5px 0",
                  boxSizing: "border-box",
                  width: "100%",
                  textAlign: "center",
                  border: "1px solid #43d69b"
                }}
              >
                +7(985)844-31-19
              </Box>
            </Box>
            <Box>
              <Typography variant="body1">E-mail:</Typography>
              <Box
                style={{
                  padding: "5px",
                  margin: "5px 0",
                  boxSizing: "border-box",
                  width: "100%",
                  textAlign: "center",
                  border: "1px solid #43d69b"
                }}
              >
                ruza-design@ya.ru
              </Box>
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
              color: "#43d69b"
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
