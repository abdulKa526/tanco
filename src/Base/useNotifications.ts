import * as React from 'react'
import { MutableRefObject } from 'react'
import * as Notifications from 'expo-notifications'
import { ANDROID } from '../util'
import { MAIN_COLORS } from '../Assets/Colors'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: !0,
    shouldPlaySound: !0,
    shouldSetBadge: !0
  })
})

if (ANDROID) {
  Notifications.setNotificationChannelAsync('default', {
    name: 'default',
    importance: Notifications.AndroidImportance.MAX,
    vibrationPattern: [0, 250, 250, 250],
    lightColor: MAIN_COLORS.primary
  }).then(r => r)
}

export default function (props) {
  const notificationListener: MutableRefObject<any> = React.useRef()
  const responseListener: MutableRefObject<any> = React.useRef()

  React.useEffect(() => {
    try {
      Notifications.setBadgeCountAsync(0).then(r => r)
    } catch (e) {

    }
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      // console.log('notification --1')
    })

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      const res = response?.notification?.request?.content
      if (res.data) {
        const { data } = res
        // console.log('props.navigation', props.navigation)
        if (data.chat_id) {
          // item?.docId
          // RouteNavigator.chat(props.navigation, { item: { docId: data.chat_id } })
        }
      }
    })

    return () => {
      try {
        Notifications.removeNotificationSubscription(notificationListener.current)
        Notifications.removeNotificationSubscription(responseListener.current)
      } catch (e) {

      }
    }
  }, [])

  return null
}
