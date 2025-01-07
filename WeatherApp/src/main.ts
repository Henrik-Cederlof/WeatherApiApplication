import { getTemeratureBYCity } from './functions/getTemeratureBYCity';
import { getWeatherCondition } from './functions/getWeatherCondition';
import { getCurrentTime } from './functions/getCurrentTime';

import "./style.scss";
import { getCountryByCity } from "./functions/getCountryByCity";

const searchInput = document.getElementById("search-input") as HTMLInputElement;
const searchButton = document.getElementById(
  "search-button"
) as HTMLButtonElement;
const mainContainer = document.getElementById("main") as HTMLDivElement;

const createWeatherCard = (
  cityName: string,
  temperature: number,
  condition: string,
  country: string
) => {
  const weatherCard = document.createElement("div");
  weatherCard.className = "weather-card";

  const leftSide = document.createElement("div");
  leftSide.className = "left-section";
  const middleSide = document.createElement("div");
  middleSide.className = "middle-section";
  const rightSide = document.createElement("div");
  rightSide.className = "right-section";

  const cityElement = document.createElement("h2");
  cityElement.className = "city-name";
  cityElement.textContent =
    cityName.charAt(0).toUpperCase() + cityName.slice(1);

  const countryElement = document.createElement("h3");
  countryElement.className = "country-name";
  countryElement.textContent = country;

  const temeratureElement = document.createElement("div");
  temeratureElement.className = "temperature";
  temeratureElement.textContent = `${temperature}°C`;

  const conditionElement = document.createElement("img");
  conditionElement.className = "condition-icon";
  conditionElement.src = condition;
  conditionElement.alt = "Weather condition";

  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.textContent = "X";
  removeButton.addEventListener("click", () => {
    weatherCard.remove();
  });

  leftSide.appendChild(cityElement);
  leftSide.appendChild(countryElement);
  leftSide.appendChild(conditionElement);

  middleSide.appendChild(temeratureElement);
  rightSide.appendChild(removeButton);


  // Lägg till i kortet
  weatherCard.appendChild(leftSide);
  weatherCard.appendChild(middleSide);
  weatherCard.appendChild(rightSide);
  
  return weatherCard;
};

searchButton.addEventListener("click", async (event) => {
  event.preventDefault();
  if (searchInput.value) {
    try {
      const cityName = searchInput.value;
      const temperature = await getTemeratureBYCity(cityName);
      const condition = await getWeatherCondition(cityName);
      const country = await getCountryByCity(cityName);

      const weaterCard = createWeatherCard(
        cityName,
        temperature,
        condition,
        country
      );
      mainContainer.appendChild(weaterCard);

      searchInput.value = "";
    } catch (error) {
      console.error("City not found");
    }
  }
});
