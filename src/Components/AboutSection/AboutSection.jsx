import React from "react";

import "./AboutSection.css";
import about_img from "../../assets/info_pic3.jpg";
// import play_icon from "../../assets/play-icon.png";
import play_icon from "../../assets/play.png";

const AboutSection = ({ setPlayerState }) => {
  return (
    <div className="aboutSection">
      <div className="about-left">
        <img src={about_img} alt="about img" className="about-img" />
        <img
          src={play_icon}
          alt="play"
          className="play-icon"
          onClick={() => {
            setPlayerState(true);
          }}
        />
      </div>
      <div className="about-right">
        {/* <h3>О компании</h3> */}
        <p>
          Компания "Райс" оказывает услуги по грузоперевозкам на территории
          России и стран СНГ с 2010 года. За этого время компания заработала
          безупречную репутацию среди партнеров. Мы являемся собственниками
          транспорта и не привлекаем сторонних перевозчиков для доставки грузов
          клиентов, это позволяет нам гарантировать качественный сервис.{" "}
        </p>
        <p>
          Компания "Райс" — это не просто перевозчик, это надежный партнер! Мы
          ценим доверие наших клиентов и делаем все возможное, чтобы оправдать
          их ожидания.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
