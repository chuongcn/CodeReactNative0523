import { StyleSheet } from 'react-native'
import color from '../../contains/color';

const styles = StyleSheet.create({

  item: {
    flexDirection: 'row',
    backgroundColor: color.white,
    marginBottom: 15,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  square: {
    width: 48,
    height: 36,
    backgroundColor: color.second,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    fontSize: 16,
    color: color.white,
    fontWeight: 700
  },
  content: {
    width: '80%',
    fontSize: 16
  },
  input: {

  }
});

export default styles;
