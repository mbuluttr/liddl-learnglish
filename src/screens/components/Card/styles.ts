import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { cardShadow, COLORS } from '../../../constants/colors';

export const styles = StyleSheet.create({
  cardContainer: {
    position: 'absolute',
  },
  card: {
    backgroundColor: '#171717',
    borderRadius: 10,
    width: widthPercentageToDP(70),
    height: heightPercentageToDP(40),
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    ...cardShadow,
  },
  cardText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
