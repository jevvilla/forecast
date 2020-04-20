import React from 'react';
import { View, TextInput, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { HomeScreenParamList, Prediction } from '../../common/types';
import { IconButton, Card } from '../../components';
import { WEATHER_API_SECRET } from '../../common/constants';
import * as routes from '../../navigation/routes';

import styles from './styles';

type Props = {
  navigation: StackNavigationProp<HomeScreenParamList>;
};

export const Home: React.FC<Props> = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = React.useState<string>();
  const [prediction, setPrediction] = React.useState<Prediction>();
  const [fetching, setFetching] = React.useState<boolean>();
  const [error, setError] = React.useState();

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
            onCardPress={() => navigation.navigate(routes.DETAILS, { prediction })}
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
        <TextInput style={styles.searchText} onChangeText={handleTextInput} />
        <IconButton name="search" color="blue" size={40} onPress={handleSearchPress} />
      </View>
      {/* <Button onPress={() => navigation.push(routes.DETAILS)} title="go to details" /> */}
      <View>{renderContent()}</View>
    </View>
  );
};
