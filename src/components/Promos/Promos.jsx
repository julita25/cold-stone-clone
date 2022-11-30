import React, { useState } from "react";
import "./promos.css";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { instanceOf } from "prop-types";

function Promos({ slides }) {
  const [picture, setPicture] = useState(0);
  const { length } = slides;// constains the total number of slides (value 4)

  const nextSlide = () => {
    setPicture(picture === length - 1 ? 0 : picture + 1);
  };

  const prevSlide = () => {
    setPicture(picture === 0 ? length - 1 : picture - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="promo-box">
      <div className="wrapper">
        "Take a look to the lates promos!!"
        {slides.map((slide, index) => (
          <div className="slide" key={slide.title}>
            {index === picture && (
              <div className="slider">
                <img src={slide.image} alt={slide.alt} className="img-promo" />
                <div className="content">
                  <h1>{slide.title}</h1>
                  <h3>{slide.valid}</h3>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="slider-btn">
          <div className="arrow-btn"><IoMdArrowBack onClick={prevSlide} size="1.5 rem" /></div>
          <div className="arrow-btn"><IoArrowForward onClick={nextSlide} size="1.5 rem" /></div>
        </div>
      </div>
    </div>
  );
}

Promos.propTypes = {
  slides: instanceOf(Array).isRequired
};

export default Promos;
