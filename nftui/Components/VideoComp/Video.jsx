import React from "react";
import Image from "next/image";

//internal import
import style from "./Video.module.css";
import images from ".././img/index";

const Video = () => {
  return (
    <div className={style.video}>
      <div className={style.video_box}>
        <h1>
          <span>🎬</span> The videos
        </h1>
        <p>
          check out our hotest.view more and share more new perspective on just
          about any topic.everyone's welcome
        </p>
        <div className={style.video_box_frame}>
          <div className={style.video_box_frame_left}>
            <Image
              src={images.nftvideo}
              width={1440}
              height={920}
              className={style.video_box_frame_left_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
