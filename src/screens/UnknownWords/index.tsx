import { FlatList, StatusBar, Text, View } from 'react-native';
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

  const renderListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>list is empty</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.dark} />
      <Header leftIconPress={() => navigation.goBack()} />
      <FlatList
        keyboardShouldPersistTaps="never"
        data={unknownWords}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContentContainer}
        renderItem={renderItem}
        ListEmptyComponent={renderListEmptyComponent}
      />
    </SafeAreaView>
  );
};

export default UnknownWords;
