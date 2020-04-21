import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import { IconButton } from '../iconButton';

import styles from './styles';

type Props = {
  title: string;
  subtitle: string;
  onCardPress: () => void;
  onCardDelete?: () => void;
  removable?: boolean;
};

export const Card: React.FC<Props> = ({
  title,
  subtitle,
  onCardPress,
  onCardDelete = () => {},
  removable = false,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onCardPress} activeOpacity={0.7}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Icon name="day-cloudy" size={25} color="rgb(160,160,160)" />
        {removable && <IconButton name="trash-2" color="red" size={20} onPress={onCardDelete} />}
      </View>
    </TouchableOpacity>
  );
};
