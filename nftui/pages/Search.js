import React from "react";

//internal import
import style from ".././styles/Search.module.css";
import images from ".././Components/img/index";

import Banner from "../Collectionspages/Banner/Banner";
import { Filter, Brand } from "../Components/componentindex";
import NftCard from "../Collectionspages/NftCard/NftCard";
import { Search_box } from ".././Search/Search";

const Search = () => {
  const collectionarray = [
    images.nft_image_8,
    images.nft_image_7,
    images.nft_image_6,
    images.nft_image_5,
    images.nft_image_4,
    images.nft_image_3,
    images.nft_image_2,
    images.nft_image_1,
  ];
  return (
    <div className={style.serach}>
      <Banner bannerImage={images.creatorbackground10} />
      <Search_box />
      <Filter />
      <NftCard Nftdata={collectionarray} />
      <Brand />
    </div>
  );
};

export default Search;
