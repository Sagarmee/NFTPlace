import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
//internal import
import style from "./Authorprofile.module.css";
import images from "../../Components/img/index";
import Button from "../../Components/Button/Button";

const Authorprofile = () => {
  const [share, setshare] = useState(false);
  const [report, setreport] = useState(false);

  const copyaddress = () => {
    const copytext = document.getElementById("myInput");

    copytext.select();
    navigator.clipboard.writeText(copytext.value);
  };

  const openshare = () => {
    if (!share) {
      setshare(true);
      setreport(false);
    } else {
      setshare(false);
    }
  };

  const openreport = () => {
    if (!report) {
      setreport(true);
      setshare(false);
    } else {
      setreport(false);
    }
  };
  return (
    <div className={style.authorprofile}>
      <div className={style.authorprofile_box}>
        <div className={style.authorprofile_box_img}>
          <Image
            src={images.nft_image_4}
            alt="authorprofile"
            className={style.authorprofile_box_img_img}
          />
        </div>
        <div className={style.authorprofile_box_info}>
          <h2>
            Dony Herrera
            {""}
            <span>
              <MdVerified />
              {""}
            </span>
          </h2>

          <div className={style.authorprofile_box_info_address}>
            <input
              type="text"
              value="4.0xc4c16ac453sa645a...b21a"
              id="myInput"
            />
            <FiCopy
              onClick={() => copyaddress()}
              className={style.authorprofile_box_info_address_icon}
            />
          </div>

          <p>
            Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs.
            Contributing to @ether_cards, an NFT Monetization Platform.
          </p>

          <div className={style.authorprofile_box_info_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>
        <div className={style.authorprofile_box_share}>
          <Button btnName="Follow" handleClick={() => {}} />

          <MdCloudUpload
            onClick={() => openshare()}
            className={style.authorprofile_box_share_icon}
          />

          {share && (
            <div className={style.authorprofile_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook className={style.authorprofile_box_icon} />
                </span>
                {""} Facebook
              </p>
              <p>
                <span>
                  <TiSocialInstagram className={style.authorprofile_box_icon} />
                </span>
                {""} Instagram
              </p>
              <p>
                <span>
                  <TiSocialLinkedin className={style.authorprofile_box_icon} />
                </span>
                {""} Linkedin
              </p>
              <p>
                <span>
                  <TiSocialTwitter className={style.authorprofile_box_icon} />
                </span>
                {""} Twitter
              </p>
            </div>
          )}

          <BsThreeDots
            onClick={() => openreport()}
            className={style.authorprofile_box_share_icon}
          />

          {report && (
            <div className={style.authorprofile_box_share_report}>
              <p>
                <span>
                  <MdOutlineReportProblem
                    className={style.authorprofile_box_icon}
                  />
                </span>
                {""}Report abouse
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Authorprofile;
