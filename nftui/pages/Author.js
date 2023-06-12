import React, { useState } from "react";

//internal import
import style from ".././styles/Author.module.css";
import Banner from "../Collectionspages/Banner/Banner";
import images from ".././Components/img/index";
import {
  AuthorTaps,
  Authorprofile,
  Authornftcardbox,
} from "../AuthorPages/AuthorProfile";
import { Title, Brand } from "../Components/componentindex";
import Follower_tab_card from "../Components/Follower/Follower_Card/Follower_Card";

const Author = () => {
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
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
  ];

  const [collectiables, setcollectiables] = useState(true);
  const [created, setcreated] = useState(false);
  const [like, setlike] = useState(false);
  const [following, setfollowing] = useState(false);
  const [follower, setfollower] = useState(false);

  return (
    <div className={style.author}>
      <Banner bannerImage={images.creatorbackground2} />
      <Authorprofile />
      <AuthorTaps
        setcollectiables={setcollectiables}
        setcreated={setcreated}
        setlike={setlike}
        setfollowing={setfollowing}
        setfollower={setfollower}
      />
      <Authornftcardbox
        collectiables={collectiables}
        created={created}
        like={like}
        following={following}
        follower={follower}
      />
      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NTF music or audio"
      />
      <div className={style.author_box}>
        {followerArray.map((el, i) => (
          <Follower_tab_card i={i} el={el} />
        ))}
      </div>
      <Brand />
    </div>
  );
};

export default Author;
