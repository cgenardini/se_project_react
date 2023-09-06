import react, { useState, useEffect } from "react";

import "../blocks/App.css";

import logo from "../images/wtwr°.svg";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import ModalWithForm from "./ModalWithForm";
import AddGarmentForm from "./AddGarmentForm";
import {
  getWeatherData,
  getWeatherTemp,
  getCurrentCity,
  getClothingTemp,
  getDay,
} from "./WeatherApi";
import "../blocks/ModalWithForm.css";
import { currentDate, userInfo } from "../utils/constants";

function App() {
  const [activePopup, setActivePopup] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("");
  const [clothingTemp, setClothingTemp] = useState("");
  const [isDay, setIsDay] = useState(true);

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
      setActivePopup("");
    }
  };

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.keyCode === 27) {
        setActivePopup("");
      }
    };
    window.addEventListener("keydown", handleEscClose);
    return () => window.removeEventListener("keydown", handleEscClose);
  }, []);

  useEffect(() => {
    getWeatherData().then((data) => {
      const apiTemp = getWeatherTemp(data);
      const apiCity = getCurrentCity(data);
      const apiClothingTemp = getClothingTemp(apiTemp);
      const apiDay = getDay(data);

      setTemp(apiTemp);
      setCity(apiCity);
      setClothingTemp(apiClothingTemp);
      setIsDay(apiDay);
    });
  }, []);

  return (
    <div className="App" onClick={handleClickOutsideClose}>
      <Header
        logoSrc={logo}
        currentDate={currentDate}
        currentCity={city}
        avatar={userInfo.avatar}
        userName={userInfo.name}
        onClick={handleOpenCreate}
      />
      <Main
        temp={temp}
        day={isDay}
        weather="sunny"
        onCardSelect={handleCardPreview}
        clothingTemp={clothingTemp}
      />
      {activePopup === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleClosePopup} />
      )}

      {activePopup === "create" && (
        <ModalWithForm
          onClose={handleClosePopup}
          formTitle="New Garment"
          buttonText="Add Garment"
        >
          <AddGarmentForm />
        </ModalWithForm>
      )}

      <Footer />
    </div>
  );
}

export default App;
