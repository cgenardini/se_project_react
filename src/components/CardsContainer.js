import "../blocks/CardsContainer.css";
import "../blocks/Card.css";
import { defaultClothingItems } from "../utils/constants";
import Card from "./Card";

function CardsContainer({ temp, onCardSelect, clothingTemp }) {
  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === clothingTemp;
  });

  return (
    <section className="cards__container">
      <h3 className="cards__header">
        Today is {temp}°F / You may want to wear:
      </h3>
      <ul className="cards__list">
        {filteredCards.map((item) => {
          return (
            <Card item={item} onCardSelect={onCardSelect} key={item._id} />
          );
        })}
      </ul>
    </section>
  );
}

export default CardsContainer;
