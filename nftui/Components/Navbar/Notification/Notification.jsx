import React from "react";
import Link from "next/link";
import Image from "next/image";

// internal import
import style from "./notification.module.css";
import images from "../../img/index";

const Notification = () => {
  return (
    <div className={style.notification}>
      <p className={style.notification_heading}>Notification</p>
      <div className={style.notification_profile}>
        <div className={style.notification_profile_image}>
          <Image
            src={images.user1}
            alt="user-image"
            width={40}
            height={40}
            className={style.notification_user_image}
          />
        </div>
        <div className={style.notification_profile_details}>
          <h4>Eden Tuan</h4>
          <p>Measure actions your users...</p>
          <small>3 minutes ago</small>
        </div>
        <div className={style.notification_active_tick}></div>
      </div>
    </div>
  );
};

export default Notification;
