import React, { useState, useCallback, useMemo, useContext } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

//internal import
import style from "../styles/Account.module.css";
import images from ".././Components/img/index";
import Form from "../Account/AccountForm/AccountForm";

const Account = () => {
  const [fileUrl, setfileUrl] = useState(`${images.user2}`);

  const onDrop = useCallback(async (acceptedFiles) => {
    setfileUrl(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className={style.account}>
      <div className={style.account_info}>
        <h1>Profile Setting</h1>
        <p>
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
      </div>

      <div className={style.account_box}>
        <div className={style.account_box_img} {...getRootProps()}>
          <input {...getInputProps()} />
          <Image
            src={images.user1}
            alt="profile"
            width={150}
            height={150}
            className={style.account_box_img_img}
          />
          <p className={style.account_box_img_para}>change image</p>
        </div>

        <div className={style.account_form}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Account;
