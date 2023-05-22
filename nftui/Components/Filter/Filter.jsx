import React, { useState } from "react";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

//internal import
import style from "./Filter.module.css";
import { Button } from "../componentindex";

const Filter = () => {
  const [Filter, setFilter] = useState(true);
  const [Image, setImage] = useState(true);
  const [Video, setVideo] = useState(true);
  const [Music, setMusic] = useState(true);

  const openFilter = () => {
    if (!Filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  const openimage = () => {
    if (!Image) {
      setImage(true);
    } else {
      setImage(false);
    }
  };

  const openvideo = () => {
    if (!Video) {
      setVideo(true);
    } else {
      setVideo(false);
    }
  };

  const openmusic = () => {
    if (!Music) {
      setMusic(true);
    } else {
      setMusic(false);
    }
  };

  return (
    <div className={style.filter}>
      <div className={style.filter_box}>
        <div className={style.filter_box_left}>
          <button onClick={() => {}}>NFTS</button>
          <button onClick={() => {}}>Arts</button>
          <button onClick={() => {}}>Music</button>
          <button onClick={() => {}}>Sports</button>
          <button onClick={() => {}}>Photography</button>
        </div>
        <div className={style.filter_box_right}>
          <div
            className={style.filter_box_right_box}
            onClick={() => openFilter()}
          >
            <FaFilter />
            <span>Filter</span>

            {Filter ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </div>
      </div>

      {Filter && (
        <div className={style.filter_items}>
          <div className={style.filter_box_items_box}>
            <div className={style.filter_items_box_item}>
              <FaWallet />
              <span>10ETH</span>
              <AiFillCloseCircle />
            </div>
          </div>

          <div className={style.filter_box_items_box}>
            <div
              className={style.filter_box_items_box_item_trans}
              onClick={() => openimage()}
            >
              <FaImages />
              <span>Image</span>

              {Image ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={style.filter_box_items_box}>
            <div
              className={style.filter_box_items_box_item_trans}
              onClick={() => openvideo()}
            >
              <FaImages />
              <span>Videos</span>

              {Video ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={style.filter_box_items_box}>
            <div
              className={style.filter_box_items_box_item_trans}
              onClick={() => openmusic()}
            >
              <FaImages />
              <span>Music</span>

              {Music ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={style.filter_box_items_box}>
            <div className={style.filter_box_items_box_item_trans}>
              <FaUserAlt />
              <span>Verified</span>
              <MdVerified />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
