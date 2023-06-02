import React from "react";

//internal style
import style from "./Audio.module.css";
import AudioSmallCard from "./AudioSmallCard/AudioSmallCard";
import AudioCard from "./AudioCard/AudioCard";

const Audio = () => {
  return (
    <div className={style.audiolive}>
      <div className={style.audiolive_box}>
        <div className={style.audiolive_box_left}>
          <AudioCard />
          <AudioCard />
        </div>
        <div className={style.audiolive_box_right}>
          <AudioSmallCard />
          <AudioSmallCard />
          <AudioSmallCard />
        </div>
      </div>
    </div>
  );
};

export default Audio;
