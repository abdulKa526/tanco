import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Page } from '../../Components'
import Connector from '../../Redux/Connector'
import Header from '../../Components/Grid/Header'
import InboxContent from '../../Components/InboxContent'
import ViewProductScreen from './ProductsScreen'

function MessagingScreen (props) {
  return (

    <Page>
      <Header />
      <View style={styles.Container}>
        <Text style={styles.Title}>Inbox</Text>
        <ViewProductScreen />
      </View>
    </Page>
  )
}
const styles = StyleSheet.create({

  Container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%'
  },
  Title: {
    fontSize: 33,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: 'white'
  },
  CreateText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    marginHorizontal: 15,
    marginVertical: 5
  },
  Infos: {
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15

  }
})
export default Connector(MessagingScreen)
