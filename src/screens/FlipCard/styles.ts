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
    alignItems: 'center',
    marginTop: heightPercentageToDP(12),
  },
  card: {
    height: heightPercentageToDP(30),
    width: heightPercentageToDP(30),
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: COLORS.light,
    ...cardShadow,
    backfaceVisibility: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  cardText: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
    ...FONTS.Bold,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    position: 'absolute',
    bottom: heightPercentageToDP(18),
    width: widthPercentageToDP(100),
  },
  button: {
    width: widthPercentageToDP(28),
    marginBottom: 0,
  },
});
