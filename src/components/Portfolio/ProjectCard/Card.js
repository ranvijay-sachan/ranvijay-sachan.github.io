import React from "react";
import "./Card.css";

const card = props => {
  return (
    <div
      className="product-card my-2 p-relative bg-white shadow-1 blue-hover"
      style={{ width: "360px", overflow: "hidden", borderRadius: "1px" }}
    >
      <div className="px-2 py-2">
        <h1
          className="font-weight-normal text-black card-heading mt-0 mb-1 pd"
          style={{ lineHeight: 1.25 }}
        >
          {props.title}
        </h1>
        <p className="mb-1 line-height pd">{props.description}</p>
      </div>
      <a
        href={props.link}
        className="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link"
      >
        View Project
      </a>
    </div>
  );
};

export default card;
