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

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

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
