import React from "react";
import SocialIcons from "../socialIcons/socialIcons";
import "./Contact.css";
import bgImg from "../../assets/bg.jpg";

const contact = () => {
  return (
    <div
      className="contact__outer"
      style={{ background: "url(" + bgImg + ") center center repeat" }}
    >
      <div className="contact__container">
        <p className="headings">
          Get in touch<span className="blink">_</span>
        </p>
        <div className="contact__detail">
          <dl className="contact__list">
            <dt>Phone:</dt>
            <dd>
              <a href="tel:+91 9987391275">+91 9987391275</a>
            </dd>
            <dt>Email:</dt>
            <dd>
              <a href="mailto:sachan.ranvijay@gmail.com">sachan.ranvijay@gmail.com</a>
            </dd>
          </dl>
        </div>
        <div className="contact__social_icons">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default contact;
