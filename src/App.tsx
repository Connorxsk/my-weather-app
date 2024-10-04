import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import SearchBar from "./components/SearchBar";
import CityCard from "./components/CityCard";
import { useEffect, useState } from "react";
import { fetchWeatherData, fetchUserCity } from "./services/fetchWeatherData";
import type { CurrentWeather, WeatherForecast } from "./types";
import "./App.css";

const defaultCity: string = import.meta.env.VITE_DEFAULT_CITY;

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null
  );
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCurrentData = async () => {
      if (!searchValue) {
        setIsLoading(true);
        const userCity: string = await fetchUserCity();
        setSearchValue(userCity || defaultCity);
      } else {
        try {
          setIsLoading(true);
          const { currentWeather, weatherForecast } = await fetchWeatherData(
            searchValue
          );
          setCurrentWeather(currentWeather);
          setWeatherForecast(weatherForecast);
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchCurrentData();
  }, [searchValue]);

  return (
    <div className="background">
      <div className="container">
        <WeatherCard currentData={currentWeather} isLoading={isLoading} />
        {searchValue && (
          <div className="right-side">
            <Forecast forecastData={weatherForecast} />
            <SearchBar setSearchValue={setSearchValue} />
            <CityCard setSearchValue={setSearchValue} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
