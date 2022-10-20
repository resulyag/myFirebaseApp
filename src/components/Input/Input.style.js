import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 8,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    padding: Platform.OS === 'android' ? 0 : 5,
  },
});
