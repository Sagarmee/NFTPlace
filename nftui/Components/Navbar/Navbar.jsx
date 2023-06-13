import React from "react";

//React hooks
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

//icons
import { BsSearch } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

//internal import
import style from "./navbar.module.css";
import { Discover, Sidebar, Notification, Profile, Help } from "./index";
import Button from "../Button/Button";
import images from "../img/index";

const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [notification, setNotification] = useState(false);
  const [help, setHelp] = useState(false);
  const [profile, setProfile] = useState(false);
  const [sidemenu, setSideMenu] = useState(false);

  //manage discover state
  const openMenu = (e) => {
    const btntext = e.target.innerText;

    if (btntext === "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btntext === "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setDiscover(false);
      setNotification(false);
      setHelp(false);
    } else {
      setProfile(false);
    }
  };

  const openSidebar = () => {
    if (!sidemenu) {
      setSideMenu(true);
    } else {
      setSideMenu(false);
    }
  };

  return (
    // navbar
    <div className={style.Navbar}>
      {/* container */}
      <div className={style.Navbar_container}>
        {/* logo and search_box */}
        <div className={style.Navbar_container_left}>
          <div className={style.Navbar_logo}>
            <Image src={images.logo} alt="" width={100} height={100} />
          </div>
          <div className={style.Navbar_searchbar}>
            <input type="text" placeholder="Search items" id="" />
            <BsSearch className={style.searchicon} onClick={() => {}} />
          </div>
        </div>
        <div className={style.Navbar_container_right}>
          {/* dicover */}
          <div className={style.Navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={style.Navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/* help */}
          <div className={style.Navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={style.Navbar_container_right_help_box}>
                <Help />
              </div>
            )}
          </div>
          {/* notification */}
          <div className={style.Navbar_container_right_notification}>
            <MdNotifications
              className={style.notifyIcon}
              onClick={(e) => openNotification(e)}
            />
            {notification && (
              <div className="style.Navbar_container_right_notification_box">
                <Notification />
              </div>
            )}
          </div>

          {/* create button */}
          <div
            className={style.Navbar_container_right_create_btn}
            style={{ width: "10rem", textAlign: "center" }}
          >
            <Button btnName="Create" handleClick={() => {}} />
          </div>

          {/* profile */}
          <div className={style.Navbar_container_right_profile_box}>
            <div className={style.Navbar_container_right_profile}>
              <Image
                src={images.user1}
                width={40}
                height={40}
                alt="Profile"
                onClick={() => openProfile()}
                style={{
                  borderRadius: "50%",
                }}
              />

              {profile && <Profile />}
            </div>
          </div>

          {/* menu */}
          <div className={style.Navbar_container_right_menuBtn}>
            <CgMenuRight
              className={style.menuIcon}
              onClick={() => openSidebar()}
            />
          </div>
        </div>
      </div>

      {/*  sidemenu */}

      {sidemenu && (
        <div className={style.sidebar}>
          <Sidebar setSideMenu={setSideMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
