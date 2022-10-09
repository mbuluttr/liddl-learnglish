import { Text, View } from 'react-native';
import React from 'react';
import Button from '../Button';
import { AppNativeStackNavigationProp } from '../../../routers/types';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

interface EndGameProps {
  correctCount: number;
  wrongCount: number;
  correctTitle?: string;
  wrongTitle?: string;
}

const EndGame = ({
  correctCount,
  wrongCount,
  correctTitle = 'Corrrect Count',
  wrongTitle = 'WrongCount',
}: EndGameProps) => {
  const navigation = useNavigation<AppNativeStackNavigationProp>();

  return (
    <View style={styles.endGameContainer}>
      <Text style={styles.scoreText}>
        {correctTitle}: {correctCount}
      </Text>
      <Text style={styles.scoreText}>
        {wrongTitle}: {wrongCount}
      </Text>
      <View style={styles.bottomButtonContainer}>
        <Button title={'Go Back'} onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default EndGame;
