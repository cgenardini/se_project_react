import WeatherCard from "./WeatherCard";
import "../blocks/Main.css";
import CardsContainer from "./CardsContainer";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function Main({ temp, weather, day, onCardSelect, clothingTemp, onCardLike }) {
  return (
    <main className="main">
      <WeatherCard weather={weather} day={day} />
      <CardsContainer
        temp={temp}
        onCardSelect={onCardSelect}
        clothingTemp={clothingTemp}
        onCardLike={onCardLike}
      />
    </main>
  );
}

export default Main;
