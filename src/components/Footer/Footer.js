import React from "react";
import "./footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div>Movie App</div>
      <div>
        ©{year}, with 💖 by{" "}
        <a href="https://github.com/baibhav0305"> BAIBHAV PANDA</a>
      </div>
    </div>
  );
};

export default Footer;
