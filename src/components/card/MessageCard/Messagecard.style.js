import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../colors/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: colors.darkGreen,
    borderRadius: 15,
  },
  inner_container: {
    padding: 5,
    flexDirection: 'row',
  },
  user: {
    flex: 1,
    color: 'white',
  },
  date: {
    color: 'white',
  },
  title: {
    color: 'white',
    padding: 5,
  },
  dislike_container: {
    alignItems: 'flex-end',
    padding: 2,
    paddingRight: 5,
  },
  opBord: {
    borderWidth: 1,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  dislike_text: {
    marginLeft: 5,
    color: colors.darkGreen,
    justifyContent: 'center',
  },
  dslk: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 2,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: colors.darkGreen,
  },
  dslkText: {
    color: 'white',
  },
});
