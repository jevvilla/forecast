import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { getTimeFromTimestamp } from '../../common/utils';
import { Map } from '../../components';

import styles from './styles';

type Props = {
  route: any;
};

export const Details: React.FC<Props> = ({ route }) => {
  const { prediction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>{Math.round(prediction.main.temp)}º</Text>
        <Icon name="sun" size={110} color="rgb(236, 177, 63)" />
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
          <Icon name="sunrise" size={35} color="rgb(63,138,247)" />
          <Text style={styles.infoLabel}>{getTimeFromTimestamp(prediction.sys.sunrise)}</Text>
        </View>
        <View style={styles.infoBox}>
          <Icon name="sunset" size={35} color="rgb(63,138,247)" />
          <Text style={styles.infoLabel}>{getTimeFromTimestamp(prediction.sys.sunset)}</Text>
        </View>
        <View style={styles.infoBox}>
          <Icon name="wind" size={35} color="rgb(63,138,247)" />
          <Text style={styles.infoLabel}>{prediction.wind.speed} km/h</Text>
        </View>
        <View style={styles.infoBox}>
          <Icon name="cloud" size={35} color="rgb(63,138,247)" />
          <Text style={styles.infoLabel}>{prediction.clouds.all}%</Text>
        </View>
        <View style={styles.infoBox}>
          <Icon name="umbrella" size={35} color="rgb(63,138,247)" />
          <Text style={styles.infoLabel}>{prediction.main.humidity}%</Text>
        </View>
      </View>
      <Map location={prediction.coord} />
    </View>
  );
};
