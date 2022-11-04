import { FlatList, StatusBar, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { COLORS } from '../../constants/colors';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { AppNativeStackNavigationProp } from '../../routers/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Word } from '../../types';
import HidedAnswer from './components/HidedAnswer';

const UnknownWords = () => {
  const [unknownWords, setUnknownWords] = useState<Word[]>([]);
  const navigation = useNavigation<AppNativeStackNavigationProp>();

  useEffect(() => {
    const getStoragedWords = async () => {
      const storagedWords = await AsyncStorage.getItem('unknownWords');

      if (storagedWords) {
        const parsedWords = JSON.parse(storagedWords);
        setUnknownWords(parsedWords);
      }
    };

    getStoragedWords();
  }, []);

  const onDelete = (id: string) => {
    const filteredWords = unknownWords.filter((word) => word.id !== id);
    setUnknownWords(filteredWords);
    AsyncStorage.setItem('unknownWords', JSON.stringify(filteredWords));
  };

  const renderItem = ({ item }: { item: Word }) => <HidedAnswer item={item} onDelete={onDelete} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.dark} />
      <Header leftIconPress={() => navigation.goBack()} />
      <View>
        <FlatList
          keyboardShouldPersistTaps="never"
          data={unknownWords}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContentContainer}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default UnknownWords;
