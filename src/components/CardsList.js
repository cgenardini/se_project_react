import "../blocks/CardsContainer.css";
import CardItem from "./CardItem";
import React from "react";

function CardsList({ onCardSelect, cards, cardsListStyle }) {
  return (
    <ul className={`cards__list ${cardsListStyle}`}>
      {cards.map((item) => {
        return (
          <CardItem item={item} onCardSelect={onCardSelect} key={item._id} />
        );
      })}
    </ul>
  );
}

export default CardsList;
