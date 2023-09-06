import WeatherCard from "./WeatherCard";
import "../blocks/Main.css";
import CardsContainer from "./CardsContainer";

function Main({ temp, weather, day, onCardSelect, clothingTemp }) {
  return (
    <main className="main">
      <WeatherCard temp={temp} weather={weather} day={day} />
      <CardsContainer
        temp={temp}
        onCardSelect={onCardSelect}
        clothingTemp={clothingTemp}
      />
    </main>
  );
}

export default Main;
