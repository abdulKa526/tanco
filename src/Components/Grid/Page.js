import React, { useEffect, useState } from 'react'
import Connector from '../../Redux/Connector'
import Header from './Header'
import { View, ScrollView, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Col from './Col'

function Page (props) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(!0)
    return () => setReady(!1)
  }, [])

  if (!ready) return null

  return (
    <><ScrollView {...props} /></>
  )
}

export default Connector(Page)
