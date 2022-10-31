import { GestureResponderEvent, StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface ButtonProps {
  title: string;
  extraStyle?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void;
}

const Button = ({ title, extraStyle, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, extraStyle]} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
