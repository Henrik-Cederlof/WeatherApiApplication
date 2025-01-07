import { baseUrl } from "../main";
import { AllTypes } from "../types/types";

export const getCloudsByCity = async (city: string) => {
  const response = await fetch(baseUrl + city + "&");
  const data = (await response.json()) as AllTypes.Root;
  return data.current.cloud;
};
