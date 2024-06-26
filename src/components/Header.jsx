import { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";

import "./header.css"

export default function Header() {

  const [btn, setBtn] = useState("mobile__menu-hide");

  function handleClick() {
    setBtn(v => v === "mobile__menu-hide" ? "mobile__menu-show" : "mobile__menu-hide")
    console.log(btn);
  }

  return (
    <header className="header">
      <a className="header__logo" href="#">
        <div className="icon"></div>
        <div className="info">
          <h3 className="header__title">Heiser&apos;s</h3>
          <h3 className="title-black">Hardware</h3>
        </div>
      </a>
      <menu className="header__menu">
        <li><a href="#"><IoHome /><span>Home</span></a></li>
        <li><a href="#"><FaInfoCircle/><span>About</span></a></li>
        <li><a href="#"><MdContactSupport/><span>Contacts</span></a></li>
        <li><a href="#"><IoMdPricetags/><span>Prices</span></a></li>
      </menu>
      <div className="header__account">
        <a href="#" className="account">Account</a>
        <a href="#" className="log-in">Log in</a>
      </div>
      <button className="burger__menu" onClick={handleClick}>
        <div className="dash"></div>
        <div className="dash"></div>
        <div className="dash"></div>
      </button>

      <menu className={btn}>
        <button className="mobile-menu__close-btn" onClick={handleClick}>
          <div className="close-btn__dash1"></div>
          <div className="close-btn__dash2"></div>
        </button>
        <div className="mobile-menu__main">
          <li><a href="#"><IoHome /><span>Home</span></a></li>
          <li><a href="#"><FaInfoCircle/><span>About</span></a></li>
          <li><a href="#"><MdContactSupport/><span>Contacts</span></a></li>
          <li><a href="#"><IoMdPricetags/><span>Prices</span></a></li>
        </div>
        <div className="divider"></div>
        <div className="mobile-menu__links">
          <a href="#" className="account">Account</a>
          <a href="#" className="log-in">Log in</a>
        </div>
      </menu>
    </header>
  )
}