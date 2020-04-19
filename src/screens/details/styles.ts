import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  mainTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 8,
  },
  minmax: {
    flexDirection: 'row',
  },
  boldLabel: {
    fontFamily: 'Lato-Bold',
  },
  mainLabel: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    paddingHorizontal: 4,
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 100,
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 30,
  },
  infoBox: {
    flexDirection: 'row',
    flexBasis: '33.3%',
    alignItems: 'center',
    height: 50,
  },
  infoLabel: {
    marginLeft: 14,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
});
