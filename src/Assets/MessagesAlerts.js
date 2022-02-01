import React from 'react'

import { Alert as RNAlert } from 'react-native'
import { __ } from '../Translations'

const Alert = (title = '', message = '', buttons = [], cancelable = false) =>
  RNAlert.alert(title, message, buttons, { cancelable })

const AlertMessage = (title = '', message = '', onPress = () => null) => Alert(title, message, [
  {
    text: __('ok'),
    onPress
  }
], false)
const ConfirmMessage = (onPress = () => null, OnCancel = () => null, message = __('areYourSure'), title = '') =>
  Alert(title, message, [
    { text: __('yes'), onPress },
    { text: __('no'), onPress: () => OnCancel ? OnCancel() : null }
  ], false)

export {
  Alert,
  AlertMessage,
  ConfirmMessage
}
