import React, { useState } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

//internal library
import style from "./AudioCard.module.css";
import images from "../../img/index";
import LikeProfile from "../../LikeProfile/LikeProfile";

const AudioCard = () => {
  const [like, setlike] = useState(false);
  const [play, setplay] = useState(false);

  const likenft = () => {
    if (!like) {
      setlike(true);
    } else {
      setlike(false);
    }
  };

  const playmusic = () => {
    if (!play) {
      setplay(true);
    } else {
      setplay(false);
    }
  };

  return (
    <div className={style.audiocard}>
      <div className={style.audiocard_box}>
        {/* like and timing */}
        <div className={style.audiocard_box_like_time}>
          <div className={style.audiocard_box_like} onClick={() => likenft()}>
            {like ? (
              <AiFillHeart className={style.audiocard_box_like_icon} />
            ) : (
              <AiOutlineHeart
                className={style.audiocard_box_like_icon_unlike}
              />
            )}

            <span>24</span>
          </div>

          <div className={style.audiocard_box_time}>
            <div className={style.audiocard_box_time_remaining}>
              <small>remaining time</small>
              <h5>3h : 15m : 20s</h5>
            </div>
          </div>
        </div>

        {/* wave and musicplay */}
        <div className={style.audiocard_box_player}>
          <Image src={images.musiceWave} alt="music" width={200} />

          <div
            className={style.audiocard_box_music_player}
            onClick={() => playmusic()}
          >
            {play ? (
              <div className={style.audiocard_box_musicplayer_icon}>
                <TbPlayerPause />
              </div>
            ) : (
              <div className={style.audiocard_box_musicplayer_icon}>
                <TbPlayerPlay />
              </div>
            )}
          </div>
        </div>

        {/* nftname price and stock */}
        <div className={style.audiocard_box_details}>
          <div className={style.audiocard_box_details_info}>
            <h4>NFT music #1123</h4>

            <div className={style.audiocard_box_details_info_price}>
              <small>price</small>
              <p>$3,221.33</p>
            </div>
          </div>
          <div className={style.audiocard_box_stock}>
            <LikeProfile />
            <small>24 in stock</small>
          </div>
        </div>

        {/* nftimg */}
        <div className={style.audiocard_box_img}>
          <Image
            src={images.creatorbackground1}
            alt="background"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
