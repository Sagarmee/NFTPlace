import React from "react";
import style from "../styles/home.module.css";

import {
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
    </div>
  );
};

export default Home;
