import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

import style from "./footer.module.css";
import images from "../img/index";
import { Discover, Help } from "../Navbar";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.footer_nft_detail}>
          <div className={style.footer_nft_detail_logo}>
            <Image src={images.logo} width={100} height={100} />
          </div>
          <div className={style.footer_nft_detail_details}>
            <p>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
          </div>
          <div className={style.footer_nft_detail_social_icons}>
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
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
          </div>
        </div>
        <div className={style.footer_same}>
          <h5>discover</h5>
          <Discover />
        </div>
        <div className={style.footer_same}>
          <h5>Help Center</h5>
          <Help />
        </div>
        <div className={style.footer_subscribe}>
          <h5>subscribe</h5>
          <div className={style.footer_send_mail}>
            <input type="text" placeholder="enter your email" id="" />
            <RiSendPlaneFill />
          </div>
          <div className={style.footer_info}>
            <p>
              Discover, collect, and sell extraordinary NFTs OpenSea is the
              world first and largest NFT marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
