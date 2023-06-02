import React, { useState } from "react";
import Image from "next/image";

//intenal import
import style from "./LikeProfile.module.css";
import images from ".././img/index";

const LikeProfile = () => {
  const imgArray = [images.user1, images.user2, images.user3, images.user4];
  return (
    <div className={style.like}>
      {imgArray.map((ele, i) => (
        <div className={style.like_box} key={i + 1}>
          <Image
            src={ele}
            width={30}
            height={30}
            key={i + 1}
            className={style.like_box_img}
          />
        </div>
      ))}
    </div>
  );
};

export default LikeProfile;
