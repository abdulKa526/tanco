import React from 'react'
import Connector from '../../Redux/Connector'
import { ActivityIndicator } from 'react-native'
import { AppContext } from '../../context'

function ActivityComponent ({ animating = !0, size = 30, ...props }) {
  const { theme: { colors } } = React.useContext(AppContext)
  const def = {
    animating,
    size,
    color: colors.primary
  }
  return (<ActivityIndicator {...def} {...props} />)
}

export default Connector(ActivityComponent)
