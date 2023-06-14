import React from "react";

//internal import
import style from ".././styles/Subscription.module.css";
import SubscriptionPage from "../Subscription/SubscriptionPage";

const Subscription = () => {
  const subscriptionArray = [
    {
      plan: "STARTER",
      price: "$5/mo",
      popular: "",
      service: ["Automated Reporting", "Faster Processing", "Customizations"],
      info: "Literally you probably haven't heard of them jean shorts.",
    },
    {
      plan: "BASIC",
      price: "$15/mo",
      popular: "POPULAR",
      service: [
        "Everything in Starter",
        "100 Builds",
        "Progress Reports",
        "Premium Support",
      ],

      info: "Literally you probably haven't heard of them jean shorts.",
    },
    {
      plan: "PLUS",
      price: "$25/mo",
      popular: "",
      service: [
        "Everything in Basic",
        "Unlimited Builds",
        "Advanced Analytics",
        "Company Evaluations",
      ],

      info: "Literally you probably haven't heard of them jean shorts.",
    },
  ];
  return (
    <div className={style.subscription}>
      <div className={style.subscription_box}>
        <div className={style.subscription_box_info}>
          <h1>Subscription</h1>
          <p>Pricing to fit the needs of any companie size.</p>
        </div>

        <div className={style.subscription_box_box}>
          {subscriptionArray.map((ele, i) => (
            <SubscriptionPage key={i + 1} ele={ele} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
