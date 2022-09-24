import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppNativeStackNavigatorParamList = {
  Home: undefined;
};

export type AppNativeStackHomeNavigationProp = NativeStackNavigationProp<AppNativeStackNavigatorParamList>;
export type AppNativeStackHomeRouteProp = RouteProp<AppNativeStackNavigatorParamList>;
