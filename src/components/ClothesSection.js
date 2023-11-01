import React from "react";
import "../blocks/ProfileCardsContainer.css";
import { ClothingCardsContext } from "../contexts/ClothingCardsContext";
import CardsList from "./CardsList";

function ClothesSection({ onClick, onCardSelect, onCardLike }) {
  const { clothingItems } = React.useContext(ClothingCardsContext);
  return (
    <div className="profile-container">
      <div className="profile-container__header">
        <p className="profile-container__title">Your Items</p>
        <button
          type="button"
          className="profile-container__button"
          onClick={onClick}
        >
          + Add New
        </button>
      </div>
      <CardsList
        onCardSelect={onCardSelect}
        cards={clothingItems}
        cardsListStyle={"cards__list-profile"}
        onCardLike={onCardLike}
      />
    </div>
  );
}

export default ClothesSection;
