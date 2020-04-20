import { StyleSheet } from 'react-native';

import { shadow } from '../../common/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 4,
    paddingVertical: 22,
    paddingHorizontal: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...shadow(),
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  subtitle: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: 'rgb(120, 120, 120)',
    marginRight: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
});
