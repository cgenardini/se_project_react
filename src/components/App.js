import React, { useState, useEffect } from "react";

import "../blocks/App.css";

import logo from "../images/wtwr°.svg";

import Header from "./Header";
import Main from "./Main";
import Profile from "./Profile";
import Footer from "./Footer";
import ItemModal from "./ItemModal";

import AddItemModal from "./AddItemModal";
import {
  getWeatherData,
  getWeatherTempF,
  getCurrentCity,
  getClothingTemp,
  getDay,
  getWeatherTempC,
} from "../utils/weatherApi.js";
import "../blocks/ModalWithForm.css";
import { currentDate, userInfo } from "../utils/constants";

import { getItems, addItem, deleteItem } from "../utils/cardApi";

import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { ClothingCardsContext } from "../contexts/ClothingCardsContext";

import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { UserInfoContext } from "../contexts/UserInfoContext";

function App() {
  const [clothingItems, setClothingItems] = useState([]);

  const [weatherApiData, setWeatherApiData] = useState({});
  const [activePopup, setActivePopup] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("");
  const [clothingTemp, setClothingTemp] = useState("");
  const [isDay, setIsDay] = useState(true);
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [isLoading, setIsLoading] = React.useState(false);

  let buttonText = isLoading ? "Saving..." : "Add Garment";

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === clothingTemp;
  });

  const handleToggleSwitchChange = () => {
    if (currentTempUnit === "F") {
      setCurrentTempUnit("C");
    } else {
      setCurrentTempUnit("F");
    }
  };

  const handleOpenCreate = () => {
    setActivePopup("create");
  };

  const handleCardPreview = (card) => {
    setActivePopup("preview");
    setSelectedCard(card);
  };

  const handleClosePopup = () => {
    setActivePopup("");
  };

  const handleClickOutsideClose = (evt) => {
    if (evt.target.classList.contains("popup")) {
      handleClosePopup();
    }
  };

  const handleDelete = () => {
    const filCar = clothingItems.filter((item) => {
      return item != selectedCard;
    });

    deleteItem(selectedCard._id)
      .then(() => {
        setClothingItems(filCar);
        handleClosePopup();
      })
      .catch(console.error);
  };

  const handleAddItem = ({ name, imageUrl, selectedOption }) => {
    const newItem = {
      name: name,
      weather: selectedOption,
      imageUrl: imageUrl,
    };

    setIsLoading(true);

    addItem(newItem)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        handleClosePopup();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleClosePopup();
      }
    };
    window.addEventListener("keydown", handleEscClose);
    return () => window.removeEventListener("keydown", handleEscClose);
  }, []);

  useEffect(() => {
    getItems()
      .then((res) => {
        res.reverse();
        setClothingItems(res);

        return res;
      })
      .catch(console.error);
  }, [setClothingItems]);

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherApiData(data);
        const apiTemp = getWeatherTempF(data);
        const apiTempF = `${getWeatherTempF(data)} °F`;
        const apiTempC = `${getWeatherTempC(data)} °C`;
        const apiCity = getCurrentCity(data);
        const apiClothingTemp = getClothingTemp(apiTemp);

        const apiDay = getDay(data);

        setCity(apiCity);
        setClothingTemp(apiClothingTemp);
        setIsDay(apiDay);
        if (currentTempUnit === "F") {
          setTemp(apiTempF);
        } else {
          setTemp(apiTempC);
        }
      })
      .catch(console.error);
  }, [currentTempUnit]);
  const currentTemperatureUnit = currentTempUnit;
  return (
    <div className="App" onClick={handleClickOutsideClose}>
      <UserInfoContext.Provider value={{ userInfo }}>
        <ClothingCardsContext.Provider value={{ filteredCards, clothingItems }}>
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange, temp }}
          >
            <Header
              logoSrc={logo}
              currentDate={currentDate}
              currentCity={city}
              onClick={handleOpenCreate}
            />
            <Switch>
              <Route path="/profile">
                <Profile
                  onClick={handleOpenCreate}
                  onCardSelect={handleCardPreview}
                />
              </Route>
              <Route path="/">
                <Main
                  temp={temp}
                  day={isDay}
                  weather="sunny"
                  onCardSelect={handleCardPreview}
                  clothingTemp={clothingTemp}
                />
              </Route>
            </Switch>
            {activePopup === "preview" && (
              <ItemModal
                selectedCard={selectedCard}
                onClose={handleClosePopup}
                handleDelete={handleDelete}
              />
            )}

            {activePopup === "create" && (
              <AddItemModal
                isOpen={activePopup === "create"}
                onAddItem={handleAddItem}
                onClose={handleClosePopup}
                buttonText={buttonText}
              />
            )}

            <Footer />
          </CurrentTemperatureUnitContext.Provider>
        </ClothingCardsContext.Provider>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
