import React from "react";

//internal import
import style from ".././styles/Collections.module.css";
import Brand from "../Components/Brand/Brand";
import { Filter, Slider } from "../Components/componentindex";
import images from ".././Components/img/index";
import Banner from "../Collectionspages/Banner/Banner";
import CollectionProfile from "../Collectionspages/CollectionsProfile/CollectionProfile";
import NftCard from "../Collectionspages/NftCard/NftCard";

const Collection = () => {
  const collectionarray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_3,
    images.nft_image_2,
  ];

  return (
    <div className={style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NftCard Nftdata={collectionarray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default Collection;
