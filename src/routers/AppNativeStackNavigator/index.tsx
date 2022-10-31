import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import FlipCard from '../../screens/FlipCard';
import Home from '../../screens/Home';
import SwipeCard from '../../screens/SwipeCard';
import UnknownWords from '../../screens/UnknownWords';
import { AppNativeStackNavigatorParamList } from '../types';

const Stack = createNativeStackNavigator<AppNativeStackNavigatorParamList>();

const AppNativeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName={'Home'}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SwipeCard" component={SwipeCard} />
      <Stack.Screen name="FlipCard" component={FlipCard} />
      <Stack.Screen name="UnknownWords" component={UnknownWords} />
    </Stack.Navigator>
  );
};

export default AppNativeStackNavigator;
