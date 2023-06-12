import React from "react";

//internal import
import style from "./Title.module.css";
const Title = ({ heading, paragraph }) => {
  return (
    <div className={style.title}>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default Title;
