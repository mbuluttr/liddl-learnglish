import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { cardShadow, COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  wordContainer: {
    zIndex: 999,
    width: widthPercentageToDP(70),
    height: heightPercentageToDP(10),
    backgroundColor: COLORS.smallCard,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    ...cardShadow,
  },
  wordText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
