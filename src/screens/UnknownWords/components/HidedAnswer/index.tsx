import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { styles } from './styles';
import { SCREEN_WIDTH } from '../../../../constants/sizes';
import { Word } from '../../../../types';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../../../../constants/colors';

interface HidedAnswerProps {
  item: Word;
  onDelete: (id: string) => void;
}

const TRANSLATE_X_THRESHOLD = SCREEN_WIDTH * 0.3;

const AnimatedIcon = Animated.createAnimatedComponent(Feather);

const HidedAnswer = ({ item, onDelete }: HidedAnswerProps) => {
  const textTranslationX = useSharedValue(0);
  const cardTranslateX = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      cardTranslateX.value = event.translationX;
    })
    .onEnd(() => {
      const shouldBeDismissed = cardTranslateX.value < -TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed && onDelete) {
        cardTranslateX.value = withTiming(-SCREEN_WIDTH);
        runOnJS(onDelete)(item.id);
      } else {
        cardTranslateX.value = withTiming(0);
      }
    })
    .activeOffsetX([-5, 5])
    .failOffsetY([-5, 5]);

  const animatedCardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: cardTranslateX.value }],
    };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    const opacity = interpolate(cardTranslateX.value, [-TRANSLATE_X_THRESHOLD, 0], [1, 0]);
    const color = interpolateColor(cardTranslateX.value, [-TRANSLATE_X_THRESHOLD, 0], [COLORS.red, COLORS.white]);

    return {
      opacity,
      color,
      transform: [{ rotate: `${-cardTranslateX.value * 0.1}deg` }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(textTranslationX.value, [0, 1], [0, 1]);
    const translateX = interpolate(textTranslationX.value, [0, 1], [SCREEN_WIDTH, 0]);

    return {
      opacity,
      transform: [{ translateX }],
    };
  });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={animatedCardStyle}>
          <TouchableOpacity
            style={[styles.wordContainer]}
            activeOpacity={0.8}
            onPress={() =>
              (textTranslationX.value = withTiming(textTranslationX.value <= 0.5 ? 1 : 0, { duration: 500 }))
            }
          >
            <Text style={styles.trText}>{item.tr}</Text>
            <Animated.Text style={[styles.enText, animatedTextStyle]}>{item.en}</Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      </GestureDetector>
      <AnimatedIcon style={[styles.trashIcon, animatedIconStyle]} name={'trash-2'} size={28} color={COLORS.white} />
    </View>
  );
};

export default HidedAnswer;
