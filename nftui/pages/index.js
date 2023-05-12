import React from "react";
import style from "../styles/home.module.css";

import { Herosection, Services } from "../Components/componentindex";

const Home = () => {
  return (
    <div className={style.homepage}>
      <Herosection />
      <Services />
    </div>
  );
};

export default Home;
