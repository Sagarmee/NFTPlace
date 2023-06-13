import React from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

//internal import
import style from "./Search_box.module.css";
const Search_box = () => {
  return (
    <div className={style.search_box}>
      <div className={style.search_box_box}>
        <BsSearch className={style.search_box_box_icon} />
        <input type="text" placeholder="Type Your Keyword" />
        <BsArrowRight className={style.search_box_box_icon} />
      </div>
    </div>
  );
};

export default Search_box;
