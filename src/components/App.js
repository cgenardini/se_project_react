import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import "../blocks/App.css";

import logo from "../images/wtwr°.svg";

import Header from "./Header";
import Main from "./Main";
import Profile from "./Profile";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import ProtectedRoute from "./ProtectedRoute";

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
import { currentDate } from "../utils/constants";

import {
  getItems,
  addItem,
  deleteItem,
  likeItem,
  unlikeItem,
} from "../utils/cardApi";

import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { ClothingCardsContext } from "../contexts/ClothingCardsContext";
import { CurrentModal } from "../contexts/CurrentModal";

import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { UserInfoContext } from "../contexts/UserInfoContext";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { checkToken, editUser } from "../utils/auth";
import EditProfileModal from "./EditProfileModal";

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
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const history = useHistory();

  let buttonText = isLoading ? "Saving..." : "Add Garment";
  let logInButtonText = "Log In";
  let registerButtonText = "Register";
  let editButtonText = "Save";

  const filteredCards = clothingItems.filter((item) => {
    return item.weather === clothingTemp;
  });

  const ownCards = clothingItems.filter((item) => {
    return item.owner === currentUser?._id;
  });

  const handleToggleSwitchChange = () => {
    if (currentTempUnit === "F") {
      setCurrentTempUnit("C");
    } else {
      setCurrentTempUnit("F");
    }
  };

  const handleLogIn = (e) => {
    handleCheckToken();
    handleClosePopup();
    history.push("/profile");
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    history.push("/");
  };

  const handleCheckToken = () => {
    if (localStorage.getItem("token")) {
      const jwt = localStorage.getItem("token");

      checkToken(jwt)
        .then((data) => {
          setCurrentUser(data.data);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleLikeClick = ({ id, isLiked, user }) => {
    const token = localStorage.getItem("token");

    isLiked
      ? unlikeItem(id)
          .then((updatedCard) => {
            setClothingItems((clothingItems) =>
              clothingItems.map((c) => (c._id === id ? updatedCard.data : c))
            );
          })
          .catch((err) => console.log(err))
      : likeItem(id)
          .then((updatedCard) => {
            setClothingItems((clothingItems) =>
              clothingItems.map((c) => (c._id === id ? updatedCard.data : c))
            );
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleCheckToken();
  }, []);

  const handleOpenCreate = () => {
    setActivePopup("create");
  };

  const handleOpenSignUp = () => {
    setActivePopup("register");
  };

  const handleOpenLogIn = () => {
    setActivePopup("login");
  };

  const handleOpenEdit = () => {
    setActivePopup("edit-profile");
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
        setClothingItems((clothingItems) => [item.data, ...clothingItems]);
        handleClosePopup();
        return item;
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
      .then((data) => {
        const newData = data.data;
        const clothes = newData.reverse();

        setClothingItems(clothes);

        return clothes;
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
      <CurrentModal.Provider value={{ activePopup, setActivePopup }}>
        <UserInfoContext.Provider
          value={{ currentUser, isLoggedIn, setCurrentUser }}
        >
          <ClothingCardsContext.Provider
            value={{ filteredCards, clothingItems, ownCards }}
          >
            <CurrentTemperatureUnitContext.Provider
              value={{ currentTemperatureUnit, handleToggleSwitchChange, temp }}
            >
              <Header
                logoSrc={logo}
                currentDate={currentDate}
                currentCity={city}
                onClickAdd={handleOpenCreate}
                onClickSignUp={handleOpenSignUp}
                onClickLogIn={handleOpenLogIn}
              />
              <Switch>
                <ProtectedRoute path="/profile">
                  <Profile
                    onClick={handleOpenCreate}
                    onCardSelect={handleCardPreview}
                    handleSignOut={handleSignOut}
                    handleOpenEdit={handleOpenEdit}
                    onCardLike={handleLikeClick}
                  />
                </ProtectedRoute>
                <Route path="/">
                  <Main
                    temp={temp}
                    day={isDay}
                    weather="sunny"
                    onCardSelect={handleCardPreview}
                    clothingTemp={clothingTemp}
                    onCardLike={handleLikeClick}
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

              {activePopup === "login" && (
                <LoginModal
                  onClose={handleClosePopup}
                  buttonText={logInButtonText}
                  handleLogIn={handleLogIn}
                />
              )}

              {activePopup === "register" && (
                <RegisterModal
                  onClose={handleClosePopup}
                  buttonText={registerButtonText}
                />
              )}
              {activePopup === "edit-profile" && (
                <EditProfileModal
                  onClose={handleClosePopup}
                  buttonText={editButtonText}
                />
              )}

              <Footer />
            </CurrentTemperatureUnitContext.Provider>
          </ClothingCardsContext.Provider>
        </UserInfoContext.Provider>
      </CurrentModal.Provider>
    </div>
  );
}

export default App;
