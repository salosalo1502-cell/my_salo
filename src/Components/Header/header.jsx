
import style from "./header.module.css";
import { NavLink } from "react-router-dom";
import image from "../../images/container logo.png";
import { useState } from "react";
//import { useReveal } from "./.././../Reveal/useReveal";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className={style.header_top}>
      <div className={style.container}>

        {/* LOGO */}
        <div className={style.header_image}>
          <img src={image} width="25" alt="logo" />
        </div>

        {/* NAV */}
        <nav>
          <ul className={`${style.nav_list} ${menuOpen ? style.open : ""}`}>

            <li>
              <NavLink to="/">მთავარი</NavLink>
            </li>

            <li>
              <NavLink to="/aboutUs">ჩვენს შესახებ</NavLink>
            </li>

            {/* DROPDOWN */}
            <li className={style.dropdown}>

              <span
                onClick={() => setServicesOpen(prev => !prev)}
              >
                სერვისები
              </span>

              <ul className={`${style.dropdown_menu} ${servicesOpen ? style.show : ""}`}>

                <li>
                  <NavLink to="/courses">კურსები</NavLink>
                </li>

                <li>
                  <NavLink to="/studentPorfolios">პროექტები</NavLink>
                </li>

                <li>
                  <NavLink to="/mentorPage">მენტორის დახმარება</NavLink>
                </li>





              </ul>

            </li>

            <li>
              <NavLink to="/Contaqt">კონტაქტი</NavLink>
            </li>

          </ul>
        </nav>

        {/* HAMBURGER */}
        <div
          className={`${style.hamburger} ${menuOpen ? style.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Header;




