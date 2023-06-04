import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

//internal improt
import style from "./Slider.module.css";
import SliderCard from "./SliderCard/SliderCard";
const Slider = () => {
  const sliderArray = [1, 2, 3, 4, 5, 6];
  const [width, setwidth] = useState(0);
  const dragslider = useRef(null);

  const handlescroll = (direction) => {
    const { current } = dragslider;

    const scrollAmount = window.innerWidth > 1000 ? 270 : 210;

    if (direction == "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  // useEffect(() => {
  //   setwidth(dragslider.current.scrollWidth - dragslider.current.offsetWidth);
  // }, []);

  return (
    <div className={style.slider}>
      <div className={style.slider_box}>
        <h2>Explore NFTs Video</h2>
        <div className={style.slider_box_button}>
          <p>click on play icon & enjoy NFTs video</p>

          <div className={style.slider_box_button_btn}>
            <div
              className={style.slider_box_button_btn_icon}
              onClick={() => handlescroll("left")}
            >
              <TiArrowLeftThick />
            </div>
            <div
              className={style.slider_box_button_btn_icon}
              onClick={() => handlescroll("right")}
            >
              <TiArrowRightThick />
            </div>
          </div>
        </div>

        {/* <motion.div className={style.slider_box_items} ref={dragslider}>
          <motion.div
            ref={dragslider}
            className={style.slider_box_item}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {sliderArray.map((ele, i) => (
              <SliderCard key={i + 1} ele={ele} i={i} />
            ))}
          </motion.div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Slider;
