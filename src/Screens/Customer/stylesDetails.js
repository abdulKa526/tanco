/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
  },
  image: {
    marginHorizontal: 11,
    width: 120,
    height: 100
  },
  info: {
    margin: 15
  },
  type: {
    marginVertical: 5,
    color: '#5b5b5b',
    fontSize: 15,
    fontWeight: 'bold'
  },
  LocationDescrip: {
    marginVertical: 7,
    top: 10,
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 30,
    lineHeight: 33,
    fontWeight: '600',
    color: 'black'
  },
  prices: {
    fontSize: 18,
    marginVertical: 10
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through'
  },
  price: {
    fontWeight: 'bold'
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline'
  },
  LongDescripton: {
    marginVertical: 20,
    fontSize: 17,
    lineHeight: 24,
    color: 'black'
  },
  part2: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  host: {
    fontSize: 22,
    lineHeight: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  locations: {
    fontSize: 22,
    lineHeight: 25,
    fontWeight: 'bold',
    color: '#5b5b5b',
    marginBottom: 15
  },
  review: {
    marginVertical: 5,
    color: '#5b5b5b',
    fontSize: 15
  },
  bedroom: {
    marginVertical: 5,
    color: '#5b5b5b',
    fontSize: 17
  },
  imageButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  back: {
    backgroundColor: 'white',
    borderRadius: 21,
    padding: 12
  },
  like: {
    backgroundColor: 'white',
    borderRadius: 21,
    padding: 12
  },
  sticky: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 21,
    padding: 12
  }
})

export default styles
