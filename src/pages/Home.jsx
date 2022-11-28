import React from "react";
import "../App.css";
import { dataOffers } from "../data-content/slider-data";
import Cards from "../components/Cards/Cards";
import Promo from "../components/Promos/Promos";
import MainSection from "../components/MainSection/MainSection";

function Home() {
  return (
    <>
      <MainSection />
      <Cards />
      <Promo slides={dataOffers} />
    </>
  );
}

export default Home;
