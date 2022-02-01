import { useEffect, useRef } from 'react'
import { AppState } from 'react-native'
import * as Notifications from 'expo-notifications'

export default function (props) {
  const appState = useRef(AppState.currentState)

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange)

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange)
    }
  }, [])

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
            nextAppState === 'active'
    ) {
      try {
        Notifications.setBadgeCountAsync(0).then(r => r)
      } catch (e) {

      }
      // console.log('App has come to the foreground!')
    }

    appState.current = nextAppState
    // if(nextAppState === 'active'){}
    // console.log('AppState', appState.current)
  }

  return null
}
