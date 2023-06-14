import React, { useState } from "react";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";

//internal style
import style from "./NftUpload.module.css";
import images from ".././Components/img/index";
import { Button } from ".././Components/componentindex";
import { Dropzone } from "../UploadNft/UploadNftindex";
import formstyle from "../Account/AccountForm/AccountForm.module.css";

const NftUpload = () => {
  const [active, setactive] = useState(0);
  const [itemname, setitemname] = useState("");
  const [website, setwebsite] = useState("");
  const [description, setdescription] = useState("");
  const [royalties, setroyalties] = useState("");
  const [filesize, setfilesize] = useState("");
  const [category, setcategory] = useState(0);
  const [properties, setproperties] = useState("");

  const categoryArry = [
    {
      image: images.nft_image_1,
      category: "Sports",
    },
    {
      image: images.nft_image_2,
      category: "Arts",
    },
    {
      image: images.nft_image_3,
      category: "Music",
    },
    {
      image: images.nft_image_1,
      category: "Digital",
    },
    {
      image: images.nft_image_2,
      category: "Time",
    },
    {
      image: images.nft_image_3,
      category: "Photography",
    },
  ];
  return (
    <div className={style.upload}>
      <Dropzone
        title="JPG, PNG, WEBM, MAX 100MB"
        heading="Drag & drop file"
        subHeading="or Browse media on your device"
        itemname={itemname}
        website={website}
        description={description}
        royalties={royalties}
        filesize={filesize}
        category={category}
        properties={properties}
        image={images.upload}
      />

      <div className={style.upload_box}>
        <div className={formstyle.form_box_input}>
          <label htmlFor="Nft">Item Name</label>
          <input
            type="text"
            placeholder="sagar bhai"
            className={formstyle.form_box_input_username}
            onChange={(e) => setitemname(e.target.value)}
          />
        </div>

        <div className={formstyle.form_box_input}>
          <label htmlFor="Website">Website</label>
          <div className={formstyle.form_box_input_box}>
            <div className={formstyle.form_box_input_box_icon}>
              <MdOutlineHttp />
            </div>
            <input
              type="text"
              placeholder="website"
              onChange={(e) => setwebsite(e.target.value)}
            />
          </div>

          <p className={style.form_box_input_para}>
            Ciscrypt will include a link to this URL on this item's detail page,
            so that users can click to learn more about it. You are welcome to
            link to your own webpage with more details.
          </p>
        </div>

        <div className={formstyle.form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="something about yourself in few words"
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
          <p>
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </p>
        </div>

        <div className={formstyle.form_box_input}>
          <label htmlFor="name">Choose Collection</label>
          <p className={style.form_box_input_para}>
            Choose a exiting collection or create a new one
          </p>

          <div className={style.upload_box_slider_div}>
            {categoryArry.map((ele, i) => (
              <div
                className={`${style.upload_box_slider} ${
                  active == i + 1 ? style.active : ""
                }`}
                key={i + 1}
                onClick={() => (setactive(i + 1), setcategory(ele.category))}
              >
                <div className={style.upload_box_slider_box}>
                  <div className={style.upload_box_slider_box_img}>
                    <Image
                      src={ele.image}
                      alt="background image"
                      width={70}
                      height={70}
                      className={style.upload_box_slider_box_img_img}
                    />
                  </div>
                  <div className={style.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>Crypto Legend - {ele.category}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={formstyle.form_box_input_social}>
          <div className={formstyle.form_box_input}>
            <label htmlFor="Royalties">Royalties</label>
            <div className={formstyle.form_box_input_box}>
              <div className={formstyle.form_box_input_box_icon}>
                <FaPercent />
              </div>
              <input
                type="text"
                placeholder="20%"
                onChange={(e) => setroyalties(e.target.value)}
              />
            </div>
          </div>
          <div className={formstyle.form_box_input}>
            <label htmlFor="size">Size</label>
            <div className={formstyle.form_box_input_box}>
              <div className={formstyle.form_box_input_box_icon}>
                <MdOutlineAttachFile />
              </div>
              <input
                type="text"
                placeholder="165MB"
                onChange={(e) => setfilesize(e.target.value)}
              />
            </div>
          </div>
          <div className={formstyle.form_box_input}>
            <label htmlFor="Properties">Properties</label>
            <div className={formstyle.form_box_input_box}>
              <div className={formstyle.form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Properties"
                onChange={(e) => setproperties(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={style.upload_box_btn}>
          <Button
            btnName="upload"
            handleClick={() => {}}
            className={style.upload_box_btn_style}
          />

          <Button
            btnName="Preview"
            handleClick={() => {}}
            className={style.upload_box_btn_style}
          />
        </div>
      </div>
    </div>
  );
};

export default NftUpload;
