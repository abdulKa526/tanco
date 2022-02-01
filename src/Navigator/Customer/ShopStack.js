import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ViewProductScreen from '../../Screens/Customer/ViewProductScreen'
import { GetHeaderTitle, GetHeaderText } from '../index'

const Stack = createStackNavigator()
const Screens = {
  ViewProduct: ViewProductScreen
}
const Props = {
  screenOptions: ({ route, navigation }) => {
    return {
      headerShown: !1,
      headerTitle: () => GetHeaderTitle(route)
    }
  }
}
Props.initialRouteName = Object.keys(Props).pop()

export default function ShopStack ({ route, navigation }) {
  return (
    <Stack.Navigator {...Props}>
      {Object.entries({ ...Screens }).map(([name, component]) =>
        (<Stack.Screen
          key={name}
          name={name}
          component={component}
        />))}
    </Stack.Navigator>
  )
}
