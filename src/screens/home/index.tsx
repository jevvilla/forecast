import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Fontisto';

import { HomeScreenParamList } from '../../common/types';
import * as routes from '../../navigation/routes';

import styles from './styles';

type Props = {
  navigation: StackNavigationProp<HomeScreenParamList>;
};

export const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Icon name="day-sunny" size={100} color="rgb(236, 177, 63)" />
      <Text style={styles.title}>19º</Text>
      <Button onPress={() => navigation.push(routes.DETAILS)} title="go to details" />
    </View>
  );
};
