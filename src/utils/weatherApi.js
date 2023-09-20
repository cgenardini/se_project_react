import {
  latitude,
  longitude,
  weatherApiKey,
  processServerResponse,
} from "./constants";

export function getWeatherData() {
  const weatherApi =
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${weatherApiKey} 
    `).then(processServerResponse);

  return weatherApi;
}

export function getWeatherTempF(data) {
  const main = data.main;
  const temp = main.temp;
  return Math.ceil(temp);
}

export function getWeatherTempC(data) {
  const TempF = getWeatherTempF(data);
  return Math.ceil(TempF * (5 / 9));
}

export function getCurrentCity(data) {
  const city = data.name;
  return city;
}

export function getClothingTemp(temp) {
  if (temp >= 86) {
    return "hot";
  } else if (temp >= 66 && temp <= 85) {
    return "warm";
  } else if (temp <= 65) {
    return "cold";
  }
}

export function getDay(data) {
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
