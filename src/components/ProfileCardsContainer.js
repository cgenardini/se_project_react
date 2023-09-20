import React from "react";
import "../blocks/ProfileCardsContainer.css";
import { ClothingCardsContext } from "../context/ClothingCardsContext";
import CardsList from "./CardsList";

function ProfileCardsContainer({ onClick, onCardSelect }) {
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
      />
    </div>
  );
}

export default ProfileCardsContainer;
