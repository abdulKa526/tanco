import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import { AppRegistry } from 'react-native'
import * as Linking from 'expo-linking'
import { enableScreens } from 'react-native-screens'
import { expo } from './app.json'
import App from './src'
import { Provider } from 'react-redux'
import configureStore from './src/Redux/Store'
import { AppearanceProvider } from 'react-native-appearance'
import { setAxiosAppName, setAxiosAppVersion } from './src/Assets/Axios'
import * as WebBrowser from 'expo-web-browser'
import { PersistGate } from 'redux-persist/integration/react'

WebBrowser.maybeCompleteAuthSession()

// setI18nConfig()
enableScreens()
setAxiosAppVersion(expo.version)
setAxiosAppName(expo.name)
const { persistor, store: Store } = configureStore()

export default function Root (props) {
  const [ready, setReady] = useState(!1)

  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    try {
      WebBrowser.warmUpAsync().then(r => r)
      // exp://127.0.0.1:19000/--/path/into/app?hello=world
      // exp://exp.host/@comp/with-webbrowser-redirect
      // exp://exp.host/@comp/comp/--/path
      // console.log(Linking.createURL())
      Linking.addEventListener('url', event => {
      })
      const ini = Linking.getInitialURL()
      if (ini) {
        // ini.then(r => {
        //   if (r) {
        //     const data = Linking.parse(r)
        //     console.log('getInitialURL', data)
        //   }
        //   // alert(32)
        // })
      }
    } catch (e) {
      e?.message && alert(e.message)
    } finally {
      setReady(!0)
    }

    return () => {
      try {
        setReady(!1)
        WebBrowser.coolDownAsync().then(r => r)
      } catch (e) {
      }
    }
  }, [])

  if (!ready) {
    return null
  }

  return (
    <Provider store={Store}>
      <AppearanceProvider>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <App {...props} version={expo.version} />
        </PersistGate>
      </AppearanceProvider>
    </Provider>
  )
}

AppRegistry.registerComponent(expo.name, () => Root)
