import { AllTypes } from "../types/types";

export const getCountryByCity = async (city: string) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=52f81cddc3fb48a08ff95758250701&q=${city}&`
  );
  const data = (await response.json()) as AllTypes.Root;
  const country: string = data.location.country;

  const countryArray: string[] = data.location.country.split(" ");
  console.log("countryArray=", countryArray);

  if (countryArray.length > 1) {
    const abbrevation: string = country
      .split(" ")
      .map((word) => word.charAt(0))
      .filter((char) => char === char.toUpperCase() && char.match(/[A-Z]/))
      .join("");

    return abbrevation;
  }
  return countryArray[0];
};
