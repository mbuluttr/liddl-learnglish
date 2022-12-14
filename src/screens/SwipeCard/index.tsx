import { StatusBar, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../../constants/colors';
import WORDS from '../../data/words.json';
import Card from './components/Card';
import { Question, Word } from '../../types';
import { AppNativeStackNavigationProp } from '../../routers/types';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import EndGame from '../../components/EndGame';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSharedValue } from 'react-native-reanimated';

const QUESTION_COUNT = 14;

const SwipeCard = () => {
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showEndGame, setShowEndGame] = useState(false);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<AppNativeStackNavigationProp>();
  const swipeEnabled = useSharedValue(true);

  const createRandomQuestion = () => {
    const randomOne = WORDS[Math.floor(Math.random() * WORDS.length)];
    const randomTwo = WORDS[Math.floor(Math.random() * WORDS.length)];
    const correctWay = Math.floor(Math.random() * 1000);

    if (correctWay % 2 === 0) {
      return {
        id: randomOne.id,
        tr: randomOne.tr,
        correctAnswer: randomOne.en,
        wrongAnswer: randomTwo.en,
        correctWay: correctWay,
      };
    } else {
      return {
        id: randomTwo.id,
        tr: randomTwo.tr,
        correctAnswer: randomTwo.en,
        wrongAnswer: randomOne.en,
        correctWay: correctWay,
      };
    }
  };

  const updateIndex = () => {
    swipeEnabled.value = false;
    setIndex(index > 0 ? index - 1 : 0);
  };

  const calculateCorrectCount = async (swipeDirection: boolean, question: Question) => {
    swipeEnabled.value = true;
    if ((swipeDirection && question.correctWay % 2 === 0) || (!swipeDirection && question.correctWay % 2 !== 0)) {
      setCorrectCount(correctCount + 1);
    } else {
      setWrongCount(wrongCount + 1);

      const storagedWords = await AsyncStorage.getItem('unknownWords');
      const unknownWordsArray = JSON.parse(storagedWords || '[]');
      const isExists = unknownWordsArray.find((item: Question) => item.id === question.id);

      if (!isExists) {
        unknownWordsArray.unshift(WORDS.find((item: Word) => item.id === question.id));
        await AsyncStorage.setItem('unknownWords', JSON.stringify(unknownWordsArray));
      }
    }
    setQuestions(questions.filter((q) => q.id !== question.id));
  };

  useEffect(() => {
    const qs: Question[] = [];
    for (let i = 0; i <= QUESTION_COUNT; i++) {
      const q = createRandomQuestion();
      if (!qs.find((question) => question.id === q.id)) {
        qs.push(q);
      }
    }

    setIndex(qs.length - 1);
    setQuestions(qs);
    setLoading(false);
  }, []);

  if (loading) {
    return <View style={styles.container} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.dark} />
      <Header leftIconPress={() => navigation.goBack()} rightIconPress={() => setShowEndGame(true)} />

      {questions.length > 0 && !showEndGame ? (
        <View style={styles.content}>
          <View style={styles.wordContainer}>
            {questions[index].correctWay % 2 === 0 ? (
              <Text style={styles.wordText}>{questions[index].correctAnswer}</Text>
            ) : (
              <Text style={styles.wordText}>{questions[index].wrongAnswer}</Text>
            )}
          </View>
          <View style={styles.cardContent}>
            {questions.map((question) => {
              return (
                <Card
                  key={question.id}
                  calculateCorrectCount={calculateCorrectCount}
                  updateIndex={updateIndex}
                  question={question}
                  swipeEnabled={swipeEnabled}
                />
              );
            })}
          </View>
          <View style={styles.wordContainer}>
            {questions[index].correctWay % 2 !== 0 ? (
              <Text style={styles.wordText}>{questions[index].correctAnswer}</Text>
            ) : (
              <Text style={styles.wordText}>{questions[index].wrongAnswer}</Text>
            )}
          </View>
        </View>
      ) : (
        <EndGame correctCount={correctCount} wrongCount={wrongCount} />
      )}
    </SafeAreaView>
  );
};

export default SwipeCard;
