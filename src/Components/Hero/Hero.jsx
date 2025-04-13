import React from "react";

import "./Hero.css";
import arrow from "../../assets/arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          <span>РАЙС</span> — это надежный партнер!
        </h1>
        <p>
          Мы ценим доверие наших клиентов и делаем все возможное, чтобы
          оправдать их ожидания.
        </p>

        <Link
          to="infoSection"
          smooth={true}
          offset={-320}
          duration={500}
          className="btn"
        >
          <img src={arrow} alt="arrow down" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
