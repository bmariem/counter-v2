import React from "react";

//ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <h1 className="title">
        <FontAwesomeIcon icon="stopwatch" />
        React Counter V2
      </h1>
    </header>
  );
};

export default Header;
