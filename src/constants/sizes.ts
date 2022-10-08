import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export const SWIPE_TRESHOLD = heightPercentageToDP(20);
export const SCREEN_WIDTH = widthPercentageToDP(100);
export const SCREEN_HEIGHT = heightPercentageToDP(100);
export const HIT_SLOP = { top: 25, right: 25, bottom: 25, left: 25 };
