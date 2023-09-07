import "../blocks/CardItem.css";

function CardItem({ item, onCardSelect }) {
  return (
    <li className="card" id={item._id}>
      <div className="card__header">
        <h2 className="card__description">{item.name}</h2>
        <button type="button" className="card__button-like"></button>
      </div>
      <img
        className="card__image"
        src={item.link}
        onClick={() => {
          onCardSelect(item);
        }}
      />
    </li>
  );
}

export default CardItem;
