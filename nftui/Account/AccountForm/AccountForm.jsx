import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

//internal import
import style from "./AccountForm.module.css";
import { Button } from "../../Components/componentindex";

const AccountForm = () => {
  return (
    <div className={style.form}>
      <div className={style.form_box}>
        <form action="">
          <div className={style.form_box_input}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="sagar"
              className={style.form_box_input_username}
            />
          </div>

          <div className={style.form_box_input}>
            <label htmlFor="email">Email</label>
            <div className={style.form_box_input_box}>
              <div className={style.form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input type="text" placeholder="Email" />
            </div>
          </div>

          <div className={style.form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Something about yourself in few words"
            ></textarea>
          </div>

          <div className={style.form_box_input}>
            <label htmlFor="website">Website</label>
            <div className={style.form_box_input_box}>
              <div className={style.form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" placeholder="website" />
            </div>
          </div>

          <div className={style.form_box_input_social}>
            <div className={style.form_box_input}>
              <label htmlFor="facebook">facebook</label>
              <div className={style.form_box_input_box}>
                <div className={style.form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input type="text" placeholder="http://shoaib" />
              </div>
            </div>
            <div className={style.form_box_input}>
              <label htmlFor="instagram">Instagram</label>
              <div className={style.form_box_input_box}>
                <div className={style.form_box_input_box_icon}>
                  <TiSocialInstagram />
                </div>
                <input type="text" placeholder="http://shoaib" />
              </div>
            </div>
            <div className={style.form_box_input}>
              <label htmlFor="twitter">Twitter</label>
              <div className={style.form_box_input_box}>
                <div className={style.form_box_input_box_icon}>
                  <TiSocialTwitter />
                </div>
                <input type="text" placeholder="http://shoaib" />
              </div>
            </div>
          </div>

          <div className={style.form_box_input}>
            <label htmlFor="wallet">Wallet address</label>
            <div className={style.form_box_input_box}>
              <div className={style.form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input
                type="text"
                placeholder="0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8"
              />
              <div className={style.form_box_input_box_icon}>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className={style.form_box_btn}>
            <Button
              btnName="Upload Profile"
              handleClick={() => {}}
              className={style.button}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountForm;
