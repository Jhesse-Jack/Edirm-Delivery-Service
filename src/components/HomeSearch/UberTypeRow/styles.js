import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    height: 70,
    width: 80,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  type: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  time: {
    color: '#5d5d5d',
  },
  rightContainer: {
    width: 100,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 5,
  },
});

export default styles;