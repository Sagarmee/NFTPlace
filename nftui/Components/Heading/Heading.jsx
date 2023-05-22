import React from "react";

//internal import
import style from "./Heading.module.css";

const Heading = ({ heading, paragraph }) => {
  return (
    <div className={style.section_heading}>
      <div className={style.section_heading_box}>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Heading;
