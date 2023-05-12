import React from "react";
import Image from "next/image";
import Link from "next/link";

//internal import
import style from "./Services.module.css";
import images from "../img/index";

const Services = () => {
  return (
    <div className={style.services_container}>
      <div className={style.services_box}>
        <div className={style.services}>
          <div className={style.services_image}>
            <Image src={images.service1} width={100} height={100} />
          </div>
          <div className={style.services_detail}>
            <div className={style.services_label}>
              <small>step1</small>
            </div>
            <h5>Filter & Discover</h5>
            <div className={style.services_content}>
              <p>Smart filtering and suggestions make it easy to find</p>
            </div>
          </div>
        </div>
        <div className={style.services}>
          <div className={style.services_image}>
            <Image src={images.service2} width={100} height={100} />
          </div>
          <div className={style.services_detail}>
            <div className={style.services_label}>
              <small>step2</small>
            </div>
            <h5>Add to bag</h5>
            <div className={style.services_content}>
              <p>Easily select the correct items and add them to the cart</p>
            </div>
          </div>
        </div>
        <div className={style.services}>
          <div className={style.services_image}>
            <Image src={images.service3} width={100} height={100} />
          </div>
          <div className={style.services_detail}>
            <div className={style.services_label}>
              <small>step3</small>
            </div>
            <h5>Fast shipping</h5>
            <div className={style.services_content}>
              <p>The carrier will confirm and ship quickly to you</p>
            </div>
          </div>
        </div>
        <div className={style.services}>
          <div className={style.services_image}>
            <Image src={images.service4} width={100} height={100} />
          </div>
          <div className={style.services_detail}>
            <div className={style.services_label}>
              <small>step4</small>
            </div>
            <h5>Enjoy the product</h5>
            <div className={style.services_content}>
              <p>Have fun and enjoy your 5-star quality products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
