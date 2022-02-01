/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import Connector from '../../Redux/Connector'
import { Page, AppText } from '../../Components'
import Header from '../../Components/Grid/Header'
import { View, Text, Pressable } from 'react-native'

function CustomerOrdersScreen (props) {
  const { app } = props
  return (
    <Page>
      <Header />
      <AppText style={{ fontSize: 33,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: 15,
        marginTop: 10 }}
      >Orders</AppText>

      <View style={{ borderBottomColor: '#C3C3C3', borderBottomWidth: 1, marginVertical: 23, marginHorizontal: 15 }} />

      <AppText style={{ fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
        marginHorizontal: 15,
        marginVertical: 5 }}
      >No orders requested ... yet!</AppText>

      <AppText
        style={{ fontSize: 17,
          color: 'black',
          marginBottom: 2,
          marginHorizontal: 15,
          lineHeight: 23 }} numberOfLines={2}
      >Time to fill up your tanks and start requesting your next order</AppText>

      <Pressable
        style={{ borderBottomColor: 'black',
          borderRadius: 7,
          borderWidth: 0.5,
          height: 48,
          width: 150,
          marginVertical: 17,
          marginHorizontal: 15,
          justifyContent: 'center',
          alignItems: 'center',
          resizeMode: 'cover' }}
      >
        <Text style={{ color: 'black',
          fontSize: 17,
          fontWeight: 'bold',
          marginBottom: 1 }}
        >Start searching</Text></Pressable>

      <View style={{ borderBottomColor: '#C3C3C3', borderBottomWidth: 1, marginVertical: 23, marginHorizontal: 15 }} />

    </Page>
  )
}

export default Connector(CustomerOrdersScreen)
