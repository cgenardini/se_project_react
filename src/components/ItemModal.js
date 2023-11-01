import React from "react";

import "../blocks/ItemModal.css";
import "../blocks/popup.css";
import { UserInfoContext } from "../contexts/UserInfoContext";

function ItemModal({ selectedCard, onClose, handleDelete }) {
  const { currentUser } = React.useContext(UserInfoContext);

  const isOwn =
    selectedCard.owner._id === currentUser._id ||
    selectedCard.owner === currentUser._id;

  const itemDeleteButtonClass = `popup-item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;

  return (
    <section className="popup">
      <div className="popup-item">
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="popup-item__image"
          id="container-image"
        />

        <button
          type="button"
          className="popup__close popup__close-item"
          id="image-close"
          onClick={onClose}
        ></button>
        <div className="popup-item__footer">
          <div>
            <p className="popup-item__title">{selectedCard.name}</p>
            <p className="popup-item__weather">
              Weather: {selectedCard.weather}
            </p>
          </div>
          <button
            type="button"
            className={itemDeleteButtonClass}
            onClick={handleDelete}
          >
            Delete item
          </button>
        </div>
      </div>
    </section>
  );
}

export default ItemModal;
