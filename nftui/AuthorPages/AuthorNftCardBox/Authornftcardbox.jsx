import React from "react";

//internal import
import style from "./Authornftcardbox.module.css";
import images from "../../Components/img/index";
import Nftcard from "../../Collectionspages/NftCard/NftCard";
import Follower_tab_card from "../../Components/Follower/Follower_Card/Follower_Card";

const Authornftcardbox = ({
  collectiables,
  created,
  like,
  follower,
  following,
}) => {
  const collectiablesarray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_4,
    images.nft_image_5,
    images.nft_image_6,
    images.nft_image_7,
    images.nft_image_8,
  ];

  const createdarray = [
    images.nft_image_4,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_7,
  ];

  const likearray = [
    images.nft_image_4,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_7,
    images.nft_image_3,
    images.nft_image_4,
  ];

  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
  ];

  const followingarray = [
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
  ];
  return (
    <div className={style.authornftcardbox}>
      {collectiables && <Nftcard Nftdata={collectiablesarray} />}
      {created && <Nftcard Nftdata={createdarray} />}
      {like && <Nftcard Nftdata={likearray} />}
      {follower && (
        <div className={style.authornftcardbox_box}>
          {followerArray.map((el, i) => (
            <Follower_tab_card i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={style.authornftcardbox_box}>
          {followingarray.map((el, i) => (
            <Follower_tab_card i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Authornftcardbox;
