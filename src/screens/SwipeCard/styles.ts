import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { cardShadow, COLORS } from '../../constants/colors';

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
    borderRadius: 10,
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
  endGameContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: heightPercentageToDP(20),
  },
  scoreText: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
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
