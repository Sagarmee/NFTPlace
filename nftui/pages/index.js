import React from "react";
import style from "../styles/home.module.css";

import { Herosection, Nftslider, Services } from "../Components/componentindex";

const Home = () => {
  return (
    <div className={style.homepage}>
      <Herosection />
      <Services />
      <Nftslider />
    </div>
  );
};

export default Home;
