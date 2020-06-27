import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const key = "bf4ee8ebb86c7c5cf944f033cfc5c342";
export const fetchWeatherAPI = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: key,
    },
  });
  return data;
};
