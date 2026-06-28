import "./WeatherCard.css";
import sunnyImage from "../../images/sunny-img.svg";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg;</p>
      <img src={sunnyImage} alt="" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
