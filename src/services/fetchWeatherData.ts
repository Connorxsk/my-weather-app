import axios from "axios";
import type {
  CurrentWeather,
  ForecastDay,
  WeatherApiResponse,
  WeatherForecast,
  CityData,
} from "../types";
import { weatherBgMap, weatherGradient } from "../constants/weatherMaps";

const apiKey: string = import.meta.env.VITE_API_KEY;
const geocodeApiKey: string = import.meta.env.VITE_GEOCODING_KEY;
const defaultCity: string = import.meta.env.VITE_DEFAULT_CITY;

export async function fetchWeatherData(city: string): Promise<{
  currentWeather: CurrentWeather;
  weatherForecast: WeatherForecast[];
}> {
  const res = await axios.get(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=yes&alerts=no`
  );
  const data: WeatherApiResponse = res.data;

  const location = data.location;
  const current = data.current;
  const forecast = data.forecast.forecastday.slice(1);

  const date = new Date();

  function dayFormat(date: Date) {
    const day = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(
      date
    );
    return day;
  }

  function monthFormat(date: Date) {
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
    );
    return month;
  }

  function weekdayFormat(date: Date) {
    const weekday = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(date);
    return weekday;
  }

  const hour_minute = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  const currentWeather: CurrentWeather = {
    date: `${dayFormat(date)} ${monthFormat(date)}, ${weekdayFormat(
      date
    )} ${hour_minute}`,
    city: location.name.replace(" ", ""),
    temperature: current.temp_c,
    temp_range: `${data.forecast.forecastday[0].day.mintemp_c}~${data.forecast.forecastday[0].day.maxtemp_c}`,
    icon: current.condition.icon,
    condition: current.condition.text,
    humidity: current.humidity,
    wind_speed: current.wind_kph,
    pm25: current.air_quality.pm2_5.toFixed(1),
    temp_feels_like: current.feelslike_c,
    bg_gradient:
      weatherGradient[current.condition.text] ||
      "linear-gradient(to bottom, rgb(138, 177, 252) 30%, rgb(59, 129, 243))",
    bg_image:
      weatherBgMap[current.condition.text] ||
      "/background/sunny day_background.png",
  };

  const weatherForecast: WeatherForecast[] = forecast.map(
    (day: ForecastDay) => {
      const date = new Date(day.date);
      return {
        weekday: weekdayFormat(date),
        date: `${dayFormat(date)} ${monthFormat(date)}`,
        icon: day.day.condition.icon,
        condition: day.day.condition.text,
        temp_range: `${day.day.mintemp_c}~${day.day.maxtemp_c}`,
      };
    }
  );

  return { currentWeather, weatherForecast };
}

export async function fetchUserCity(): Promise<string> {
  if (!navigator.geolocation) {
    return defaultCity;
  }

  return new Promise<string>((resolve) => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const res = await axios.get(
          `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=${geocodeApiKey}`
        );
        const geoData: CityData = res.data;
        const cityName =
          geoData.address.city ||
          geoData.address.city_district ||
          geoData.address.country;
        resolve(cityName);
      } catch (error) {
        console.error("Error fetching city from coords:", error);
        resolve(defaultCity);
      }
    });
  });
}
