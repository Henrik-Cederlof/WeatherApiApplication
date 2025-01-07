import "./style.scss";
import { getTemperatureByCity as getTemperatureByCity } from "./functions/getTemeratureBYCity";
import { getWeatherCondition } from "./functions/getWeatherCondition";
import { getCurrentTime } from "./functions/getCurrentTime";
import { getCountryByCity } from "./functions/getCountryByCity";
import { AllDomEl } from "./domElements";
import { createWeatherCard } from "./functions/createWeatherCard";

export const baseUrl: string =
  "https://api.weatherapi.com/v1/current.json?key=52f81cddc3fb48a08ff95758250701&q=";

AllDomEl.searchButton.addEventListener("click", async (event) => {
  event.preventDefault();
  if (AllDomEl.searchInput.value) {
    try {
      const cityName = AllDomEl.searchInput.value;
      const temperature = await getTemperatureByCity(cityName);
      const condition = await getWeatherCondition(cityName);
      const country = await getCountryByCity(cityName);

      const weatherCard = createWeatherCard(
        cityName,
        temperature,
        condition,
        country
      );
      AllDomEl.mainContainer.appendChild(weatherCard);

      AllDomEl.searchInput.value = "";
    } catch {
      throw new Error("failed to get temperature, condition or country");
    }
  }
});
