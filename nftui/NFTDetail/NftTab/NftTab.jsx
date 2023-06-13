import React from "react";
import Image from "next/image";

//internal import
import style from "./NftTab.module.css";
const NftTab = ({ dataTab, icon }) => {
  return (
    <div className={style.nfttab}>
      {dataTab.map((ele, i) => (
        <div className={style.nfttab_box} key={i + 1}>
          <Image
            src={ele}
            alt="profile image"
            width={40}
            height={40}
            className={style.nfttab_box_img}
          />

          <div className={style.nfttab_box_info}>
            <span>
              Offer by $770 by <span>Shoaib Bhai</span>
            </span>

            <small>Jun 14 - 4 : 12 PM</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NftTab;
