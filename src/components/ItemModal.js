import "../blocks/ItemModal.css";
import "../blocks/popup.css";

function ItemModal({ selectedCard, onClose }) {
  return (
    <section className="popup">
      <div className="popup-item">
        <img
          src={selectedCard.link}
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
          <h3 className="popup-item__title">{selectedCard.name}</h3>
          <h4 className="popup-item__weather">
            Weather: {selectedCard.weather}
          </h4>
        </div>
      </div>
    </section>
  );
}

export default ItemModal;
