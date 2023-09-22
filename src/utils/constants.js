import sunnyDay from "../images/weather/sunnyDay.svg";
import sunnyNight from "../images/weather/sunnyNight.svg";
import cloudyDay from "../images/weather/cloudyDay.svg";
import cloudyNight from "../images/weather/cloudyNight.svg";
import rainDay from "../images/weather/rainDay.svg";
import rainNight from "../images/weather/rainNight.svg";
import stormDay from "../images/weather/stormDay.svg";
import stormNight from "../images/weather/stormNight.svg";
import snowDay from "../images/weather/snowDay.svg";
import snowNight from "../images/weather/snowNight.svg";
import fogDay from "../images/weather/fogDay.svg";
import fogNight from "../images/weather/fogNight.svg";
import avatar from "../images/avatar.svg";

export const weatherOptions = [
  {
    url: cloudyDay,
    day: true,
    type: "cloudy",
  },
  {
    url: cloudyNight,
    day: false,
    type: "cloudy",
  },
  {
    url: fogDay,
    day: true,
    type: "fog",
  },
  {
    url: fogNight,
    day: false,
    type: "fog",
  },

  {
    url: rainDay,
    day: true,
    type: "rain",
  },
  {
    url: rainNight,
    day: false,
    type: "rain",
  },
  {
    url: snowDay,
    day: true,
    type: "snow",
  },
  {
    url: snowNight,
    day: false,
    type: "snow",
  },
  {
    url: stormDay,
    day: true,
    type: "storm",
  },
  {
    url: stormNight,
    day: false,
    type: "storm",
  },
  {
    url: sunnyDay,
    day: true,
    type: "sunny",
  },
  {
    url: sunnyNight,
    day: false,
    type: "sunny",
  },
];

export const longitude = "-118.243683";
export const latitude = "34.052235";
export const weatherApiKey = "50436cd6abd29d1082e985be4a9991b8";

export const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export const currentTime = new Date().toLocaleTimeString("default", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
  timeZone: "UTC",
});

export const userInfo = {
  name: "Cassandra Genardini",
  avatar: avatar,
};

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const baseUrl = "http://localhost:3001";
export const headers = { "Content-Type": "application/json" };
