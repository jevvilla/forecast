import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  searchText: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    height: 50,
  },
  deleteAllTouchable: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  deleteTitle: {
    marginRight: 8,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
});
