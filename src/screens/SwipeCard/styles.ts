import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { cardShadow, COLORS } from '../../constants/colors';
import fonts from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  content: {
    flex: 1,
    alignSelf: 'center',
  },
  wordContainer: {
    width: widthPercentageToDP(70),
    height: heightPercentageToDP(10),
    backgroundColor: COLORS.smallCard,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    ...cardShadow,
  },
  wordText: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
    ...fonts.Bold,
  },
  endGameContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: heightPercentageToDP(20),
  },
  scoreText: {
    color: COLORS.white,
    fontSize: 22,
    ...fonts.Bold,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 20,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
});
