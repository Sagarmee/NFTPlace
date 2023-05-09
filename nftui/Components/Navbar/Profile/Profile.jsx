import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";

import style from "./profile.module.css";
import images from "../../img/index";

const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.profle_section}>
        <div className={style.profile_second_info}>
          <Image
            src={images.user1}
            width={50}
            height={50}
            className={style.profile_user_image}
          />
          <div className={style.profile_detail}>
            <p>Eden tuan</p>
            <small>0x4fskljsllk3klsjljsl3ldkmakl</small>
          </div>
        </div>
        <div className={style.profile_menu}>
          <div className={style.profile_menu_one}>
            <div className={style.profile_item_one}>
              <FaUserAlt />
              <p>
                <Link href={{ pathname: "/myprofile" }}>my profile</Link>
              </p>
            </div>
            <div className={style.profile_item_one}>
              <FaRegImage />
              <p>
                <Link href={{ pathname: "/myitems" }}>my items</Link>
              </p>
            </div>
            <div className={style.profile_item_one}>
              <FaUserEdit />
              <p>
                <Link href={{ pathname: "/editprofile" }}>edit profile</Link>
              </p>
            </div>
          </div>
          <div className={style.profile_menu_two}>
            <div className={style.profile_item_one}>
              <MdHelpCenter />
              <p>
                <Link href={{ pathname: "/help" }}>help</Link>
              </p>
            </div>
            <div className={style.profile_item_one}>
              <TbDownload />
              <p>
                <Link href={{ pathname: "/download" }}>download</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
