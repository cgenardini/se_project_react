import { latitude, longitude, weatherApiKey } from "../utils/constants";

export function WeatherData() {
  const weatherApi =
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${weatherApiKey} 
    `).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });

  return weatherApi;
}

export function GetWeatherTemp(data) {
  const main = data.main;
  const temp = main.temp;
  return Math.ceil(temp);
}

export function GetCurrentCity(data) {
  const city = data.name;
  return city;
}

export function GetClothingTemp(temp) {
  if (temp >= 86) {
    return "hot";
  } else if (temp >= 66 && temp <= 85) {
    return "warm";
  } else if (temp <= 65) {
    return "cold";
  }
}

export function GetDay(data) {
  const sys = data.sys;
  const set = sys.sunset * 1000;
  const rise = sys.sunrise * 1000;

  const currentTime = new Date().toLocaleTimeString("default", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Los_Angeles",
  });

  const sunset = new Date(set).toLocaleTimeString("default", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Los_Angeles",
  });
  const sunrise = new Date(rise).toLocaleTimeString("default", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Los_Angeles",
  });

  if (currentTime >= sunrise && currentTime <= sunset) {
    return true;
  } else {
    return false;
  }
}
