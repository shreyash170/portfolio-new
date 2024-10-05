import React from "react";
import "../Styles/Footer.css";
import { HashLink} from "react-router-hash-link";

function Footer() {
  return (
    <>
      <footer>
        <div className="navLinkContainer">
          <ul className="flexRow footerLink">
            <li>
            <HashLink to="#about">
                ABOUT
              </HashLink>
            </li>
            <li>
              <HashLink to="#skills">
                SKILLS
              </HashLink>
            </li>
            <li>
              <HashLink to="#project">
                PROJECTS
              </HashLink>
            </li>
            <li>
              <HashLink to="#contact">
                CONTACT
              </HashLink>
            </li>
          </ul>
        </div>
        <p>COPYRIGHT &#169; ALL RIGHT RESERVED</p>
      </footer>
    </>
  );
}
export default Footer;
