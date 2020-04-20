import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import styles from './styles';

type Props = {
  title: string;
  subtitle: string;
  onCardPress: () => void;
};

export const Card: React.FC<Props> = ({ title, subtitle, onCardPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onCardPress} activeOpacity={0.7}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Icon name="day-cloudy" size={25} color="rgb(160,160,160)" />
      </View>
    </TouchableOpacity>
  );
};
