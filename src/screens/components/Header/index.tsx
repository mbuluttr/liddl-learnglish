import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface HeaderProps {
  leftIconPress: ((event: GestureResponderEvent) => void) | undefined;
  rightIconPress: ((event: GestureResponderEvent) => void) | undefined;
}

const Header = ({ leftIconPress, rightIconPress }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={leftIconPress}>
        <Text style={styles.text}>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={rightIconPress}>
        <Text style={styles.text}>End Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
