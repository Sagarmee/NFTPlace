import React from "react";

//internal import
import style from "./NftDetail_page.module.css";
import { NftDetailImg, NftDescription } from "./NftDetail";

const NftDetail_page = () => {
  return (
    <div className={style.nftdetail}>
      <div className={style.nftdetail_box}>
        <NftDetailImg />
        <NftDescription />
      </div>
    </div>
  );
};

export default NftDetail_page;
