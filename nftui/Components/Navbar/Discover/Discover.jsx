import React from "react";
import Link from "next/link";

//internal import
import style from "./discover.module.css";

const Discover = () => {
  const discover = [
    {
      name: "Collection",
      url: "Collection",
    },
    {
      name: "Search page",
      url: "Search",
    },
    {
      name: "Author profile",
      url: "Author",
    },
    {
      name: "NFT Detail",
      url: "NftDetail",
    },
    {
      name: "Account settings",
      url: "Account",
    },
    {
      name: "Connect wallet",
      url: "connect wallet",
    },
    {
      name: "Upload item",
      url: "UploadNft",
    },
  ];

  return (
    <div>
      {discover.map((item, i) => (
        <div key={i + 1} className={style.discover}>
          <Link href={{ pathname: `${item.url}` }}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
