import React from "react";
import SocialIcons from "../socialIcons/socialIcons";
import RanvijaySachanImg from "../../assets/RanvijaySachan.jpg";
import "./Header.css";
import BgImg from "../../assets/bg.jpg";

const header = props => {
  return (
    <header
      className="main-header"
      style={{ background: "url(" + BgImg + ") center center repeat" }}
    >
      <div className="header-outer">
        <div className="header-wrapper">
          <img className="profile-pic" src= { RanvijaySachanImg } alt="Ranvijay Sachan" />
          <div className="header-data">
            <div className="name">
              Ranvijay Sachan<span className="blink">_</span>
            </div>
            <p className="role">Python/Django Web developer, Post Graduate(MCA)</p>
            <div className="general-data">
              <dl className="list">
                <dt>Total Experience: </dt>
                <dd>7 years</dd>
                <dt>Mobile No: </dt>
                <dd>
                  <a href="tel:+91 9987391275">+91 9987391275</a>
                </dd>
                <dt>Email Id: </dt>
                <dd>
                  <a href="mailto:sachan.ranvijay@gmail.com">
                    sachan.ranvijay@gmail.com
                  </a>
                </dd>
              </dl>
            </div>
            <div className="social-profile-data">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
