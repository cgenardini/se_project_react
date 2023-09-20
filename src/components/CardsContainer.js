import React from "react";
import "../blocks/CardsContainer.css";
import "../blocks/CardItem.css";
import CardsList from "./CardsList";
import { CurrentTempUnitContext } from "../contexts/CurrentTempUnitContext";
import { ClothingCardsContext } from "../contexts/ClothingCardsContext";

function CardsContainer({ onCardSelect }) {
  const { temp } = React.useContext(CurrentTempUnitContext);
  const { filteredCards } = React.useContext(ClothingCardsContext);
  return (
    <section className="cards__container">
      <h3 className="cards__header">Today is {temp} / You may want to wear:</h3>
      <CardsList onCardSelect={onCardSelect} cards={filteredCards} />
    </section>
  );
}

export default CardsContainer;
