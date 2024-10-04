export interface WeatherApiResponse {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    humidity: number;
    feelslike_c: number;
    air_quality: {
      pm2_5: number;
    };
  };
  forecast: {
    forecastday: ForecastDay[];
  };
}

export interface ForecastDay {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    mintemp_c: number;
    maxtemp_c: number;
  };
}

export interface CurrentWeather {
  date: string;
  city: string;
  temperature: number;
  temp_range: string;
  icon: string;
  condition: string;
  humidity: number;
  wind_speed: number;
  pm25: string;
  temp_feels_like: number;
  bg_gradient: string;
  bg_image: string;
}

export interface WeatherForecast {
  weekday: string;
  date: string;
  icon: string;
  condition: string;
  temp_range: string;
}

export interface WeatherData {
  currentWeather: CurrentWeather;
  weatherForecast: WeatherForecast[];
}

export interface CityData {
  address: {
    city: string;
    city_district: string;
    country: string;
    state: string;
    postcode: string;
    country_code: string;
  };
}
