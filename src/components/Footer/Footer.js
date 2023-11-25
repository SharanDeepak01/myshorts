import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Myshorts made by -{" "}
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          Sharan deepak
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a
          href="https://www.linkedin.com/in/sharan-deepak-908b0a19b/"
          target="__blank"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
