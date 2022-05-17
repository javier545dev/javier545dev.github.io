import React from "react";
import "./contact.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  function copyText(text) {
    navigator.clipboard.writeText(text);
  }

  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://wa.link/scotsl"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+51 974 563 258</span>
          </h2>
        </a>

        <a
          href="https://gmail.com"
          className="contact instagram"
          target={"blank"}
          onClick={() => copyText("javierfuentes545@gmail.com")}
        >
          <AiOutlineMail className="icon" />
          <h2>
            Mail <span>javierfuentes545@gmail.com</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
