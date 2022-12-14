import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { cardShadow, COLORS } from '../../../../constants/colors';
import { FONTS } from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  cardContainer: {
    position: 'absolute',
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    width: widthPercentageToDP(70),
    height: heightPercentageToDP(40),
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    ...cardShadow,
  },
  cardText: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
    ...FONTS.Bold,
  },
});
