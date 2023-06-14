import React from "react";

import style from ".././styles/Login.module.css";
import Ls from "../Login&Signup/Ls";
const Login = () => {
  return (
    <div className={style.login}>
      <div className={style.login_box}>
        <h1>Login</h1>

        <Ls />

        <p className={style.login_box_para}>
          New user? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
