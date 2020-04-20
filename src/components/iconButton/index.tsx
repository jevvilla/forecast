import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

type Props = {
  onPress: () => void;
  name: string;
  color: string;
  size: number;
};

export const IconButton: React.FC<Props> = ({ onPress, name, color, size }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};
