import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { StyleClasses } from '../../Assets'
import Connector from '../../Redux/Connector'

function Col ({ jContent, alignItems, style = {}, ...props }) {
  const [ready, setReady] = useState(false)
  const styleClasses = StyleClasses({ jContent, alignItems, ...props })
  const elmStyle = StyleSheet.flatten([styleClasses, style])

  useEffect(() => {
    setReady(!0)
    return () => setReady(!1)
  }, [])

  if (!ready) return null

  return (<View {...props} style={elmStyle} />)
}

export default Connector(Col)
