import { WEATHER_API_SECRET } from '../common/constants';

export const getPredictions = async () => {
  try {
    const request = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=medellin&units=metric&appid=${WEATHER_API_SECRET}`,
    );
    return await request.json();
  } catch (error) {
    return error;
  }
};
