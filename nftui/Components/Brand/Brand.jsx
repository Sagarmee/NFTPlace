import React from "react";
import Image from "next/image";

//internal style
import style from "./Brand.module.css";
import images from ".././img/index";
import img from ".././img/earn.jpg";
import { Button } from "../componentindex";

const Brand = () => {
  return (
    <div className={style.brand}>
      <div className={style.brand_box}>
        <div className={style.brand_box_images}>
          <Image
            className={style.brand_box_img}
            src={images.logo}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className={style.brand_box_brand}>
          <div className={style.brand_box_brand_left}>
            <h1>Earn free Crypto with ciscrypt</h1>
            <p>a creative agency that lead and inspire</p>
            <div className={style.brand_box_left_btn}>
              <Button btnName="create" handleClick={() => {}} />
              <Button btnName="Discover" handleClick={() => {}} />
            </div>
          </div>
          <div className={style.brand_box_right}>
            <Image src={img} alt="brand image" width={600} height={450} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
