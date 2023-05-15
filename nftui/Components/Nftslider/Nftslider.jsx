import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";

import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

//internal import
import style from "./Nftslider.module.css";
import images from "../img/index";
import { Button } from "../componentindex";
import { Sidebar } from "../Navbar";

const Nftslider = () => {
  const [idNumber, setIdNumber] = useState(0);

  const sliderdata = [
    {
      title: "Walking On Air",
      id: 1,
      name: "jane cooper",
      collection: "marscapes",
      price: "00000.23 ETH",
      like: 399,
      image: images.user1,
      nft_image: images.nft_image_1,
      time: {
        days: 21,
        hours: 40,
        minutes: 81,
        seconds: 15,
      },
    },
    {
      title: "Nirma NFT",
      id: 2,
      name: "karsan kaka",
      collection: "itnu",
      price: "00000.43 ETH",
      like: 999,
      image: images.user2,
      nft_image: images.nft_image_2,
      time: {
        days: 22,
        hours: 42,
        minutes: 1,
        seconds: 5,
      },
    },
    {
      title: "jethalaal NFT",
      id: 3,
      name: "bapuji",
      collection: "TMKOC",
      price: "0000.111 ETH",
      like: 1000,
      image: images.user3,
      nft_image: images.nft_image_3,
      time: {
        days: 19,
        hours: 29,
        minutes: 39,
        seconds: 49,
      },
    },
    {
      title: "solidity NFT",
      id: 4,
      name: "gavin wood",
      collection: "blockchain",
      price: "123333 ETH",
      like: 9999,
      image: images.user2,
      nft_image: images.nft_image_2,
      time: {
        days: 99,
        hours: 99,
        minutes: 59,
        seconds: 59,
      },
    },
  ];

  const inc = useCallback(() => {
    if (idNumber + 1 < sliderdata.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderdata.length]);

  //-------DEC
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className={style.nftslider}>
      <div className={style.nftslider_box}>
        <div className={style.nftslider_box_left}>
          <h2>{sliderdata[idNumber].title}</h2>
          <div className={style.nftslider_box_creator}>
            <div className={style.nftslider_box_creator_profile}>
              <Image
                src={sliderdata[idNumber].image}
                alt="user-1"
                className={style.nftslider_box_creator_profile_image}
                width={50}
                height={50}
              />
              <div className={style.nftslider_box_creator_profile_detail}>
                <p>creator</p>
                <h4>
                  {sliderdata[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>
            <div className={style.nftslider_box_creator_profile}>
              <AiFillFire
                className={style.nftslider_box_creator_collection_icons}
              />
              <div className={style.nftslider_box_creator_collection_detail}>
                <p>collection</p>
                <h4>{sliderdata[idNumber].collection} </h4>
              </div>
            </div>
          </div>

          <div className={style.nftslider_box_left_bidding}>
            {/* bidding jsx */}
            <div className={style.nftslider_box_left_bidding_box}>
              <small>current bid</small>
              <p>
                {sliderdata[idNumber].price} <span>$23333.2232</span>
              </p>
            </div>

            {/* auctions jsx */}
            <div className={style.nftslider_box_left_auction}>
              <MdTimer className={style.nftslider_box_left_timer_icons} />
              <span>Auction ending in</span>
            </div>

            {/* timer */}

            <div className={style.nftslider_box_left_timer}>
              <div className={style.nftslider_box_left_timer_item}>
                <p>{sliderdata[idNumber].time.days}</p>
                <span>days</span>
              </div>
              <div className={style.nftslider_box_left_timer_item}>
                <p>{sliderdata[idNumber].time.hours}</p>
                <span>hours</span>
              </div>
              <div className={style.nftslider_box_left_timer_item}>
                <p>{sliderdata[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>
              <div className={style.nftslider_box_left_timer_item}>
                <p>{sliderdata[idNumber].time.seconds}</p>
                <span>secs</span>
              </div>
            </div>

            {/* bidding btn */}
            <div className={style.nftslider_box_left_bidding_btn}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          {/* sliderbtn */}
          <div className={style.nftslider_box_left_sliderbtn}>
            <TbArrowBigLeftLines
              className={style.nftslider_box_left_sliderbtn_icons}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={style.nftslider_box_left_sliderbtn_icons}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={style.nftslider_box_right}>
          <div className={style.nftslider_box_right_box}>
            {/* <Image
              src={sliderdata[idNumber].nft_image}
              className={style.nftslider_box_right_box_img}
              alt="nft-image"
            /> */}

            <div className={style.nftslider_box_right_heart}>
              <AiFillHeart />
              <span>{sliderdata[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nftslider;
