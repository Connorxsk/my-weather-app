import "./all-components.css";
import type { WeatherForecast } from "../types";

function Forecast({ forecastData }: { forecastData: WeatherForecast[] }) {
  return (
    <div className="forecast" data-testid="forecast">
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
