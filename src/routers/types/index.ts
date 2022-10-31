import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppNativeStackNavigatorParamList = {
  Home: undefined;
  SwipeCard: undefined;
  FlipCard: undefined;
  UnknownWords: undefined;
};

export type AppNativeStackNavigationProp = NativeStackNavigationProp<AppNativeStackNavigatorParamList>;
