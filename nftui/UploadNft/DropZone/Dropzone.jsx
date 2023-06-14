import React, { useCallback, useState, useMemo, useContext } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

//internal import
import style from "./Dropzone.module.css";
import images from "../../Components/img/index";

const Dropzone = ({
  title,
  heading,
  subHeading,
  itemname,
  website,
  description,
  royalties,
  filesize,
  category,
  properties,
  image,
}) => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFileUrl(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });
  return (
    <div className={style.dropzone}>
      <div className={style.dropzone_box} {...getRootProps()}>
        <input {...getInputProps()} />

        <div className={style.dropzone_box_input}>
          <p>{title}</p>

          <div className={style.dropzone_box_input_img}>
            <Image
              src={image}
              alt="upload"
              width={100}
              height={100}
              className={style.dropzone_box_input_img_img}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>

      {!fileUrl && (
        <div className={style.dropzone_box_aside}>
          <div className={style.dropzone_box_aside_box}>
            <Image
              src={images.nft_image_1}
              alt="nft image"
              width={200}
              height={200}
            />

            <div className={style.dropzone_box_aside_box_preview}>
              <div className={style.dropzone_box_aside_box_preview_one}>
                <p>
                  <samp>NFT Name:</samp>
                  {itemname || ""}
                </p>
                <p>
                  <samp>Website:</samp>
                  {website || ""}
                </p>
              </div>

              <div className={style.dropzone_box_aside_box_preview_two}>
                <p>
                  <span>Royalties</span>
                  {royalties || ""}
                </p>
                <p>
                  <span>FileSize</span>
                  {filesize || ""}
                </p>
                <p>
                  <span>Properties</span>
                  {properties || ""}
                </p>
                <p>
                  <span>Category</span>
                  {category || ""}
                </p>
              </div>
              <div className={style.dropzone_box_aside_box_preview_three}>
                <p>
                  <span>Descrition</span>
                  {description || ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropzone;
