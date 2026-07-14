import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { coordinates, apiKey } from "../../utils/constants.js";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { Footer } from "../Footer/Footer.jsx";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";
import { getItems, postNewCard, deleteItem } from "../../utils/api.js";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: "999", C: "999" },
    city: "",
    condition: "",
    isDay: false,
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleAddNewClick = (event) => {
    event.stopPropagation();
    setActiveModal("add-garment");
  };

  const onAddItem = (item) => {
    const newCardData = {
      name: item.name,
      imageUrl: item.imageUrl,
      weather: item.weatherType,
    };

    postNewCard(newCardData)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleDeleteCard = (id) => {
    deleteItem(id)
      .then((res) => {
        if (res) {
          setClothingItems((clothingItems) =>
            clothingItems.filter((item) => item._id !== id),
          );
          closeActiveModal();
        }
      })
      .catch(console.error);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  function closeOnEsc(event) {
    if (event.key === "Escape") {
      closeActiveModal();
    }
  }

  function closeOnOverlay(event) {
    if (event.target.classList.contains("modal")) {
      closeActiveModal();
    }
  }

  const openConfirmationModal = (card) => {
    setActiveModal("delete-btn");
    setSelectedCard(card);
  };

  useEffect(() => {
    if (!activeModal) return;
    document.addEventListener("keydown", closeOnEsc);
    document.addEventListener("click", closeOnOverlay);
    return () => {
      document.removeEventListener("keydown", closeOnEsc);
      document.removeEventListener("click", closeOnOverlay);
    };
  }, [activeModal]);

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);

    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  clothingItems={clothingItems}
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                  currentTemperatureUnit={currentTemperatureUnit}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  handleAddNewClick={handleAddNewClick}
                />
              }
            />
          </Routes>
        </div>
        <AddItemModal
          activeModal={activeModal}
          isOpen={activeModal === "add-garment"}
          onClose={closeActiveModal}
          onAddItem={onAddItem}
        />
        <ItemModal
          isOpen={activeModal === "preview"}
          card={selectedCard}
          onClose={closeActiveModal}
          onCardDelete={openConfirmationModal}
        />
        <ConfirmationModal
          openModal={setActiveModal}
          isOpen={activeModal === "delete-btn"}
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
          handleDeleteCard={handleDeleteCard}
        />
        <Footer />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}
export default App;
