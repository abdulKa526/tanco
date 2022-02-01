import { Platform } from 'react-native'
import * as Network from 'expo-network'
import * as Updates from 'expo-updates'
import * as StoreReview from 'expo-store-review'
import Config from './Assets/Config'
import { __ as $t } from './Translations'

export const ANDROID = Platform.OS === 'android'

export const IOS = Platform.OS === 'ios'

export const checkNetwork = async () => {
  const r = await Network.getNetworkStateAsync()
  return r?.isConnected === !0
}

export const checkUpdates = async () => {
  if (process.env.NODE_ENV === 'development') {
    return !0
  }
  let result = !0
  let isAvailable = !1
  try {
    const update = await Updates.checkForUpdateAsync()
    isAvailable = update.isAvailable
    if (isAvailable) {
      result = !1
      alert($t('messages.updateAppText'))
      await Updates.fetchUpdateAsync()
    }
  } catch (e) {
    e?.message && alert(e.message)
  }

  try {
    isAvailable && await Updates.reloadAsync()
  } catch (e) {
    e?.message && alert(e.message)
  }

  return result
}

export const checkStoreReview = StoreReview.hasAction

export const isAvailableAsync = StoreReview.isAvailableAsync

export const requestReview = StoreReview.requestReview

export const fontFamily = Config.AppFontFamily
