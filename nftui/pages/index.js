import React from "react";
import style from "../styles/home.module.css";

import {
  Collection,
  Filter,
  Follower_Tab,
  Heading,
  Herosection,
  Nftcard,
  Nftslider,
  Services,
  Subscribe,
  Audio,
  Slider,
  Brand,
  Video,
} from "../Components/componentindex";

const Home = () => {
  return (
    <div className={style.homepage}>
      <Herosection />
      <Services />
      <Nftslider />
      <Heading
        heading="Listen NFTs audio live"
        paragraph="Click on music icon and enjoy NTF music or audio."
      />
      <Audio />
      <Follower_Tab />
      <Slider />
      <Collection />
      {/* <Heading
        heading="Filter By Collections"
        paragraph="Discover the most trending products in current market trend."
      /> */}
      <Heading
        heading="What's trending now"
        paragraph="Discover the most trending products in current market trend."
      />
      <Filter />
      <Nftcard />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
