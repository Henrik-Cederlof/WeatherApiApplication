import { baseUrl } from "../main";
import { AllTypes } from "../types/types";

export const getCountryByCity = async (city: string) => {
  const response = await fetch(baseUrl + city + "&");
  const data = (await response.json()) as AllTypes.Root;
  const country: string = data.location.country;

  const countryArray: string[] = data.location.country.split(" ");
  console.log("countryArray=", countryArray);

  if (countryArray.length > 1) {
    const abbreviation: string = country
      .split(" ")
      .map((word) => word.charAt(0))
      .filter((char) => char === char.toUpperCase() && char.match(/[A-Z]/))
      .join("");

    return abbreviation;
  }
  return countryArray[0];
};
