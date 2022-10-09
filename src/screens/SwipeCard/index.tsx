import { StatusBar, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../../constants/colors';
import WORDS from '../../data/words.json';
import Card from './components/Card';
import { Question } from '../../types';
import { AppNativeStackNavigationProp } from '../../routers/types';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import EndGame from '../components/EndGame';

const QUESTION_COUNT = 10;

const SwipeCard = () => {
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showEndGame, setShowEndGame] = useState(false);
  const [index, setIndex] = useState(QUESTION_COUNT);
  const navigation = useNavigation<AppNativeStackNavigationProp>();

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
    setIndex(index > 0 ? index - 1 : 0);
  };

  const calculateCorrectCount = (swipeDirection: boolean, question: Question) => {
    if ((swipeDirection && question.correctWay % 2 === 0) || (!swipeDirection && question.correctWay % 2 !== 0)) {
      setCorrectCount(correctCount + 1);
    } else {
      setWrongCount(wrongCount + 1);
    }

    console.log(swipeDirection, question.correctWay);

    setQuestions(questions.filter((q) => q.id !== question.id));
  };

  useEffect(() => {
    const qs = [];
    for (let i = 0; i <= QUESTION_COUNT; i++) {
      qs.push(createRandomQuestion());
    }
    setQuestions(qs);

    return () => {
      setCorrectCount(0);
      setWrongCount(0);
      setQuestions([]);
      setIndex(QUESTION_COUNT);
    };
  }, []);

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
                  question={question}
                  updateIndex={updateIndex}
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
