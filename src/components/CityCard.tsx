import { useEffect, useState } from "react";
import { fetchWeatherData } from "../services/fetchWeatherData";
import type { WeatherData } from "../types";
import "./all-components.css";

const cities = ["New York", "Sydney", "Shanghai", "London"];

function CityCard({
  setSearchValue,
}: {
  setSearchValue: (value: string) => void;
}) {
  const [citiesWeather, setCitiesWeather] = useState<WeatherData[]>([]);

  useEffect(() => {
    const fetchCitiesWeather = async () => {
      try {
        const citiesData = await Promise.all(
          cities.map((city) => fetchWeatherData(city))
        );
        setCitiesWeather(citiesData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCitiesWeather();
  }, []);

  return (
    <div className="cities" data-testid="cityCard">
      {citiesWeather.map(({ currentWeather }) => {
        const { city, temp_range, icon, condition, bg_gradient } =
          currentWeather;
        return (
          <div
            key={city}
            className="city-card"
            onClick={() => {
              setSearchValue(city);
            }}
            style={{
              backgroundImage: bg_gradient,
            }}
          >
            <img
              src={`/city/${city + ".png"}`}
              alt={city}
              className="city-image"
            />
            <img src={icon} alt={condition} title={condition} />
            <div className="city">{city}</div>
            <div className="temp-range">{temp_range}°</div>
          </div>
        );
      })}
    </div>
  );
}

export default CityCard;
