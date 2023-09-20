import React from "react";

import "../blocks/WeatherCard.css";
import { weatherOptions } from "../utils/constants";
import { CurrentTempUnitContext } from "../context/CurrentTempUnitContext";

function WeatherCard({ weather, day }) {
  const { temp } = React.useContext(CurrentTempUnitContext);
  const weatherOption = weatherOptions.find((option) => {
    return option.day === day && option.type === weather;
  });

  const weatherUrl = weatherOption.url;

  return (
    <section className="weather-card">
      <h2 className="weather-card__temp">{temp}</h2>
      <img className="weather__image" src={weatherUrl} alt="weather card"></img>
    </section>
  );
}

export default WeatherCard;
