import React from 'react';
import { View, TextInput, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import { HomeScreenParamList, Prediction } from '../../common/types';
import { IconButton, Card } from '../../components';
import { WEATHER_API_SECRET } from '../../common/constants';
import { useAsyncStorage } from '../../common/hooks';
import * as routes from '../../navigation/routes';

import styles from './styles';

type Props = {
  navigation: StackNavigationProp<HomeScreenParamList>;
};

export const Home: React.FC<Props> = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = React.useState<string>();
  const [prediction, setPrediction] = React.useState<Prediction | undefined>();
  const [fetching, setFetching] = React.useState<boolean>();
  const [error, setError] = React.useState();
  const {
    data,
    savePredictionToStorage,
    deleteAll,
    removePredictionFromStorage,
  } = useAsyncStorage();

  const handleTextInput = (term: string) => setSearchTerm(term);

  const handleSearchPress = async () => {
    if (searchTerm) {
      const response = await getPredictions(searchTerm);
      setPrediction(response);
    }
  };

  const getPredictions = async (city: string | undefined) => {
    setFetching(true);
    try {
      const request = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_SECRET}`,
      );
      return await request.json();
    } catch (err) {
      setError(err);
    } finally {
      setFetching(false);
    }
  };

  const handleOnCardPress = () => {
    if (prediction) {
      savePredictionToStorage(prediction);
      setPrediction(undefined);
      setSearchTerm('');
      navigation.navigate(routes.DETAILS, { prediction });
    }
  };

  const renderContent = () => {
    if (fetching) {
      return <ActivityIndicator size="small" color="rgb(63,138,247)" />;
    }

    if (error) {
      return <Text>Error trying to make the request</Text>;
    }

    if (prediction?.cod === 200) {
      return (
        <>
          <Card
            title={prediction.name}
            subtitle={`${Math.round(prediction.main.temp_max)}º / ${Math.round(
              prediction.main.temp_min,
            )}º`}
            onCardPress={handleOnCardPress}
          />
        </>
      );
    } else {
      return <Text>{prediction?.message}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchText} onChangeText={handleTextInput} value={searchTerm} />
        <IconButton name="search" color="rgb(63,138,247)" size={30} onPress={handleSearchPress} />
      </View>
      <View>{renderContent()}</View>
      <View>
        {data?.map((item) => (
          <Card
            key={item.name}
            title={item.name}
            subtitle={`${Math.round(item.main.temp_max)}º / ${Math.round(item.main.temp_min)}º`}
            onCardPress={() => navigation.navigate(routes.DETAILS, { prediction: item })}
            onCardDelete={() => removePredictionFromStorage(item)}
            removable
          />
        ))}
      </View>
      {data && (
        <TouchableOpacity style={styles.deleteAllTouchable} onPress={() => deleteAll()}>
          <Text style={styles.deleteTitle}>delete all</Text>
          <Icon name="trash-2" color="red" size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};
