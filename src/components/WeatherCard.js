import "../blocks/WeatherCard.css";
import { weatherOptions } from "../utils/constants";

function WeatherCard({ temp, weather, day }) {
  const weatherOption = weatherOptions.find((option) => {
    return option.day === day && option.type === weather;
  });

  const weatherUrl = weatherOption.url;

  return (
    <section className="weather-card">
      <h2 className="weather-card__temp">{temp}°F</h2>
      <img className="weather__image" src={weatherUrl} alt="weather card"></img>
    </section>
  );
}

export default WeatherCard;
