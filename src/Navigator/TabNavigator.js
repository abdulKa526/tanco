import React, { useContext } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppContext } from '../context'
import CustomerHomeScreen from '../Screens/Customer/CustomerHomeScreen'
import CustomerInbox from '../Screens/Customer/CustomerInbox'
import { GetScreenTitle } from './index'
import { __ } from '../Translations'
import Connector from '../Redux/Connector'
import CustomerOrdersScreen from '../Screens/Customer/CustomerOrdersScreen'
import CustomerFavoritesScreen from '../Screens/Customer/CustomerFavoritesScreen'
import CustomerAccountScreen from '../Screens/Customer/CustomerAccountScreen'
import { Col } from '../Components'

// const Stack = createMaterialBottomTabNavigator()
const Stack = createBottomTabNavigator()

const CustomerScreens = {
  CustomerHome: CustomerHomeScreen,
  CustomerOrders: CustomerOrdersScreen,
  Favorites: CustomerFavoritesScreen,
  Account: CustomerAccountScreen,
  Notification: CustomerInbox
}

const SellerScreens = {
  SellerHome: CustomerHomeScreen,
  Tab2: CustomerHomeScreen,
  Tab3: CustomerHomeScreen
}

const tabBarOptions = ({ route, colors }) => ({
  tabBarLabel: __(`ScreensTitle.${route.name}`),
  tabBarStyle: {
    backgroundColor: 'white'
  },
  tabBarLabelStyle: {
    color: colors.text
  },
  tabBarIcon: ({ focused, color, size }) => {
    size = 24
    // color = focused ? (dark ? colors.primary : colors.white) : (dark ? colors.white : colors.black)
    color = focused ? colors.primary : '#bcbcbc'
    let icon
    const style = { }
    switch (route.name) {
      case 'CustomerHome':
        icon = 'home'
        size = 30
        break
      case 'Notification':
        icon = 'bells'
        size = 28
        break
      case 'CustomerOrders':
      case 'Orders':
        icon = 'inbox'
        size = 32
        break
      case 'CustomerFavorites':
      case 'Favorites':
        icon = 'hearto'
        size = 25
        break
      case 'Account':
        icon = 'user'
        size = 28
        break
    }
    return (
      <AntDesign
        style={style}
        name={icon}
        size={size}
        color={color}
      />
    )
  }
})

const headerOptions = ({ route, colors }) => ({ // header
  headerShown: false,
  title: GetScreenTitle(route.name),
  // title: __('ScreensTitle.App'),
  headerLeft: () => <Col />,
  headerRight: () => <SimpleLineIcons style={{ marginRight: 13 }} name='basket' size={25} color='#00aa5c' />,
  headerStyle: {
    backgroundColor: colors.header
  },
  headerTintColor: 'black',
  headerTitleAlign: 'left',
  headerTitleStyle: {
    fontSize: 33,
    fontWeight: 'bold'
  }
})

const Props = {
  labeled: !0,
  // shifting: !1,
  screenOptions: ({ route, navigation }) => {
    const { theme: { colors } } = React.useContext(AppContext)
    return {
      ...headerOptions({ route, colors }),
      ...tabBarOptions({ route, colors })
    }
  }
}

function TabNavigator ({ route, navigation }) {
  const { user } = useContext(AppContext)
  let screens = CustomerScreens
  const isSeller = Boolean(user?.is_seller)

  if (user && isSeller) {
    screens = SellerScreens
  }
  return (
    <Stack.Navigator {...Props}>
      {Object.entries(screens).map(([name, component]) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
        />))}
    </Stack.Navigator>
  )
}

export default Connector(TabNavigator)
