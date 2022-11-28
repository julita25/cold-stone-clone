import React from "react";
import coldStone from "../../images/cold-stone.png";
import "../../App.css";
import "./main.css";

function MainSection() {
  return (
    <div className="main-container">
      <img src={coldStone} className="img1" alt="mainImage" />
      <div className="banner-contents">
        <h1> COLD STONE CREAMERY</h1>
        <p>The ultimate Ice cream Experience</p>
        <div className="banner__buttons">
          <button className="banner__button" type="button">ORDER NOW</button>
          <button className="banner__button" type="button">DISCOVER</button>
        </div>
      </div>
    </div>

  );
}

export default MainSection;
