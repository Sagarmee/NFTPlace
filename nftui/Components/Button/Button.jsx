import React from "react";

//internal import
import style from "../Button/button.module.css";

const Button = ({ btnName, handleClick }) => {
  return (
    <div className={style.button_box}>
      <div className={style.button} onClick={() => {}}>
        {btnName}
      </div>
    </div>
  );
};

export default Button;
