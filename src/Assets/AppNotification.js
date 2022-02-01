// eslint-disable-next-line no-unused-vars
import React from 'react'
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false
//   })
// })
// Notifications.addNotificationResponseReceivedListener((event) => {
//   // console.log('addNotificationResponseReceivedListener')
// })
// Notifications.addNotificationReceivedListener((event) => {
//   // console.log("ReceivedListener", event)
//   // console.log("ReceivedListener")
// })

export async function sendPushNotification (expoPushToken, title, body, data, sound) {
  data = data || {}
  sound = sound || 'default'
  const message = {
    to: expoPushToken,
    sound,
    title,
    body,
    data
  }

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  })
}

export async function registerForPushNotificationsAsync () {
  let token
  if (Device.isDevice) {
    let finalStatus = null
    try {
      const permission = await Notifications.getPermissionsAsync() || {}
      finalStatus = permission?.status
      if (finalStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }
    } catch (e) {
      finalStatus = null
    }

    if (finalStatus === 'granted') {
      const r = await Notifications.getExpoPushTokenAsync()
      token = r?.data || null
    }
  }

  // if (Platform.OS === 'android') {
  //   Notifications.setNotificationChannelAsync('default', {
  //     name: 'default',
  //     importance: Notifications.AndroidImportance.MAX,
  //     vibrationPattern: [0, 250, 250, 250],
  //     lightColor: '#FF231F7C'
  //   })
  // }

  return token
}

export async function getPushNotificationsAsync () {
  let token
  if (Device.isDevice) {
    try {
      await Notifications.requestPermissionsAsync()
      const r = await Notifications.getExpoPushTokenAsync()
      token = r?.data || null
    } catch (e) {

    }
  }
  // console.log(token)
  return token || null
}

// eslint-disable-next-line no-unused-vars
export async function schedulePushNotification ({ title, body, data }) {
  data = data || {}
  await Notifications.scheduleNotificationAsync({
    content: {
      // title: "You've got mail! 📬",
      // body: 'Here is the notification body',
      // data: { data: 'goes here' }
      title,
      body,
      data
    },
    // trigger: { seconds: 2 }
    trigger: {}
  })
}
