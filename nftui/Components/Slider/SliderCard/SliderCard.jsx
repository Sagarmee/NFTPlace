import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//interna import
import style from "./SliderCard.module.css";
import images from "../../img/index";
import LikeProfile from "../../LikeProfile/LikeProfile";

const SliderCard = ({ ele, i }) => {
  return (
    <motion.div className={style.slidercard}>
      <div className={style.slidercard_box}>
        <motion.div className={style.slidercard_box_img}>
          <Image
            src={images.creatorbackground10}
            className={style.slidercard_box_img_img}
            width={340}
            height={300}
            alt="slider-profile"
          />
        </motion.div>

        <div className={style.slidercard_box_title}>
          <p>NFT Video #1245</p>

          <div className={style.slidercard_box_title_like}>
            <small>{i + 1}</small>
          </div>
        </div>

        <div className={style.slidercard_box_price}>
          <div className={style.slidercard_box_price_box}>
            <small>current bid</small>
            <p>1.000 ETH</p>
          </div>

          <div className={style.slidercard_box_price_time}>
            <small>Reamaining time</small>
            <p>3h : 15m : 20s</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
