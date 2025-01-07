import { createHTMLElement } from "./createHTMLElement";

export const createWeatherCard = (
  cityName: string,
  temperature: number,
  condition: string,
  country: string,
  time: string
) => {
  const weatherCard = createHTMLElement("div");
  weatherCard.className = "weather-card";

  const leftSide = createHTMLElement("div");
  leftSide.className = "left-section";
  const middleSide = createHTMLElement("div");
  middleSide.className = "middle-section";
  const rightSide = createHTMLElement("div");
  rightSide.className = "right-section";

  const cityElement = createHTMLElement("h2");
  cityElement.className = "city-name";
  cityElement.textContent =
    cityName.charAt(0).toUpperCase() + cityName.slice(1);

  const countryElement = createHTMLElement("h3");
  countryElement.className = "country-name";
  countryElement.textContent = country;

  const temperatureElement = createHTMLElement("div");
  temperatureElement.className = "temperature";
  temperatureElement.textContent = `${temperature}°C`;

  const timeElement = createHTMLElement("p");
  timeElement.className = "time";
  timeElement.textContent = time;

  const conditionElement = createHTMLElement("img");
  conditionElement.className = "condition-icon";
  conditionElement.src = condition;
  conditionElement.alt = "Weather condition";

  const removeButton = createHTMLElement("button");
  removeButton.className = "remove-button";
  removeButton.textContent = "X";
  removeButton.addEventListener("click", () => {
    weatherCard.remove();
  });

  leftSide.appendChild(cityElement);
  leftSide.appendChild(countryElement);
  leftSide.appendChild(conditionElement);

  middleSide.appendChild(temperatureElement);
  middleSide.appendChild(timeElement);

  rightSide.appendChild(removeButton);

  // Lägg till i kortet
  weatherCard.appendChild(leftSide);
  weatherCard.appendChild(middleSide);
  weatherCard.appendChild(rightSide);

  return weatherCard;
};
