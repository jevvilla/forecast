import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { Prediction } from '../common/types';

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

export const useAsyncStorage = () => {
  const [data, setData] = useState<Prediction[]>();

  useEffect(() => {
    getPredictionsFromStorage();
  }, []);

  const savePredictionToStorage = async (prediction: Prediction) => {
    const existingPredictions = data;

    const predictionsArray = existingPredictions
      ? [prediction, ...existingPredictions]
      : [prediction];

    try {
      if (!isPredictionRepeated(existingPredictions, prediction)) {
        await AsyncStorage.setItem('@predictions', JSON.stringify(predictionsArray.slice(0, 5)));
        await getPredictionsFromStorage();
      }
    } catch (err) {
      console.log('Error saving data to AsyncStorage, ', err);
    }
  };

  const getPredictionsFromStorage = async () => {
    try {
      const predictions = await AsyncStorage.getItem('@predictions');
      if (predictions !== null) {
        setData(JSON.parse(predictions));
      }
    } catch (err) {
      console.log('Error retrieving data from AsyncStorage, ', err);
      return [];
    }
  };

  const deleteAll = async () => {
    await AsyncStorage.clear();
    setData([]);
  };

  return { data, savePredictionToStorage, deleteAll };
};
