import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import IconSVG from "components/IconSVG";
import Arrow from "assets/Arrow.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px, 220px))",
    // gridTemplateRows: "repeat(3,minmax(180px, 220px))",
    gridAutoFlow: "row dense",
    gridGap: "6px"
  },
  item: {
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
  }
}));

export const ContentPortfolio = (props) => {
  const [changedData, setChangedData] = useState([]);
  console.log(props.data);
  useEffect(() => {
    const IData = [[]];

    let a = 0;
    for (let i = 1; i <= props.data.length; i++) {
      if (i % 9 === 0) {
        console.log(i);
        IData.push([]);
        a++;
      }
      IData[a].push(props.data[i - 1]);
    }

    setChangedData(IData);
  }, [props.data]);
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {changedData.map((elem, index) =>
        elem.map((item, id) => (
          <>
            {console.log(changedData)}
            <Box
              className={classes.item}
              key={`${index}-${id}`}
              style={{
                gridColumn:
                  id === 0
                    ? "1/3"
                    : id === 1
                    ? "3/5"
                    : id === 4
                    ? "1/3"
                    : id === 7
                    ? "3/5"
                    : "",
                gridRow:
                  id === 0
                    ? `${1 + 4 * index}/${3 + 4 * index}`
                    : id === 1
                    ? `${1 + 4 * index}/${2 + 4 * index}`
                    : id === 4
                    ? `${3 + 4 * index}/${4 + 4 * index}`
                    : id === 7
                    ? `${3 + 4 * index}/${5 + 4 * index}`
                    : ""
              }}
            >
              <Box
                className={"maskContent"}
                style={{
                  background: `url(${item.rootBlock.background})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
              ></Box>
              <Box className={"infoContent"}>
                <span>{item.infoBlock.text}</span>
                <IconSVG icon={Arrow} size={12} />
              </Box>
            </Box>
          </>
        ))
      )}
    </Box>
  );
};
