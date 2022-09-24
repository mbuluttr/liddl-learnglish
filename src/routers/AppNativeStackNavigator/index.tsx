import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../../screens/Home';
import { AppNativeStackNavigatorParamList } from '../types';

const Stack = createNativeStackNavigator<AppNativeStackNavigatorParamList>();

const AppNativeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppNativeStackNavigator;
