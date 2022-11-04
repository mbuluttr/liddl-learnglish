import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { COLORS } from '../../../../constants/colors';
import { FONTS } from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.white,
  },
  wordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
  },
  trText: {
    ...FONTS.Bold,
    fontSize: 16,
    color: COLORS.white,
    width: widthPercentageToDP(45),
  },
  enText: {
    ...FONTS.Bold,
    color: COLORS.white,
    fontSize: 16,
    width: widthPercentageToDP(45),
    textAlign: 'right',
  },
  trashIcon: {
    right: 0,
    position: 'absolute',
  },
});
