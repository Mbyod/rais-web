import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

import callIcon from "../../assets/call_icon.svg";
import logo from "../../assets/logo2.png";
import burger_menu from "../../assets/burger-menu.png";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 250 ? setDark(true) : setDark(false);
    });
  }, []);

  const [burgerMenu, setBurgerMenu] = useState(false);
  function toggleBurgerMenu() {
    burgerMenu ? setBurgerMenu(false) : setBurgerMenu(true);
    console.log(burgerMenu);
  }

  return (
    <nav className={`container ${dark ? "dark-nav" : ""}`}>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <ul className={burgerMenu ? "" : "hide-burger-menu"}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            spy={true}
            activeClass="active-hero"
          >
            Главная
          </Link>
        </li>
        <li>
          <Link
            to="infoSection"
            smooth={true}
            offset={-280}
            duration={500}
            activeClass="active"
            spy={true}
          >
            Услуги
          </Link>
        </li>
        <li>
          <Link
            to="aboutSection"
            smooth={true}
            offset={-280}
            duration={500}
            activeClass="active"
            spy={true}
          >
            Компания
          </Link>
        </li>
        <li>
          <Link
            to="employeesSection"
            smooth={true}
            offset={-300}
            duration={500}
            activeClass="active"
            spy={true}
          >
            Сотрудники
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-300}
            duration={500}
            activeClass="active"
            spy={true}
          >
            Контакты
          </Link>
        </li>

        <li>
          <button className="btn">
            <div className="nav--call-section">
              <img src={callIcon} alt="call" className="call-icon" />
              <a href="tel:8(8452)768-880">8(8452)768-880</a>
            </div>
          </button>
        </li>
      </ul>
      <img
        src={burger_menu}
        alt="menu"
        className="burger-menu"
        onClick={toggleBurgerMenu}
      />
    </nav>
  );
};

export default Navbar;
