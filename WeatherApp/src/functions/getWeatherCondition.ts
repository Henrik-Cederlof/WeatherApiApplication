import { AllTypes } from '../types/types';

export const getWeatherCondition = async (city: string) => {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=52f81cddc3fb48a08ff95758250701&q=${city}&`);
  const data = await response.json() as AllTypes.Root;
  return data.current.condition.icon;
};
 