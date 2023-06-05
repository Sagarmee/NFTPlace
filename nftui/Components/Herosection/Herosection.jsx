import React from "react";
import Link from "next/link";
import Image from "next/image";

//internal import
import style from "./Herosection.module.css";
import images from "../img/index";
import { Button, Title } from "../componentindex";

const Herosection = () => {
  return (
    <div className={style.heroSection}>
      <div className={style.heroSection_box}>
        <div className={style.heroSection_box_left}>
          <Title heading="Discover, collect, and sell NFTs 🖼️" />
          <Title
            paragraph="Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them"
          />
          <div className={style.heroSection_box_left_btn}>
            <Button btnName="Start your search" />
          </div>
        </div>
        <div className={style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            className={style.heroSection_box_right_img}
          />
        </div>
      </div>
      {/* <div style={style.heroSection_filter}>
        <h1 cl>filter section</h1>
      </div> */}
    </div>
  );
};

export default Herosection;
