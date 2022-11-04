import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 18,
    paddingHorizontal: 18,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textContainer: {},
  text: {
    color: COLORS.white,
    fontSize: 16,
    ...FONTS.Bold,
  },
});
