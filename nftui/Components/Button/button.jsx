import React from "react";

//internal import
import style from "../Button/button.module.css";

const button = ({ btnName, handleClick }) => {
  return (
    <div className={style.button_box}>
      <div className={style.button} onClick={() => {}}>
        {btnName}
      </div>
    </div>
  );
};

export default button;
