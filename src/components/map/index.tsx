import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { Coordinates } from '../../common/types';

import styles from './styles';

interface Props {
  location: Coordinates;
}

export const Map: React.FC<Props> = ({ location }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          longitude: location.lon,
          latitude: location.lat,
          latitudeDelta: 0.04,
          longitudeDelta: 0.01,
        }}
        loadingEnabled={true}
        pitchEnabled={false}
        showsIndoors={false}
        showsPointsOfInterest={false}
        showsTraffic={false}
        toolbarEnabled={false}
      >
        <Marker coordinate={{ latitude: location.lat, longitude: location.lon }} />
      </MapView>
    </View>
  );
};
