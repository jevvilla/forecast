import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { DetailsScreenParamList } from '../../common/types';
import * as routes from '../../navigation/routes';

import styles from './styles';

type Props = {
  navigation: StackNavigationProp<DetailsScreenParamList>;
};

export const Details: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Button onPress={() => navigation.push(routes.HOME)} title="go to Home" />
    </View>
  );
};
