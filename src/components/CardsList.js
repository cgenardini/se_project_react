import "../blocks/CardsContainer.css";
import ItemCard from "./ItemCard";
import React from "react";

function CardsList({ onCardSelect, cards, cardsListStyle }) {
  const reversedCards = [...cards].reverse();
  console.log(cards);
  console.log(reversedCards);
  return (
    <ul className={`cards__list ${cardsListStyle}`}>
      {cards.map((item) => {
        return (
          <ItemCard item={item} onCardSelect={onCardSelect} key={item._id} />
        );
      })}
    </ul>
  );
}

export default CardsList;
