import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { styles } from './styles';
import { SCREEN_WIDTH } from '../../../../constants/sizes';
import { Word } from '../../../../types';

interface HidedAnswerProps {
  item: Word;
}

const HidedAnswer = ({ item }: HidedAnswerProps) => {
  const animationValue = useSharedValue(0);

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(animationValue.value, [0, 1], [0, 1]);
    const translateX = interpolate(animationValue.value, [0, 1], [SCREEN_WIDTH, 0]);

    return {
      opacity,
      transform: [{ translateX }],
    };
  });

  return (
    <TouchableOpacity
      style={styles.wordContainer}
      activeOpacity={0.8}
      onPress={() => (animationValue.value = withTiming(animationValue.value <= 0.5 ? 1 : 0, { duration: 500 }))}
    >
      <Text style={styles.trText}>{item.tr}</Text>
      <Animated.Text style={[styles.enText, animatedTextStyle]}>{item.en}</Animated.Text>
    </TouchableOpacity>
  );
};

export default HidedAnswer;
