import React, { useState } from "react";
import resume from "../../assets/Jasra_Vandekrol_Resume.pdf";
import { fallDown as Menu } from "react-burger-menu";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: { isOpen: boolean }) => setIsOpen(state.isOpen);

  const closeMenu = () => setIsOpen(false);

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "3vw",
      top: "2.5vw",
      zIndex: "9999",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "auto",
      width: "100%",
      paddingTop: "5vw",
    },
    bmMenu: {
      background: "var(--primary-color)",
      padding: "2.5em 1em 0",
      fontSize: "1.15em",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "flex",
      listStyleType: "none",
      textDecoration: "none",
      margin: "0.5em",
    },
  };

  return (
    <nav id="burger-menu">
      <Menu
        styles={styles}
        isOpen={isOpen}
        onStateChange={(state) => handleStateChange(state)}
        disableAutoFocus>
        <a onClick={() => closeMenu()} href="#about" className="menu-item">
          <li>About</li>
        </a>
        <a onClick={() => closeMenu()} href="#services" className="menu-item">
          <li>Services</li>
        </a>
        <a onClick={() => closeMenu()} href="#contact" className="menu-item">
          <li>Contact</li>
        </a>
        <a
          onClick={() => closeMenu()}
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="menu-item">
          <li>Resume</li>
        </a>
      </Menu>
    </nav>
  );
  //   }
};

export default BurgerMenu;
