import React, { useState } from "react";
import Image from "next/image";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

//internal import
import style from "./AudioSmallCard.module.css";
import images from "../../img/index";
import LikeProfile from "../../LikeProfile/LikeProfile";

const AudioSmallCard = () => {
  const [play, setplay] = useState(false);
  const img = [
    images.creatorbackground1,
    images.creatorbackground2,
    images.creatorbackground3,
  ];

  const playbtn = () => {
    if (!play) {
      setplay(true);
    } else {
      setplay(false);
    }
  };

  return (
    <div className={style.audioplayer}>
      <div className={style.audioplayer_box}>
        <Image
          src={images.creatorbackground1}
          alt="music"
          width={100}
          height={100}
          className={style.audioplayer_box_img}
        />

        <div className={style.audioplayer_box_info}>
          <h4>NFT music #1142</h4>

          <div className={style.audioplayer_box_info_box}>
            <LikeProfile />

            <div className={style.audioplayer_box_info_box_price}>
              <small>price</small>
              <p>1.00 ETH</p>
            </div>
          </div>
        </div>

        <div
          className={style.audioplayer_box_playbtn}
          onClick={() => playbtn()}
        >
          {play ? (
            <div className={style.audioplayer_box_playbtn_icon}>
              <TbPlayerPause />
            </div>
          ) : (
            <div className={style.audioplayer_box_playbtn_icon}>
              <TbPlayerPlay />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioSmallCard;
