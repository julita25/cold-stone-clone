import React from "react";
import CardItem from "./CardItem";
import strawberry from "../../images/strawberry.jpg";
import choco from "../../images/choco-dev.jpg";
import oreo from "../../images/oreo.jpg";
import cake from "../../images/cake.jpg";
import "./cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Take a look to the favourites of the house</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              sssrc={strawberry}
              text="Delicious strawberry flavour mixed with our
                authentic vanilla and cookie crumbles"
              label="#strawberryLicious"
            />
            <CardItem
              src={choco}
              text="If you are a chocolate fan you cannot miss this
                authentic combination where chocolate is the protagonist"
              label="#chocoObsesion"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={oreo}
              text="Combining vanilla and oreo never felt so good. This
                traditional flavor never dissapoints"
              label="#oreoLover"
            />

            <CardItem
              src={cake}
              text="For extra sugar lovers, we recommend the birthday cake flavour.
                Between the sprinkles and the cake batter this flavor will be your new favorite"
              label="#cakeParty"
            />
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Cards;
