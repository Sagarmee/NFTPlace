import React, { useState } from "react";
import Image from "next/image";

//internal import
import style from "./Ls.module.css";
import images from ".././Components/img/index";
import { Button } from "../Components/componentindex";

const Ls = () => {
  const [activebtn, setactivebtn] = useState(1);
  const socialImage = [
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
    {
      social: images.twitter,
      name: "Continue with twitter",
    },
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
  ];
  return (
    <div className={style.user}>
      <div className={style.user_box}>
        <div className={style.user_box_social}>
          {socialImage.map((ele, i) => (
            <div
              className={`${style.user_box_social_item} ${
                activebtn == i + 1 ? style.active : ""
              }`}
              key={i + 1}
              onClick={() => setactivebtn(i + 1)}
            >
              <Image
                src={ele.social}
                alt="social"
                width={30}
                height={30}
                className={style.user_box_social_item_img}
              />
              <p>
                <span>{ele.name}</span>
              </p>
            </div>
          ))}
        </div>

        <p className={style.user_box_or}>OR</p>

        <div className={style.user_box_input}>
          <div className={style.user_box_input_box}>
            <label htmlFor="email">Email address</label>
            <input type="email" placeholder="example@example.com" />
          </div>

          <div className={style.user_box_input_box}>
            <label
              htmlFor="password"
              className={style.user_box_input_box_label}
            >
              <p>password</p>
              <p>
                <a href="#">Forget password</a>
              </p>
            </label>
            <input type="password" />
          </div>
        </div>

        <Button
          btnName="Continue"
          handleClick={() => {}}
          className={style.user_button}
        />
      </div>
    </div>
  );
};

export default Ls;
