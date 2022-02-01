import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Connector from '../Redux/Connector'
import ViewProductScreen from '../Screens/Customer/ViewProductScreen'
import TabNavigator from './TabNavigator'
import ToggleLocaleScreen from '../Screens/Util/ToggleLocaleScreen'
import SignOutScreen from '../Screens/Auth/SignOutScreen'
import ProductsStack from './ProductsStack'
import AuthStack from './AuthStack'
import { GetScreenTitle } from './index'
import LoginBackground from '../Screens/Auth/LoginBackground'

const Stack = createStackNavigator()
const ActionScreens = {
  LoginBackground: LoginBackground,
  ToggleLocale: ToggleLocaleScreen,
  SignOut: SignOutScreen
}
const Props = {
  screenOptions: ({ route, navigation }) => {
    return {
      headerShown: !1
    }
  }
}
const presentationScreens = {
  ...ProductsStack,
  ...AuthStack
}
const presentationScreenOption = ({ route }) => ({
  presentation: 'modal',
  headerShown: !0,
  headerTitle: GetScreenTitle(route.name),
  headerTitleAlign: 'center'
})

function RootStack ({ token, ...props }) {
  const name = 'App'
  return (
    <Stack.Navigator
      {...Props} initialRouteName={name}
    >
      <Stack.Group screenOptions={{ headerShown: !1 }}>
        <Stack.Screen
          key='App'
          name='App'
          component={TabNavigator}
        />

        {Object.entries(ActionScreens).map(([name, component]) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
          />))}
      </Stack.Group>

      <Stack.Group
        screenOptions={presentationScreenOption}
      >
        {Object.entries(presentationScreens).map(([name, component]) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
          />))}

        <Stack.Screen
          name='ProductsScreen'
          component={ViewProductScreen}
        />
        <Stack.Screen
          name='ViewProductScreen'
          component={ViewProductScreen}
        />
      </Stack.Group>

    </Stack.Navigator>
  )
}

export default Connector(RootStack)
