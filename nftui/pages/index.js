import React from "react";
import style from "../styles/home.module.css";

import {
  Filter,
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
        heading="What's trending now"
        paragraph="Discover the most trending products in current market trend."
      />
      <Filter />
    </div>
  );
};

export default Home;
