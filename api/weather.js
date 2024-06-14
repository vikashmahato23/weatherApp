import axios from "axios";
import { apiKey } from "../constants";

const weatherApi = (params) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}`;
const locationsApi = (params) =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    return {};
  }
};

export const fetchWeatherForecastDetails = (params) => {
  let weatherUrl = weatherApi(params);
  return apiCall(weatherUrl);
};

export const fetchLocationsDetails = (params) => {
  let locationsUrl = locationsApi(params);
  return apiCall(locationsUrl);
};
