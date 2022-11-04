import { Text, View } from 'react-native';
import React from 'react';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { styles } from './styles';
import { SCREEN_HEIGHT, SWIPE_TRESHOLD } from '../../../../constants/sizes';
import { Question } from '../../../../types';

interface CardPorps {
  question: Question;
  updateIndex: () => void;
  calculateCorrectCount: (swipeDirection: boolean, question: Question) => void;
  swipeEnabled: Animated.SharedValue<boolean>;
}

const Card = ({ updateIndex, calculateCorrectCount, question, swipeEnabled }: CardPorps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotation = useSharedValue(Math.floor(Math.random() * 15));

  const panGestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
      rotation.value = interpolate(event.translationY, [200, 0, -200], [25, 0, -25]);
    },

    onEnd: () => {
      const isSwipeUp = translateY.value < -SWIPE_TRESHOLD;
      const isSwipeDown = translateY.value > SWIPE_TRESHOLD;
      const SWIPE_DIRECTION = isSwipeUp ? -SCREEN_HEIGHT : isSwipeDown ? SCREEN_HEIGHT : 0;

      if (SWIPE_DIRECTION) {
        runOnJS(updateIndex)();
        translateY.value = withTiming(SWIPE_DIRECTION, { duration: 1000 }, () => {
          runOnJS(calculateCorrectCount)(isSwipeUp, question);
        });
      } else {
        translateX.value = withTiming(0, { duration: 500 });
        translateY.value = withTiming(0, { duration: 500 });
        rotation.value = withTiming(0, { duration: 500 });
      }
    },
  });

  const animatedCardStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
        {
          rotate: `${rotation.value}deg`,
        },
      ],
    };
  });

  return (
    <View style={styles.cardContainer}>
      <PanGestureHandler onGestureEvent={panGestureHandler} enabled={swipeEnabled.value}>
        <Animated.View style={[styles.card, animatedCardStyle]}>
          <Text style={styles.cardText}>{question.tr}</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Card;
