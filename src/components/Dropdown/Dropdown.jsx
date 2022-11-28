import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../../data-content/MenuItems";
import "./dropdown.css";

function Dropdown() {
  const [click, setClick] = useState(false);

  return (
    <div
      role="button"
      tabIndex="0"
      onKeyDown={() => setClick(!click)}
      onClick={() => setClick(!click)}
      className={click ? "dropdown-menu-clicked" : "dropdown-menu"}
    >
      {MenuItems.map((item) => (
        <div key={item.cName}>
          <Link
            className={item.cName}
            to={item.path}
            onClick={() => setClick(false)}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
