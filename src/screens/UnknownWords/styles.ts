import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  flatListContentContainer: {
    flex: 1,
    paddingHorizontal: 18,
    paddingBottom: 125,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: -125,
  },
  emptyText: {
    ...FONTS.SemiBold,
    fontSize: 18,
    color: COLORS.white,
  },
});
