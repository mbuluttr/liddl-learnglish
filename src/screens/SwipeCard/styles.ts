import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { cardShadow, COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  content: {
    flex: 1,
    alignSelf: 'center',
    marginBottom: heightPercentageToDP(10),
  },
  wordContainer: {
    width: widthPercentageToDP(70),
    height: heightPercentageToDP(10),
    backgroundColor: COLORS.light,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    ...cardShadow,
  },
  wordText: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
    ...FONTS.Bold,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
});
