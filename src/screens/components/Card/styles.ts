import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { cardShadow, COLORS } from '../../../constants/colors';

export const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: heightPercentageToDP(10),
    position: 'absolute',
    top: heightPercentageToDP(20),
  },
  card: {
    backgroundColor: '#171717',
    borderRadius: 20,
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
  fixedCountText: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 25,
  },
});
