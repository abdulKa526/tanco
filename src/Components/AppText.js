import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Connector from '../Redux/Connector'

function AppText ({ numberOfLines, green = !1, red = !1, style = {}, white = !1, center = !1, justify = !1, ...props }) {
  const { colors } = props.theme
  const [ready, setReady] = useState(false)

  const textAlign = justify ? 'justify' : center ? 'center' : 'left'
  // console.log(textAlign)
  const Styles = StyleSheet.create({
    txt: {
      textAlign
    }
  })
  const _s = { ...Styles.txt }
  if (white) { _s.color = colors.white }
  if (red) { _s.color = colors.error }
  if (green) { _s.color = colors.green }
  const Style = StyleSheet.flatten([_s, style])
  useEffect(() => {
    setReady(!0)
    return () => setReady(!1)
  }, [])

  if (!ready) return null
  return (
    <Text
      {...props} style={Style}
      numberOfLines={numberOfLines}
    />
  )
}

export default Connector(AppText)
