import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Button from '../../components/Button';
import { AppNativeStackNavigationProp } from '../../routers/types';
import { StatusBar } from 'react-native';
import { COLORS } from '../../constants/colors';

interface HomeProps {
  navigation: AppNativeStackNavigationProp;
}

const Home = ({ navigation }: HomeProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.dark} />
      <Button title={'Swipe Card'} onPress={() => navigation.navigate('SwipeCard')} />
      <Button title={'Flip Card'} onPress={() => navigation.navigate('FlipCard')} />
      <Button title={'Unknown Words'} onPress={() => navigation.navigate('UnknownWords')} />
    </SafeAreaView>
  );
};

export default Home;
