import React, { use, useEffect, useState } from "react";

import "./InfoSection.css";
// import info_pic1 from "../../assets/info_pic1.jpg";
// import info_pic2 from "../../assets/info_pic2.jpg";
// import info_pic3 from "../../assets/info_pic3.jpg";
import about_pic from "../../assets/about-pic.jpg";
import arrow from "../../assets/arrow.png";
import { Link } from "react-scroll";

const InfoSection = () => {
  const [hideArrowUp, setHideArrowUp] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 900 ? setHideArrowUp(false) : setHideArrowUp(true);
    });
  });

  return (
    <div className="infoSection">
      <div className="info">
        <img src={about_pic} alt="info pic" />
        <div className="caption">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos
            totam dignissimos natus sequi. Saepe, quisquam assumenda! Eaque,
            numquam neque?
          </p>
        </div>
      </div>
      <div className="info">
        <img src={about_pic} alt="info pic" />
        <div className="caption">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos
            totam dignissimos natus sequi. Saepe, quisquam assumenda! Eaque,
            numquam neque?
          </p>
        </div>
      </div>
      <div className="info">
        <img src={about_pic} alt="info pic" />
        <div className="caption">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos
            totam dignissimos natus sequi. Saepe, quisquam assumenda! Eaque,
            numquam neque?
          </p>
        </div>
      </div>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <div className={`arrow-up btn${hideArrowUp ? " hide" : ""}`}>
          <img src={arrow} alt="arrow up" />
        </div>
      </Link>
    </div>
  );
};

export default InfoSection;
