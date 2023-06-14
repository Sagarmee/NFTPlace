import React, { useState } from "react";
import Image from "next/image";

//internal import
import style from ".././styles/Wallet.module.css";
import images from ".././Components/img/index";
const ConnectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const providerArray = [
    {
      provider: images.provider1,
      name: "Metamask",
    },
    {
      provider: images.provider2,
      name: "walletConnect",
    },
    {
      provider: images.provider3,
      name: "walletlink",
    },
    {
      provider: images.provider1,
      name: "Formatic",
    },
  ];
  return (
    <div className={style.connectwallet}>
      <div className={style.connectwallet_box}>
        <h1>Connect Your Wallet</h1>
        <p className={style.connectwallet_box_para}>
          Connect with one of our avaliabl wallet providers or create a new one
        </p>

        <div className={style.connectwallet_box_provider}>
          {providerArray.map((ele, i) => (
            <div
              className={`${style.connectwallet_box_provider_item} ${
                activeBtn == i + 1 ? style.active : ""
              }`}
              key={i + 1}
              onClick={() => setActiveBtn(i + 1)}
            >
              <Image
                src={ele.provider}
                width={50}
                height={50}
                className={style.connectwallet_box_provider_item_img}
              />
              <p>{ele.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
