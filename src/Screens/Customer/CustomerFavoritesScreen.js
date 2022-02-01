/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
import React from 'react'
import Connector from '../../Redux/Connector'
import Header from '../../Components/Grid/Header'
import { Page, AppText } from '../../Components'

function CustomerFavoritesScreen (props) {
  const { app } = props
  return (
    <Page>
      <Header />
    <AppText style={{ fontSize: 33,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 40,
      marginHorizontal: 15,
      marginVertical: 10 }}
    >Wishlists
    </AppText>

    <AppText style={{ fontSize: 25,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 5,
      marginHorizontal: 15,
      marginVertical: 5 }}
    >Create your first Wishlist
    </AppText>

    <AppText
      style={{ fontSize: 15,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15 }} numberOfLines={2}
    >As you search, tap the heart icon to save your favourite places to stay.
    </AppText>

    </Page>
  )
}

export default Connector(CustomerFavoritesScreen)
