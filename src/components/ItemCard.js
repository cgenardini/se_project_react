import "../blocks/CardItem.css";
import React from "react";
import { useContext } from "react";
import { UserInfoContext } from "../contexts/UserInfoContext";

function ItemCard({ item, onCardSelect, onCardLike }) {
  const { currentUser, isLoggedIn } = React.useContext(UserInfoContext);

  const isLiked = item.likes ? item.likes.includes(currentUser._id) : false;

  const likeButtonClass = `card__button-like ${
    isLiked ? "card__button-like_active" : ""
  } `;

  const cardNameDescriptionClass = isLoggedIn
    ? "card__description_logged-in"
    : "card__description_logged-out";

  const handleLikeClick = () => {
    onCardLike({ id: item._id, isLiked });
  };

  const cardHeaderClass = isLoggedIn
    ? "card__header_logged-in"
    : "card__header_logged-out";

  return (
    <li className="card" id={item._id}>
      <div className={cardHeaderClass}>
        <h2 className={cardNameDescriptionClass}>{item.name}</h2>
        {isLoggedIn && (
          <button
            type="button"
            className={likeButtonClass}
            onClick={handleLikeClick}
          ></button>
        )}
      </div>
      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={() => {
          onCardSelect(item);
        }}
      />
    </li>
  );
}

export default ItemCard;
