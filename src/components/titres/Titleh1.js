import React from "react";
import classes from "./Titleh1.module.css";

const TitleH1 = (props) => {
const monCss = `${classes.policeTitle} border border-dark p-2 m-2 bg-primary rounded text-center text-white`;
        return <h1 className={monCss}>{props.children}</h1>;
};

export default TitleH1;

