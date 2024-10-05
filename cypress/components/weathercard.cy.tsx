import WeatherCard from "../../src/components/WeatherCard";

describe("<WeatherCard />", () => {
  it("displays the weather card", () => {
    cy.viewport(900, 500);

    const mockCurrentWeather = {
      date: "05 October, Saturday 20:03",
      city: "Melbourne",
      temperature: 13,
      temp_range: "10.2~17.1",
      icon: "/weather_icon/sunny.png",
      condition: "sunny",
      humidity: 82,
      wind_speed: 11.2,
      pm25: "5.2",
      temp_feels_like: 12.1,
      bg_gradient:
        "linear-gradient(to bottom, rgb(138, 177, 252) 30%, rgb(59, 129, 243))",
      bg_image: "/background/sunny day_background.png",
    };

    cy.mount(
      <WeatherCard currentData={mockCurrentWeather} isLoading={false} />
    );

    cy.wait(1000);

    cy.get('[data-testid="weatherCard"]').contains(
      "05 October, Saturday 20:03"
    );
    cy.get('[data-testid="weatherCard"]').contains("Melbourne");
    cy.get('[data-testid="weatherCard"]').contains("13°");
    cy.get('[data-testid="weatherCard"]').contains("10.2~17.1");
    cy.get('[data-testid="weatherCard"] .weather-icon').should(
      "have.attr",
      "alt",
      "sunny"
    );
    cy.get('[data-testid="weatherCard"]').contains("82%");
    cy.get('[data-testid="weatherCard"]').contains("11.2km/h");
    cy.get('[data-testid="weatherCard"]').contains("5.2μg");
    cy.get('[data-testid="weatherCard"]').contains("12.1°");
  });
});
