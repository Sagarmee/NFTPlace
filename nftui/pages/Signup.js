import React from "react";

import style from ".././styles/Signup.module.css";
import Ls from "../Login&Signup/Ls";
const Signup = () => {
  return (
    <div className={style.Signup}>
      <div className={style.Signup_box}>
        <h1>Signup</h1>

        <Ls />

        <p className={style.Signup_box_para}>
          New user? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
