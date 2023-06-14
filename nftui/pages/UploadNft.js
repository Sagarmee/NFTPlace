import React from "react";

//internal import
import style from "../styles/UploadNft.module.css";
import NftUpload from "../UploadNft/NftUpload";

const UploadNft = () => {
  return (
    <div className={style.uploadnft}>
      <div className={style.uploadnft_box}>
        <div className={style.uploadnft_box_heading}>
          <h1>Create New NFT</h1>
          <p>
            you can set preferred display name,create your prfile URL and manage
            other personal settings.
          </p>
        </div>

        <div className={style.uploadnft_box_title}>
          <h1>Image, Video, Audio, or 3D Model</h1>

          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </p>
        </div>

        <div className={style.uploadnft_box_form}>
          <NftUpload />
        </div>
      </div>
    </div>
  );
};

export default UploadNft;
