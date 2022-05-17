import React from "react";
import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        Let's Go
        <a href="#home" className="scroll-up">
          <hr />
          <h2>
            <BsMouse /> - scroll up -
          </h2>
          <hr />
        </a>
      </h1>
      <div className="social-links">
        <a href="https://instagram.com/jf.545" target={"blank"}>
          <BsInstagram className="social" />
        </a>
        <a href="https://facebook.com/javier545" target={"blank"}>
          <FaFacebookF className="social" />
        </a>
        <a href="https://twitter.com/Jav545" target={"blank"}>
          <FaTwitter className="social" />
        </a>
        <a href="https://dribbble.com/Javier545dev" target={"blank"}>
          <TiSocialDribbble className="social" />
        </a>

        <a href="https://www.linkedin.com/in/javier545dev/" target={"blank"}>
          <TiSocialLinkedin className="social" />
        </a>

        <a href="https://github.com/javier545dev" target={"blank"}>
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
