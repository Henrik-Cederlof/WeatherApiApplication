import { getTemeratureBYCity } from './functions/getTemeratureBYCity';
import { getCloudsByCity } from './functions/getCloudsByCity';
import { getWeatherCondition } from './functions/getWeatherCondition';

import './style.scss';


const searchInput = document.getElementById('search-input') as HTMLInputElement;
const searchButton = document.getElementById('search-button') as HTMLButtonElement;
const mainContainer = document.getElementById('main') as HTMLDivElement;

const createWeatherCard = (cityName: string, temperature: number, condition: string) => {
  const card = document.createElement('div');
  card.className = 'weather-card';

  const leftSection = document.createElement('div');
  leftSection.className = 'left-section';

  const removeBtn = document.createElement('div');
  leftSection.className = 'left-section';
  removeBtn.className = 'remove-btn';

  const cityElement = document.createElement('h2');
  cityElement.className = 'city-name';
  cityElement.textContent = cityName;
  
  const temeratureElement = document.createElement('div');
  temeratureElement.className = 'temperature';
  temeratureElement.textContent = `${temperature}°C`;

  const conditionElement = document.createElement('img');
  conditionElement.className = 'condition-icon';
  conditionElement.src = condition;
  conditionElement.alt = 'Weather condition';

  leftSection.appendChild(cityElement);
  leftSection.appendChild(conditionElement);


  const removeButton = document.createElement('button');
  removeButton.className = 'remove-button';
  removeButton.textContent = 'X';
  removeButton.addEventListener('click', () => {
    card.remove();
  });

  removeButton.appendChild(removeBtn);
  // Lägg till i kortet
  card.appendChild(removeBtn);
  card.appendChild(leftSection);
  card.appendChild(temeratureElement);

  return card;
}



searchButton.addEventListener('click', async (event) => {
  event.preventDefault();
  if(searchInput.value) {
    try {
      const cityName = searchInput.value;
      const temperature = await getTemeratureBYCity(cityName);
      const condition = await getWeatherCondition(cityName);

      const weaterCard = createWeatherCard(cityName, temperature, condition);
      mainContainer.appendChild(weaterCard);

      searchInput.value = '';
    }
    catch(error) {
      console.error('City not found');
      
    }
  }
  
});
