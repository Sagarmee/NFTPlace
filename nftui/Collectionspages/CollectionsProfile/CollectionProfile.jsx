import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

//internal import
import style from "./CollectionProfile.module.css";
import images from "../../Components/img/index";

const CollectionProfile = () => {
  const cardarray = [
    {
      title: "Floor price",
      price: "$295,481.62",
      increment: "+2.11%",
    },
    {
      title: "Volume",
      price: "$295,481.62",
      increment: "total",
    },
    {
      title: "Latest Price",
      price: "$295,481.62",
      increment: "--",
    },
    {
      title: "Items",
      price: "2235",
      increment: "total",
    },
  ];
  return (
    <div className={style.collectionprofile}>
      <div className={style.collectionprofile_box}>
        <div className={style.collectionprofile_box_left}>
          <Image
            src={images.nft_image_1}
            className={style.collectionprofile_box_left_img_img}
          />
          <div className={style.collectionprofile_box_left_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
          </div>
        </div>
        <div className={style.collectionprofile_box_right}>
          <h1>Awesome NFTs collection</h1>
          <p>
            Karafuru is home to 5,555 generative arts where colors reign
            supreme. Leave the drab reality and enter the world of Karafuru by
            Museum of Toys.
          </p>

          <div className={style.collectionprofile_box_right_box}>
            {cardarray.map((ele, i) => (
              <div
                className={style.collectionprofile_box_right_box_item}
                key={i + 1}
              >
                <small>{ele.title}</small>
                <p>{ele.price}</p>
                <span>{ele.increment}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionProfile;
