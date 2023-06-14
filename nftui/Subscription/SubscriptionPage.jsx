import React from "react";
import { TiTick } from "react-icons/ti";

//internal import
import style from "./SubscriptionPage.module.css";
import { Button } from "../Components/componentindex";

const SubscriptionPage = ({ ele, i }) => {
  return (
    <div className={style.subscriptionbox}>
      <div className={style.subscriptionbox_box}>
        <span className={style.subscriptionbox_box_span}>{ele.plan}</span>
        <small className={style.subscriptionbox_box_small}>
          {ele.popular || ""}
        </small>

        <p className={style.subscriptionbox_box_price}>{ele.price}</p>

        <div className={style.subscriptionbox_box_info}>
          {ele.service.map((ele, i) => (
            <p className={style.subscriptionbox_box_info_para} key={i + 1}>
              <span>
                <TiTick />
              </span>
              {ele}
            </p>
          ))}
        </div>

        <Button
          btnName="Submit"
          handleClick={() => {}}
          className={style.button}
        />

        {ele.info}
      </div>
    </div>
  );
};

export default SubscriptionPage;
