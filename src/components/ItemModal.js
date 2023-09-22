import "../blocks/ItemModal.css";
import "../blocks/popup.css";

function ItemModal({ selectedCard, onClose, handleDelete }) {
  return (
    <section className="popup">
      <div className="popup-item">
        <img
          src={selectedCard.imageUrl}
          alt="#"
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
            className="popup-item__delete-button"
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
