export const weatherBgMap: Record<string, string> = {
  Sunny: "/background/sunny day_background.png",
  "Partly Cloudy": "/background/cloudy_day_background.png",
  Overcast: "/background/cloudy_day_background.png",
  Cloudy: "/background/cloudy_day_background.png",
  "Light drizzle": "/background/rain_background.png",
  "Patchy light drizzle": "/background/rain_background.png",
  "Light freezing rain": "/background/rain_background.png",
  "Light rain": "/background/rain_background.png",
  "Moderate rain": "/background/rain_background.png",
  "Heavy rain": "/background/rain_background.png",
  "Patchy rain nearby": "/background/rain_background.png",
  "Light rain shower": "/background/rain_background.png",
  "Light sleet showers": "/background/snow_background.png",
  "Light sleet": "/background/snow_background.png",
  "Light snow": "/background/snow_background.png",
  "Moderate snow": "/background/snow_background.png",
  "Heavy snow": "/background/snow_background.png",
  "Ice pellets": "/background/hail_background.png",
};

const blueGradient =
  "linear-gradient(to bottom, rgb(138, 177, 252) 30%, rgb(59, 129, 243))";
const purpleGradient =
  "linear-gradient(to bottom, rgb(131, 154, 239) 30%, rgb(95, 76, 219))";

export const weatherGradient: Record<string, string> = {
  Sunny: blueGradient,
  "Partly Cloudy": blueGradient,
  Overcast: purpleGradient,
  Cloudy: purpleGradient,
  "Light drizzle": purpleGradient,
  "Patchy light drizzle": purpleGradient,
  "Light freezing rain": purpleGradient,
  "Light rain": purpleGradient,
  "Moderate rain": purpleGradient,
  "Heavy rain": purpleGradient,
  "Patchy rain nearby": purpleGradient,
  "Light rain shower": purpleGradient,
  "Light sleet showers": purpleGradient,
  "Light sleet": purpleGradient,
  "Light snow": purpleGradient,
  "Moderate snow": purpleGradient,
  "Heavy snow": purpleGradient,
  "Ice pellets": purpleGradient,
};
