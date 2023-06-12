import React, { useState } from "react";
import Image from "next/image";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";

//internal import
import style from "./AuthorTaps.module.css";
import images from "../../Components/img/index";
const AuthorTaps = ({
  setcollectiables,
  setcreated,
  setlike,
  setfollower,
  setfollowing,
}) => {
  const [openlist, setopenlist] = useState(false);
  const [activebtn, setactivebtn] = useState(1);
  const [selectmenu, setselectmenu] = useState("Most Recent");

  const listarray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const opendropdownlist = () => {
    if (!openlist) {
      setopenlist(true);
    } else {
      setopenlist(false);
    }
  };

  const opentab = (e) => {
    const btntext = e.target.innerText;

    if (btntext === "Collectiables") {
      setcollectiables(true);
      setcreated(false);
      setlike(false);
      setfollower(false);
      setfollowing(false);
      setactivebtn(1);
    } else if (btntext === "Created") {
      setcollectiables(false);
      setcreated(true);
      setlike(false);
      setfollower(false);
      setfollowing(false);
      setactivebtn(2);
    } else if (btntext === "Liked") {
      setcollectiables(false);
      setcreated(false);
      setlike(true);
      setfollower(false);
      setfollowing(false);
      setactivebtn(3);
    } else if (btntext === "Following") {
      setcollectiables(false);
      setcreated(false);
      setlike(false);
      setfollower(false);
      setfollowing(true);
      setactivebtn(4);
    } else if (btntext === "Followers") {
      setcollectiables(false);
      setcreated(false);
      setlike(false);
      setfollower(true);
      setfollowing(false);
      setactivebtn(5);
    }
  };
  return (
    <div className={style.authortaps}>
      <div className={style.authortaps_box}>
        <div className={style.authortaps_box_left}>
          <div className={style.authortaps_box_left_btn}>
            <button
              className={`${activebtn == 1 ? style.active : " "}`}
              onClick={(e) => opentab(e)}
            >
              Collectiables
            </button>
            <button
              className={`${activebtn == 2 ? style.active : " "}`}
              onClick={(e) => opentab(e)}
            >
              Created
            </button>
            <button
              className={`${activebtn == 3 ? style.active : " "}`}
              onClick={(e) => opentab(e)}
            >
              Liked
            </button>
            <button
              className={`${activebtn == 4 ? style.active : " "}`}
              onClick={(e) => opentab(e)}
            >
              Following
            </button>
            <button
              className={`${activebtn == 5 ? style.active : " "}`}
              onClick={(e) => opentab(e)}
            >
              Followers
            </button>
          </div>
        </div>
        <div className={style.authortaps_box_right}>
          <div
            className={style.authortaps_box_right_para}
            onClick={() => opendropdownlist()}
          >
            <p>{selectmenu}</p>
            {openlist ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {openlist && (
            <div className={style.authortaps_box_right_list}>
              {listarray.map((ele, i) => (
                <div
                  className={style.authortaps_box_right_list_item}
                  onClick={() => setselectmenu(el)}
                  key={i + 1}
                >
                  <p>{ele}</p>
                  <span>{selectmenu == ele && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorTaps;
