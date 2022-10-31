import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../../constants/colors';
import { HIT_SLOP } from '../../constants/sizes';

interface HeaderProps {
  leftIconPress: ((event: GestureResponderEvent) => void) | undefined;
  rightIconPress: ((event: GestureResponderEvent) => void) | undefined;
}

const Header = ({ leftIconPress, rightIconPress }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={leftIconPress} hitSlop={HIT_SLOP}>
        <Feather name="arrow-left" size={24} color={COLORS.white} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={rightIconPress} hitSlop={HIT_SLOP}>
        <Text style={styles.text}>Stop Session</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
