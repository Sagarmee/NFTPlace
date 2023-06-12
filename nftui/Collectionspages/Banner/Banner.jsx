import React from "react";
import Image from "next/image";

//internal import
import style from "./Banner.module.css";

const Banner = ({ bannerImage }) => {
  return (
    <div className={style.banner}>
      <div className={style.banner_img}>
        <Image
          src={bannerImage}
          alt="bannerimg"
          className={style.banner_img_img}
        />
      </div>

      <div className={style.banner_img_mobile}>
        <Image src={bannerImage} alt="bannerimg" />
      </div>
    </div>
  );
};

export default Banner;
