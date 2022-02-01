/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Connector from '../Redux/Connector'

const AppButton = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor }) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(!0)
    return () => setReady(!1)
  }, [])

  if (!ready) return null
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {}
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },

  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17
  },

  text_SECONDARY: {
    color: '#3B71F3',
  },

  text_TERTIARY: {
    color: 'gray',
  },
});
export default Connector(AppButton)
