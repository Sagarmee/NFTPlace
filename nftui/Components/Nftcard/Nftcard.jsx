import React, { useState } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";

//intenal import
import style from "./Nftcard.module.css";
import images from ".././img/index";

const Nftcard = () => {
  const NftArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_3,
    images.nft_image_2,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_1,
    images.nft_image_3,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  const [Like, setLike] = useState(true);

  const openLike = () => {
    if (!Like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };
  return (
    <div className={style.nftcard}>
      {NftArray.map((ele, i) => (
        <div className={style.nftcard_box} key={i + 1}>
          <div className={style.nftcard_box_img}>
            <Image
              src={ele}
              alt="nft_image"
              width={600}
              height={600}
              className={style.nftcard_box_img_img}
            />
          </div>

          <div className={style.nftcard_box_update}>
            <div className={style.nftcard_box_update_left}>
              <div
                className={style.nftcard_box_update_left_like}
                onClick={() => openLike()}
              >
                {Like ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart
                    className={style.nftcard_box_update_left_like_icon}
                  />
                )}
                {""} 22
              </div>
            </div>

            <div className={style.nftcard_box_update_right}>
              <div className={style.nftcard_box_update_right_info}>
                <small>Remaining time</small>
                <p>3h : 15m : 20s</p>
              </div>
            </div>
          </div>

          <div className={style.nftcard_box_update_details}>
            <div className={style.nftcard_box_update_details_price}>
              <div className={style.nftcard_box_update_details_price_box}>
                <h4>clone #2411</h4>

                <div className={style.nftcard_box_update_details_price_box_box}>
                  <div
                    className={
                      style.nftcard_box_update_details_price_box_box_bid
                    }
                  >
                    <small>current Bid</small>
                    <p>1.000ETH</p>
                  </div>
                  <div
                    className={style.nftcard_box_update_details_price_box_stock}
                  >
                    <small>11 in stock</small>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.nftcard_box_update_details_category}>
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Nftcard;
