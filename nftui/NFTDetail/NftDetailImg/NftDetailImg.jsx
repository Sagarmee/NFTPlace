import React, { useState } from "react";
import Image from "next/image";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import style from "./NftDetailImg.module.css";
import images from "../../Components/img/index";

const NftDetailImg = () => {
  const [description, setdescription] = useState(true);
  const [details, setdetails] = useState(true);
  const [like, setlike] = useState(false);

  const likenft = () => {
    if (!like) {
      setlike(true);
    } else {
      setlike(false);
    }
  };

  const opnedescription = () => {
    if (!description) {
      setdescription(true);
    } else {
      setdescription(false);
    }
  };

  const opendetail = () => {
    if (!details) {
      setdetails(true);
    } else {
      setdetails(false);
    }
  };
  return (
    <div className={style.nftDetailImg}>
      <div className={style.NftDetailImg_box}>
        <div className={style.nftDetailImg_box_nft}>
          <div className={style.nftDetailImg_box_nft_like}>
            <BsImages className={style.nftDetailImg_box_nft_like_icon} />
            <div className={style.nftDetailImg_box_nft_like_heart}>
              <p onClick={() => likenft()}>
                {like ? (
                  <AiOutlineHeart
                    className={style.nftDetailImg_box_nft_like_icon}
                  />
                ) : (
                  <AiFillHeart
                    className={style.nftDetailImg_box_nft_like_icon}
                  />
                )}
                <span>23</span>
              </p>
            </div>
          </div>

          <div className={style.nftDetailImg_box_nft_img}>
            <Image
              src={images.nft_image_1}
              className={style.nftDetailImg_box_nft_img_img}
            />
          </div>
        </div>

        <div
          className={style.NftDetailImg_box_description}
          onClick={() => opnedescription()}
        >
          <p>Description</p>

          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {description && (
          <div className={style.NftDetailImg_box_description_box}>
            <p>
              Tattooed Kitty Gang (“TKG”) is a collection of 666 badass kitty
              gangsters, with symbol of tattoos, living in the Proud Kitty Gang
              (“PKG”) metaverse. Each TKG is an 1/1 ID as gangster member & all
              the joint rights.
            </p>
          </div>
        )}

        <div
          className={style.NftDetailImg_box_detail}
          onClick={() => opendetail()}
        >
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {details && (
          <div className={style.NftDetailImg_box_detail_box}>
            <small>2000 x 2000 px.IMAGE(685KB)</small>
            <p>
              <small>Contract Address</small>
              <br></br>
              0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a
            </p>
            <p>
              <small>Token ID</small>
              100300372864
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NftDetailImg;
