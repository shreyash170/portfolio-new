import React, { useState } from "react";
import "../Styles/Home.css";
import { HashLink} from "react-router-hash-link";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <div className="flexRow desktopNav">
        <div className="myName">MyPortfolio</div>
        <div className="">
          <ul className="flexRow navLinks">
            <li>
              <HashLink to="#about">ABOUT</HashLink>
            </li>
            <li>
              <HashLink to="#skills">SKILLS</HashLink>
            </li>
            <li>
              <HashLink to="#project">PROJECTS</HashLink>
            </li>
            <li>
              <HashLink to="#contact">CONTACT</HashLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`flexRow hamburgerFix hamburgerNav ${isOpen ? "open" : ""}`}
      >
        <div className="myName">MyProtfolio </div>
        <div className="hamburgerMenu">
          <div
            className={`hamburgerIcon ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menuLinks ${isOpen ? "open" : ""}`}>
            <li>
              <HashLink to="#about" onClick={toggleMenu}>
                ABOUT
              </HashLink>
            </li>
            <li>
              <HashLink to="#skills" onClick={toggleMenu}>
                SKILLS
              </HashLink>
            </li>
            <li>
              <HashLink to="#project" onClick={toggleMenu}>
                PROJECTS
              </HashLink>
            </li>
            <li>
              <HashLink to="#contact" onClick={toggleMenu}>
                CONTACT
              </HashLink>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
