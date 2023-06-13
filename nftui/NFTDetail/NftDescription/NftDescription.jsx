import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

//internal import
import style from "./NftDescription.module.css";
import images from "../../Components/img/index";
import { Button } from "../../Components/componentindex";
import { NftTab } from "../NftDetail";

const NftDescription = () => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provanance, setProvanance] = useState(false);
  const [owner, setOwner] = useState(false);

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];
  const provananceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];
  const ownerArray = [
    images.user1,
    images.user8,
    images.user2,
    images.user6,
    images.user5,
  ];

  const opensocial = () => {
    if (!social) {
      setSocial(true);
    } else {
      setSocial(false);
    }
  };

  const openNftMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true);
    } else {
      setNFTMenu(false);
    }
  };

  const opentabs = (e) => {
    const btntext = e.target.innerText;

    if (btntext === "Bid History") {
      setHistory(true);
      setOwner(false);
      setProvanance(false);
    } else if (btntext === "Provanance") {
      setHistory(false);
      setOwner(false);
      setProvanance(true);
    }
  };

  const openowner = () => {
    if (!owner) {
      setHistory(false);
      setProvanance(false);
      setOwner(true);
    } else {
      setOwner(false);
      setHistory(true);
    }
  };

  return (
    <div className={style.nftDescription}>
      <div className={style.nftDescription_box}>
        <div className={style.nftDescription_box_share}>
          <p>virtual box</p>
          <div className={style.nftDescription_box_share_box}>
            <MdCloudUpload
              className={style.nftDescription_box_share_box_icon}
              onClick={() => opensocial()}
            />
            {social && (
              <div className={style.nftDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebook
                </a>
                <a href="#">
                  <TiSocialInstagram /> Instagram
                </a>
                <a href="#">
                  <TiSocialLinkedin /> Linkedin
                </a>
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
              </div>
            )}

            <BsThreeDots
              className={style.nftDescription_box_share_box_icon}
              onClick={() => openNftMenu()}
            />
            {NFTMenu && (
              <div className={style.nftDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar /> Change Price
                </a>
                <a href="#">
                  <BiTransferAlt /> Transfre
                </a>
                <a href="#">
                  <MdReportProblem /> Change abouse
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep /> Delete item{" "}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* parttwo */}
        <div className={style.nftDescription_box_profile}>
          <h1>BearX #23453</h1>
          <div className={style.nftDescription_box_profile_box}>
            <div className={style.nftDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                className={style.nftDescription_box_profile_box_left_img}
              />
              <div className={style.nftDescription_box_profile_box_left_info}>
                <small>Creator</small>
                <br />
                <span>
                  Karli Costa <MdVerified />
                </span>
              </div>
            </div>

            <div className={style.nftDescription_box_profile_box_right}>
              <Image
                src={images.user2}
                alt="profile"
                width={40}
                height={40}
                className={style.nftDescription_box_profile_box_right_img}
              />

              <div className={style.nftDescription_box_profile_box_right_info}>
                <small>Creator</small>
                <span>
                  Karli Costa <MdVerified />
                </span>
              </div>
            </div>
          </div>

          <div className={style.nftDescription_box_profile_bidding}>
            <p>
              <MdTimer />
              <span>Auction ending in:</span>
            </p>

            <div className={style.nftDescription_box_profile_bidding_box_timer}>
              <div
                className={
                  style.nftDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>2</p>
                <span>Days</span>
              </div>
              <div
                className={
                  style.nftDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>22</p>
                <span>Hours</span>
              </div>
              <div
                className={
                  style.nftDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>45</p>
                <span>Mins</span>
              </div>
              <div
                className={
                  style.nftDescription_box_profile_bidding_box_timer_item
                }
              >
                <p>12</p>
                <span>Mins</span>
              </div>
            </div>

            <div className={style.nftDescription_box_profile_bidding_box_price}>
              <div
                className={
                  style.nftDescription_box_profile_bidding_box_price_bid
                }
              >
                <small>Current Bid</small>
                <p>
                  1.000 ETH <span>( ≈ $3,221.22)</span>
                </p>
              </div>

              <span>[96 in stock]</span>
            </div>

            <div
              className={style.nftDescription_box_profile_bidding_box_button}
            >
              <Button
                btnName="Place a bid"
                handleClick={() => {}}
                className={style.nftDescription_box_profile_bidding_box_button}
              />
              <Button
                btnName="Make offer"
                handleClick={() => {}}
                className={
                  style.buttonnftDescription_box_profile_bidding_box_button
                }
              />
            </div>

            <div className={style.nftDescription_box_profile_bidding_box_tabs}>
              <button onClick={(e) => opentabs(e)}>Bid History</button>
              <button onClick={(e) => opentabs(e)}>Provanance</button>
              <button onClick={() => openowner()}>Owner</button>
            </div>

            {history && (
              <div
                className={style.nftDescription_box_profile_bidding_box_card}
              >
                <NftTab dataTab={historyArray} />
              </div>
            )}

            {provanance && (
              <div
                className={style.nftDescription_box_profile_bidding_box_card}
              >
                <NftTab dataTab={provananceArray} />
              </div>
            )}

            {owner && (
              <div
                className={style.nftDescription_box_profile_bidding_box_card}
              >
                <NftTab dataTab={ownerArray} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDescription;
