import "./all-components.css";
import type { WeatherForecast } from "../types";

type ForecastProps = {
  forecastData: WeatherForecast[];
};

function Forecast({ forecastData }: ForecastProps) {
  return (
    <div className="forecast">
      {forecastData.map(({ weekday, date, icon, condition, temp_range }) => {
        return (
          <div key={date} className="forecast-day">
            <div className="weekday">{weekday}</div>
            <div className="date">{date}</div>
            <img src={icon} alt={condition} title={condition} />
            <div className="temp-range">{temp_range}°</div>
          </div>
        );
      })}
    </div>
  );
}

export default Forecast;
