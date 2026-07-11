import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherData,
  onCardClick,
  clothingItems,
  currentTemperatureUnit,
  items,
}) {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="card__text">
          Today is {weatherData.temp[currentTemperatureUnit]}&deg;
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="card__block">
          {" "}
          {clothingItems
            .filter((items) => {
              return items.weather === weatherData.type;
            })
            .map((items) => {
              return (
                <ItemCard
                  key={items._id}
                  items={items}
                  onCardClick={onCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
