import React, { useCallback, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppContext } from './context'
import Connector from './Redux/Connector'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { isReadyRef, navigationRef } from './Navigator'
import RootStack from './Navigator/RootStack'
import { StatusBar } from 'expo-status-bar'
import useNotifications from './Base/useNotifications'
import * as Updates from 'expo-updates'
import { getUserAsync } from './Assets/Api'
import { checkNetwork, checkUpdates } from './util'
import SplashScreen from './Screens/Util/SplashScreen'
import useAppState from './Base/useAppState'

// react-native-elements Style
import { ThemeProvider as ElementsProvider } from 'react-native-elements'

let Results = !0

function App (props) {
  const [ready, setReady] = useState(false)
  const { app: { token, dark }, __ } = props
  const theme = props.theme
  const { statusBar, colors } = theme
  // console.log(props)
  // return null
  useNotifications(props)
  useAppState(props)

  const containerReady = useCallback(async () => {
    if (ready) {
      isReadyRef.current = true
    }
  }, [ready])

  async function prepare () {
    await new Promise((resolve, reject) => setTimeout(() => resolve({}), 2000))

    const setLocale = locale => props.setLocale({ locale, restart: !1 })
    const setFirstStart = () => props.setFirstStart()

    // Redux
    const { locale, token, firstStart } = props.app
    // console.log(token)

    // # Set Application locale
    setLocale(locale)

    try {
      if (firstStart === !1) {
        setFirstStart()
        await Updates.reloadAsync()
        Results = !1
        return
      }
    } catch (e) {

    }

    // Check network
    Results = await checkNetwork()
    if (!Results) {
      alert(__('errorNetworkAppText'))
      return
    }

    // App Updates
    Results = await checkUpdates()
    if (!Results) {
      return
    }

    // Check token
    if (token) {
      try {
        const { _data, _success } = await getUserAsync(token) || {}
        Results = _success === !0
        if (Results && Boolean(_data)) {
          props.setUser(_data)
        } else {
          props.signOut()
          Results = !1
        }
      } catch (e) {
        Results = !1
        props.signOut()
        await Updates.reloadAsync()
      }
    }

    setReady(Results)
  }

  useEffect(() => {
    prepare()
    return () => {
      isReadyRef.current = false
      setReady(!1)
    }
  }, [])

  if (!ready) {
    return (
      <SplashScreen {...props} />
    )
  }

  return (
    <>
      <StatusBar
        networkActivityIndicatorVisible
        translucent
        style={statusBar.style}
        backgroundColor={colors.header}
        animated
        hidden={false}
      />
      <AppContext.Provider value={{ ...props, ...props.app }}>
        <ElementsProvider
          theme={theme}
          useDark={dark}
        >
          <SafeAreaProvider>
            <NavigationContainer
              theme={theme}
              ref={navigationRef}
              onReady={containerReady}
            >
              <RootStack token={token} />
            </NavigationContainer>
          </SafeAreaProvider>
        </ElementsProvider>
      </AppContext.Provider>
    </>
  )
}

export default Connector(App)
