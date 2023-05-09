import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiSocialGithub,
  TiArrowDown,
} from "react-icons/ti";

//internal import file
import style from "./sidebar.module.css";
import images from "../../img/index";
import Button from "../../Button/button";

//pass the props so i can easily manage the sidebar
const Sidebar = ({ setSideMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openhelpcenter, setOpenHelpCenter] = useState(false);

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openhelpcentermenu = () => {
    if (!openhelpcenter) {
      setOpenHelpCenter(true);
    } else {
      setOpenHelpCenter(false);
    }
  };

  const closesidebar = () => {
    setSideMenu(false);
  };

  const discover = [
    {
      name: "Collection",
      url: "collection",
    },
    {
      name: "Search page",
      url: "seach-page",
    },
    {
      name: "Author profile",
      url: "author-profile",
    },
    {
      name: "Account settings",
      url: "account-setting",
    },
    {
      name: "Connect wallet",
      url: "connect wallet",
    },
    {
      name: "Upload item",
      url: "upload item",
    },
  ];

  const help = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  return (
    <div className={style.sidebar}>
      <GrClose
        className={style.sidebar_closebtn}
        onClick={() => closesidebar()}
      />
      <div className={style.sidebar_box}>
        <Image src={images.logo} alt="nft logo" width={150} height={150} />
        <p>
          Discover the most outstanding articles on all topices of NFT & write
          your own stories and share them
        </p>

        <div className={style.sidebar_social}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialGithub />
          </a>
        </div>
      </div>
      <div className={style.sidebar_menu}>
        <div>
          <div
            className={style.sideBar_menu_box}
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>

          {openDiscover && (
            <div className={style.sideBar_discover}>
              {discover.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <div
            className={style.sideBar_menu_box}
            onClick={() => openhelpcentermenu()}
          >
            <p>help center</p>
            <TiArrowSortedDown />
          </div>

          {openhelpcenter && (
            <div className={style.sideBar_discover}>
              {help.map((ele, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${ele.link}` }}>{ele.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={style.sideBar_button}>
        <Button btnName="Create" handleClick={() => {}} />
        <Button btnName="Connect Wallet" handleClick={() => {}} />
      </div>
    </div>
  );
};

export default Sidebar;
