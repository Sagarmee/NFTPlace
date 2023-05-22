import React from "react";
import Image from "next/image";
import { RiSendPlaneFill } from "react-icons/ri";

//internal import
import style from "./Subscribe.module.css";
import images from "../img/index";
import { Title } from "../componentindex";

const Subscribe = () => {
  return (
    <div className={style.subscribe}>
      <div className={style.subscribe_box}>
        <div className={style.subscribe_box_left}>
          <div className={style.subscribe_box_left_details}>
            <Title heading="Never miss a drop" />
            <Title
              paragraph="subscribe to our super-exclusive drop list and be the first to
              know about t upcoming drops"
            />
          </div>
          <div className={style.subscribe_box_left_list}>
            <div className={style.subscribe_box_left_list_detail_label}>
              <p>01</p>
            </div>
            <h5>get more discount</h5>
          </div>
          <div className={style.subscribe_box_left_list}>
            <div className={style.subscribe_box_left_list_detail_label}>
              <p>01</p>
            </div>
            <h5>get more discount</h5>
          </div>

          <div className={style.subscribe_box_left_input}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={style.subscribe_box_left_input_icons} />
          </div>
        </div>
        <div className={style.subscribe_box_right}>
          {/* <Image
            src={images.update}
            alt="subscribe-image"
            width={600}
            height={500}
            className={style.subscribe_box_right_image}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
