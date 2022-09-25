import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { cardShadow, COLORS } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    height: 54,
    backgroundColor: COLORS.smallCard,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    ...cardShadow,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
