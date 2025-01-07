import { baseUrl } from "../main";
import { AllTypes } from "../types/types";

export const getCurrentTime = async (city: string) => {
  const response = await fetch(baseUrl + city + "&");
  const data = (await response.json()) as AllTypes.Root;
  return data.location.localtime;
};
