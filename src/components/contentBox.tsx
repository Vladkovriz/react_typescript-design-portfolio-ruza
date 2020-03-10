import React from "react"

import {makeStyles} from "@material-ui/core/styles"

const useStyle = makeStyles(theme =>({
    root: {
        minHeight: "280px",
        width: "100%",
        display: "flex",
        position: "relative",
        border: "1px solid aqua",
        overflow: "hidden",
        "& :hover": {
            
        },
        "& > .infoContent": {
            maxWidth: "300px",
            width: "100%",
            height: "280px",
            backgroundColor: "blue",
            position: "absolute",
            left: "-300px",
        },
        "& > .maskContent": {
            width: "100%",
            height: "280px",
            // height: "100%",
            backgroundColor: "green",
            position: "absolute",
            left: "0"
        }
    },
}))

export const ContentBox: React.FC = (props) => {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <div className={"infoContent"}>asdfwws12 12ds12</div>
            <div className={"maskContent"}>Графический дизайнер</div>
        </div>
    )
}
