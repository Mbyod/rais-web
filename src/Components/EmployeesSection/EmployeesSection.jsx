import React, { useRef } from "react";

import "./EmployeesSection.css";

import arrow from "../../assets/arrow.png";
import arrow_back from "../../assets/arrow-back.png";
import employee_1 from "../../assets/employee_1.jpg";
const EmployeesSection = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBack = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="employeesSection">
      <img src={arrow} alt="next" className="next-btn" onClick={slideForward} />
      <img
        src={arrow_back}
        alt="back"
        className="back-btn"
        onClick={slideBack}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="employee-info">
                <img src={employee_1} alt="employee" />
                <div>
                  <h4>1Тестовый Тест</h4>
                  <span>Водитель</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                sint quas debitis id officiis unde vero repudiandae temporibus
                assumenda soluta, non illum harum maxime dolores ipsum saepe
                molestias ducimus veritatis?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="employee-info">
                <img src={employee_1} alt="employee" />
                <div>
                  <h4>2Тестовый Тест</h4>
                  <span>Водитель</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                sint quas debitis id officiis unde vero repudiandae temporibus
                assumenda soluta, non illum harum maxime dolores ipsum saepe
                molestias ducimus veritatis?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="employee-info">
                <img src={employee_1} alt="employee" />
                <div>
                  <h4>3Тестовый Тест</h4>
                  <span>Водитель</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                sint quas debitis id officiis unde vero repudiandae temporibus
                assumenda soluta, non illum harum maxime dolores ipsum saepe
                molestias ducimus veritatis?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="employee-info">
                <img src={employee_1} alt="employee" />
                <div>
                  <h4>4Тестовый Тест</h4>
                  <span>Водитель</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                sint quas debitis id officiis unde vero repudiandae temporibus
                assumenda soluta, non illum harum maxime dolores ipsum saepe
                molestias ducimus veritatis?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeesSection;
