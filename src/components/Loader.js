import React from "react";
import spinner from "../img/spinner.gif";

const Loader = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Loader;
