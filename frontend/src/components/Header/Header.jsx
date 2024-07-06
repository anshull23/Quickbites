import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = ({menuRef}) => {

  const scrollToMenu = () => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <img className="header-image" src={assets.header_image} alt="" />
      <div className="header-content">
        <h2>Dive into </h2>
        <h2>Deliciousness</h2>
        <p>
          Discover a diverse menu with an exquisite selection of dishes made
          from premium ingredients and culinary mastery. Our aim is to fulfill
          your cravings and elevate your dining pleasure, one delectable meal at
          a time.
        </p>
        <button onClick={scrollToMenu}>Menu</button>
      </div>
    </div>
  );
};

export default Header;
