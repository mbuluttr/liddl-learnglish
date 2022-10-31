import { StatusBar, Text, View } from 'react-native';
import React, { Fragment, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Animated, { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Header from '../../components/Header';
import { AppNativeStackNavigationProp } from '../../routers/types';
import { COLORS } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import WORDS from '../../data/words.json';
import EndGame from '../../components/EndGame';
import { SCREEN_WIDTH } from '../../constants/sizes';

const FlipCard = () => {
  const degree = useSharedValue(0);
  const translateX = useSharedValue(0);
  const [showEndGame, setShowEndGame] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [word, setWord] = useState(WORDS[Math.floor(Math.random() * WORDS.length)]);
  const navigation = useNavigation<AppNativeStackNavigationProp>();

  const getRandomWord = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(randomWord);
  };

  const onThumbsUpPress = () => {
    setCorrectCount(correctCount + 1);
    translateX.value = withTiming(SCREEN_WIDTH, { duration: 500 }, () => {
      translateX.value = withTiming(0, { duration: 250 });
      degree.value = 0;
      runOnJS(getRandomWord)();
    });
  };

  const onThumbsDownPress = () => {
    setWrongCount(wrongCount + 1);
    translateX.value = withTiming(-SCREEN_WIDTH, { duration: 500 }, () => {
      translateX.value = withTiming(0, { duration: 250 });
      degree.value = 0;
      runOnJS(getRandomWord)();
    });
  };

  const animatedFront = useAnimatedStyle(() => {
    const rotateY = interpolate(degree.value, [0, 180], [0, 180]);

    return {
      transform: [{ rotateY: `${rotateY}deg` }, { translateX: translateX.value }],
    };
  });

  const animatedBack = useAnimatedStyle(() => {
    const rotateY = interpolate(degree.value, [180, 0], [0, 180]);

    return {
      transform: [{ rotateY: `${rotateY}deg` }, { translateX: translateX.value }],
    };
  });

  const onFlipPress = () => {
    degree.value = degree.value === 0 ? withTiming(180, { duration: 1500 }) : withTiming(0, { duration: 1500 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.dark} />
      <Header leftIconPress={() => navigation.goBack()} rightIconPress={() => setShowEndGame(true)} />

      {!showEndGame ? (
        <Fragment>
          <View style={styles.content}>
            <Animated.View style={[styles.card, animatedFront]}>
              <Text style={styles.cardText}>{word.en}</Text>
            </Animated.View>

            <Animated.View style={[styles.card, animatedBack]}>
              <Text style={styles.cardText}>{word.tr}</Text>
            </Animated.View>
          </View>
          <View style={styles.buttonContainer}>
            <Button extraStyle={styles.button} title={'👎🏻'} onPress={onThumbsDownPress} />
            <Button extraStyle={styles.button} title={'flip'} onPress={onFlipPress} />
            <Button extraStyle={styles.button} title={'👍🏻'} onPress={onThumbsUpPress} />
          </View>
        </Fragment>
      ) : (
        <EndGame
          correctCount={correctCount}
          wrongCount={wrongCount}
          correctTitle={'Known Count'}
          wrongTitle={'Unknown Count'}
        />
      )}
    </SafeAreaView>
  );
};

export default FlipCard;
