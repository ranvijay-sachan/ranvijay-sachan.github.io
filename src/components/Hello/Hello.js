import React from "react";
import "./Hello.css";
import Resume from "../../assets/docs/Ranvijay Sachan - Resume.pdf";
import Coverletter from "../../assets/docs/Ranvijay Sachan - Coverletter.pdf";

const hello = props => {
  return (
    <div className="hello__outer">
      <p className="headings">
        Hi<span className="blink">_</span>
      </p>
      <p className="hello__para">
        I am a Software Engineer, enthusiast in programming and learning new skills and
        technologies. Worked on developing applications from scratch and have the
        experience of building a product end to end.
        Having a proficient experience in building application in Python.
        Worked on PostgreSQL, MySQL & MongoDB.
        Building RESTful Web Services.
        Experience in working with Agile Methodology, Git, Jenkins.
      </p>
      <a href={Resume} className="hello__button">
        <i className="fas fa-download" /> Download Resume
      </a>
      <span> </span>
      <a href={Coverletter} className="hello__button">
        <i className="fas fa-download" /> Download Coverletter
      </a>
    </div>
  );
};

export default hello;
