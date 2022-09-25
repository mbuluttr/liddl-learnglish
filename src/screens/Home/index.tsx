import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Button from '../components/Button';
import { AppNativeStackNavigationProp } from '../../routers/types';
import { StatusBar } from 'react-native';
import { COLORS } from '../../constants/colors';

interface HomeProps {
  navigation: AppNativeStackNavigationProp;
}

const Home = ({ navigation }: HomeProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.main} />
      <Button title={'SwipeCard'} onPress={() => navigation.navigate('SwipeCard')} />
    </SafeAreaView>
  );
};

export default Home;
