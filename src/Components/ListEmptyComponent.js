import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from './AppText'
import Connector from '../Redux/Connector'

class ListEmptyComponent extends Component {
  render () {
    return (
      <View style={styles.container} {...this.props}>
        <AppText style={styles.text}>{this.props.app.__('noData')}</AppText>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  text: {
    paddingTop: '15%',
    textAlign: 'center',
    fontSize: 19
  }
})

export default Connector(ListEmptyComponent)
