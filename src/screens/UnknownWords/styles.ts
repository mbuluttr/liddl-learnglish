import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  flatListContentContainer: {
    paddingHorizontal: 18,
    paddingBottom: 125,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: -125,
    marginTop: 125,
  },
  emptyText: {
    ...FONTS.SemiBold,
    fontSize: 18,
    color: COLORS.white,
  },
});
