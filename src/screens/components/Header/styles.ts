import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textContainer: {},
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
