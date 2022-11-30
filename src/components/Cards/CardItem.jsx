import { string } from "prop-types";
import React from "react";

function CardItem({ src, label, text }) {
  return (
    <li className="cards__item">
      <div className="cards__item__link">
        <figure className="cards__item__pic-wrap" data-category={label}>
          <img
            src={src}
            alt={label}
            className="cards__item__img"
          />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__txt">{text}</h5>
        </div>
      </div>
    </li>
  );
}

CardItem.propTypes = {
  src: string.isRequired,
  label: string.isRequired,
  text: string.isRequired
};

export default CardItem;
