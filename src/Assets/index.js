import { Colors } from './Colors'
import { StyleClasses, ThemeConfig } from './Theme'
import { _ } from './Lodash'
import { Alert, AlertMessage, ConfirmMessage } from './MessagesAlerts'

import * as IntentLauncher from 'expo-intent-launcher'
import Constants from 'expo-constants'
import { Platform, Linking } from 'react-native'

export async function OpenAppSettings () {
  const pkg = Constants.manifest.releaseChannel
    ? Constants.manifest.android.package
    : 'host.exp.exponent'

  if (Platform.OS === 'ios') {
    await Linking.openURL('app-settings:')
  } else {
    await IntentLauncher.startActivityAsync(
      IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
      { data: `package:${pkg}` }
    )
  }
}

export const isProduction = process.env.NODE_ENV !== 'development'

export {
  Alert,
  AlertMessage,
  ConfirmMessage,

  Colors,
  ThemeConfig,
  StyleClasses,
  _
}
