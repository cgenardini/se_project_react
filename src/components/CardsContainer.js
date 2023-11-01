import React from "react";
import "../blocks/CardsContainer.css";
import "../blocks/CardItem.css";
import CardsList from "./CardsList";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { ClothingCardsContext } from "../contexts/ClothingCardsContext";

function CardsContainer({ onCardSelect, onCardLike }) {
  const { temp } = React.useContext(CurrentTemperatureUnitContext);
  const { filteredCards } = React.useContext(ClothingCardsContext);
  return (
    <section className="cards__container">
      <h3 className="cards__header">Today is {temp} / You may want to wear:</h3>
      <CardsList
        onCardSelect={onCardSelect}
        cards={filteredCards}
        onCardLike={onCardLike}
      />
    </section>
  );
}

export default CardsContainer;
