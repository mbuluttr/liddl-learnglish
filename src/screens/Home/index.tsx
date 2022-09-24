import { StatusBar, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../../constants/colors';
import WORDS from '../../data/words.json';
import Card from '../components/Card';
import { Question } from '../../types';

const Home = () => {
  const [correctCount, setCorrectCount] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(10);

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
    setIndex(index - 1);
  };

  const calculateCorrectCount = (swipeDirection: boolean, question: Question) => {
    if (swipeDirection && question.correctWay % 2 === 0) {
      setCorrectCount(correctCount + 1);
    }

    if (!swipeDirection && question.correctWay % 2 !== 0) {
      setCorrectCount(correctCount + 1);
    }
    setQuestions(questions.filter((q) => q.id !== question.id));
  };

  useEffect(() => {
    const qs = [];
    for (let i = 0; i < 11; i++) {
      qs.push(createRandomQuestion());
    }
    setQuestions(qs);
  }, []);

  if (questions.length === 0) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.main} />
      <View style={styles.wordContainer}>
        {questions[index].correctWay % 2 === 0 ? (
          <Text style={styles.wordText}>{questions[index].correctAnswer}</Text>
        ) : (
          <Text style={styles.wordText}>{questions[index].wrongAnswer}</Text>
        )}
      </View>
      {questions.map((question) => {
        return (
          <Card
            key={question.id}
            calculateCorrectCount={calculateCorrectCount}
            correctCount={correctCount}
            question={question}
            updateIndex={updateIndex}
          />
        );
      })}
      <View style={styles.wordContainer}>
        {questions[index].correctWay % 2 !== 0 ? (
          <Text style={styles.wordText}>{questions[index].correctAnswer}</Text>
        ) : (
          <Text style={styles.wordText}>{questions[index].wrongAnswer}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
