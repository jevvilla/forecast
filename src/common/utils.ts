import AsyncStorage from '@react-native-community/async-storage';
import { Prediction } from '../common/types';

export const timeNormalization = (time: number) => {
  return time.toString().length === 1 ? `0${time}` : time;
};

export const getTimeFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  return `${timeNormalization(date.getHours())}:${timeNormalization(date.getMinutes())}`;
};

const isPredictionRepeated = (
  existingPredictions: Prediction[] | undefined,
  prediction: Prediction,
) => {
  if (existingPredictions) {
    const exists = existingPredictions.find((item) => item.name === prediction.name);
    return !!exists;
  }

  return false;
};

export const savePredictionToStorage = async (prediction: Prediction) => {
  const existingPredictions = await getPredictionsFromStorage();

  const predictionsArray = existingPredictions
    ? [prediction, ...existingPredictions]
    : [prediction];

  try {
    if (!isPredictionRepeated(existingPredictions, prediction)) {
      await AsyncStorage.setItem('@predictions', JSON.stringify(predictionsArray.slice(0, 5)));
    }
  } catch (err) {
    console.log('Error saving data to AsyncStorage, ', err);
  }
};

export const getPredictionsFromStorage = async (): Promise<Prediction[] | undefined> => {
  try {
    const predictions = await AsyncStorage.getItem('@predictions');
    if (predictions !== null) {
      return JSON.parse(predictions);
    }
  } catch (err) {
    console.log('Error retrieving data from AsyncStorage, ', err);
    return [];
  }
};
