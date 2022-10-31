import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import fonts from '../../constants/fonts';

export const styles = StyleSheet.create({
  endGameContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: heightPercentageToDP(18),
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
});
