import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { COLORS } from '../../../../constants/colors';
import fonts from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  wordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.white,
    paddingVertical: 18,
  },
  trText: {
    ...fonts.Bold,
    fontSize: 16,
    color: COLORS.white,
    width: widthPercentageToDP(45),
  },
  enText: {
    ...fonts.Bold,
    color: COLORS.white,
    fontSize: 16,
    width: widthPercentageToDP(45),
    textAlign: 'right',
  },
});
