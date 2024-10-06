import Forecast from "../../src/components/Forecast";
import type { WeatherForecast } from "../../src/types";

describe("<Forecast>", () => {
  it("displays forecast weather", () => {
    const mockForecastData: WeatherForecast[] = [
      {
        weekday: "Sunday",
        date: "06 October",
        icon: "/weather_icon/sunny.png",
        condition: "sunny",
        temp_range: "10~20°",
      },
      {
        weekday: "Monday",
        date: "07 October",
        icon: "/weather_icon/snow.png",
        condition: "snow",
        temp_range: "10~20°",
      },
      {
        weekday: "Tuesday",
        date: "08 October",
        icon: "/weather_icon/rain.png",
        condition: "rain",
        temp_range: "10~20°",
      },
      {
        weekday: "Wednesday",
        date: "09 October",
        icon: "/weather_icon/hail.png",
        condition: "hail",
        temp_range: "10~20°",
      },
    ];
    cy.mount(<Forecast forecastData={mockForecastData} />);

    cy.wait(1000);

    cy.get('[data-testid="forecast"] .forecast-day').should("have.length", 4);

    cy.contains("Monday").should("be.visible");
    cy.contains("Tuesday").should("be.visible");
    cy.contains("Wednesday").should("be.visible");
    cy.contains("Sunday").should("be.visible");

    cy.get('[data-testid="forecast"] .forecast-day').contains("~");
  });
});
