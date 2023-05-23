import React from "react";
import style from "../styles/home.module.css";

import {
  Collection,
  Filter,
  Heading,
  Herosection,
  Nftcard,
  Nftslider,
  Services,
  Subscribe,
} from "../Components/componentindex";

const Home = () => {
  return (
    <div className={style.homepage}>
      <Herosection />
      <Services />
      <Nftslider />
      <Heading
        heading="Filter By Collections"
        paragraph="Discover the most trending products in current market trend."
      />
      <Collection />
      <Subscribe />
      <Heading
        heading="What's trending now"
        paragraph="Discover the most trending products in current market trend."
      />
      <Filter />
      <Nftcard />
    </div>
  );
};

export default Home;
