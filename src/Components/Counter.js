import React, { useState } from 'react'
import Connector from '../Redux/Connector'
import { Page } from '.'
import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native'

function Counter (props) {
  const [children, setChildren] = useState(0)

  return (
    <Page>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Pressable
            onPress={() => setChildren(Math.max(0, children - 1))}
            style={styles.button}
          >
            <Text style={styles.TextButton}>-</Text>
          </Pressable>

          <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{children}</Text>

          <Pressable
            onPress={() => setChildren(children + 1)}
            style={styles.button}
          >
            <Text style={styles.TextButton}>+</Text>
          </Pressable>
        </View>
      </View>
    </Page>
  )
}
const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center'
  },

  TextButton: {
    marginBottom: 7,
    fontSize: 20,
    color: '#474747'
  }
})
export default Connector(Counter)
