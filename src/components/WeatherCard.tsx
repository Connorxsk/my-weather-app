import type { CurrentWeather } from "../types";
import "./all-components.css";
import Spinner from "./Spinner";

type WeatherCardProps = {
  currentData: CurrentWeather | null;
  isLoading: boolean;
};

function WeatherCard({ currentData, isLoading }: WeatherCardProps) {
  if (!currentData) {
    return <Spinner />;
  }

  const {
    date,
    city,
    temperature,
    temp_range,
    icon,
    condition,
    humidity,
    wind_speed,
    pm25,
    temp_feels_like,
    bg_gradient,
    bg_image,
  } = currentData;

  return (
    <div
      className="weather-card"
      data-testid="weatherCard"
      style={{ backgroundImage: bg_gradient }}
    >
      <img src={bg_image} alt={condition} className="bg-image" />
      {isLoading ? (
        <Spinner data-testid="spinner" />
      ) : (
        <>
          <div className="date">{date}</div>
          <div className="city">{city}</div>
          <div className="temperature">{temperature}°</div>
          <div className="temp-range">{temp_range}°</div>
          <img
            src={icon}
            alt={condition}
            title={condition}
            className="weather-icon"
          />
          <div className="details">
            <div className="details-icon">
              <img
                src="/meta_icon/humidity.svg"
                alt="humidity"
                title="humidity"
              />
              <img
                src="/meta_icon/wind_speed.svg"
                alt="wind-speed"
                title="wind-speed"
              />
              <img src="/meta_icon/PM2.5.svg" alt="PM2.5" title="PM2.5" />
              <img
                src="/meta_icon/somatosensory_temperature.svg"
                alt="temp feels like"
                title="temp feels like"
              />
            </div>
            <div className="details-data">
              <div>{humidity}%</div>
              <div>{wind_speed}km/h</div>
              <div>{pm25}μg</div>
              <div>{temp_feels_like}°</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherCard;
