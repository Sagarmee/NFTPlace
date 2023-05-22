import React from "react";
import style from "../styles/home.module.css";

import {
  Heading,
  Herosection,
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
      <Subscribe />
      <Heading
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
    </div>
  );
};

export default Home;
