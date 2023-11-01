import "../blocks/CardsContainer.css";
import ItemCard from "./ItemCard";
import React, { useEffect } from "react";
import { UserInfoContext } from "../contexts/UserInfoContext";

function CardsList({ onCardSelect, cards, cardsListStyle, onCardLike }) {
  return (
    <ul className={`cards__list ${cardsListStyle}`}>
      {cards.map((item) => {
        return (
          <ItemCard
            item={item}
            onCardSelect={onCardSelect}
            key={item._id}
            onCardLike={onCardLike}
          />
        );
      })}
    </ul>
  );
}

export default CardsList;
