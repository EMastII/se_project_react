import "./WeatherCard.css";
import sunnyImage from "../../images/sunny-img.svg";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather-card">
      <div className="weather-card__temp">
        {weatherData.temp[currentTemperatureUnit]}&deg;{currentTemperatureUnit}
      </div>
      <img
        src={sunnyImage}
        alt="Sunny Weather"
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
