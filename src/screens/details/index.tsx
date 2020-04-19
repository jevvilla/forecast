import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { DetailsScreenParamList, Prediction } from '../../common/types';
import { getTimeFromTimestamp } from '../../common/utils';
import * as routes from '../../navigation/routes';
import { getPredictions } from '../../api';

import styles from './styles';

type Props = {
  navigation: StackNavigationProp<DetailsScreenParamList>;
};

export const Details: React.FC<Props> = ({ navigation }) => {
  const [prediction, setPrediction] = React.useState<Prediction>();

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getPredictions();
      setPrediction(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!prediction) {
    return <ActivityIndicator size="small" color="rgb(63,138,247)" />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>{Math.round(prediction.main.temp)}º</Text>
        <FeatherIcon name="sun" size={110} color="rgb(236, 177, 63)" />
      </View>
      <View style={styles.mainTextContainer}>
        <View style={styles.minmax}>
          <Text style={[styles.mainLabel, styles.boldLabel]}>{prediction.weather[0].main} day</Text>
          <Text style={styles.mainLabel}>
            {Math.round(prediction.main.temp_max)}º / {Math.round(prediction.main.temp_min)}º
          </Text>
        </View>
        <View>
          <Text style={styles.mainLabel}>Feels like {Math.round(prediction.main.feels_like)}º</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <FeatherIcon name="sunrise" size={35} color="rgb(63,138,247)" />
          <Text style={styles.infoLabel}>{getTimeFromTimestamp(prediction.sys.sunrise)}</Text>
        </View>
        <View style={styles.infoBox}>
          <FeatherIcon name="sunset" size={35} color="rgb(63,138,247)" />
          <Text style={styles.infoLabel}>{getTimeFromTimestamp(prediction.sys.sunset)}</Text>
        </View>
        <View style={styles.infoBox}>
          <FeatherIcon name="wind" size={35} color="rgb(63,138,247)" />
          <Text style={styles.infoLabel}>{prediction.wind.speed} km/h</Text>
        </View>
        <View style={styles.infoBox}>
          <FeatherIcon name="cloud" size={35} color="rgb(63,138,247)" />
          <Text style={styles.infoLabel}>{prediction.clouds.all}%</Text>
        </View>
        <View style={styles.infoBox}>
          <FeatherIcon name="umbrella" size={35} color="rgb(63,138,247)" />
          <Text style={styles.infoLabel}>{prediction.main.humidity}%</Text>
        </View>
      </View>
      <Button onPress={() => navigation.push(routes.HOME)} title="go to Home" />
    </View>
  );
};
