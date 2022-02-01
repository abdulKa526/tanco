import React from 'react'
import Col from './Col'
import { StyleSheet } from 'react-native'

export default function Row ({ jContent = undefined, alignItems = undefined, style = {}, ...props }) {
  const elmStyle = StyleSheet.flatten([{ flexDirection: 'row' }, style])

  return (
    <Col
      {...props} style={elmStyle}
      alignItems={alignItems}
      jContent={jContent}
    />
  )
};
