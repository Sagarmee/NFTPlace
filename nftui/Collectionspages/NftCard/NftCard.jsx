import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";

//internal import
import style from "./NftCard.module.css";
import images from "../../Components/img/index";
import { LikeProfile } from "../../Components/componentindex";

const NftCard = ({ Nftdata }) => {
  const [like, setlike] = useState(false);
  const [likeinc, setlikeinc] = useState(21);

  const likenft = () => {
    if (!like) {
      setlike(true);
      setlikeinc(23);
    } else {
      setlike(false);
      setlikeinc(23 + 1);
    }
  };

  return (
    <div className={style.nftcard}>
      {Nftdata.map((ele, i) => (
        <div className={style.nftcard_box} key={i + 1}>
          <div className={style.nftcard_box_like}>
            <div className={style.nftcard_box_like_box}>
              <div className={style.nftcard_box_like_box_box}>
                <BsImage className={style.nftcard_box_like_box_box_icon} />
                <p onClick={() => likenft()}>
                  {like ? <AiOutlineHeart /> : <AiFillHeart />}
                  {""}
                  <span>{likeinc + 1}</span>
                </p>
              </div>
            </div>
          </div>

          <div className={style.nftcard_box_img}>
            <Image
              src={ele}
              alt="nftcard"
              className={style.nftcard_box_img_img}
            />
          </div>

          <div className={style.nftcard_box_info}>
            <div className={style.nftcard_box_info_left}>
              <LikeProfile />
              <p>clone #{i + 1}</p>
            </div>
            <small>4{i + 2}</small>
          </div>

          <div className={style.nftcard_box_price}>
            <div className={style.nftcard_box_price_box}>
              <small>current bid</small>
              <p>1{i + 5}.000 ETH</p>
            </div>
            <p className={style.nftcard_box_price_stock}>
              <MdTimer />
              <span>{i + 1} hours left</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NftCard;
