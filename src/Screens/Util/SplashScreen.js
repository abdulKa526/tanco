import React from 'react'
import { ActivityIndicator, Dimensions, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Connector from '../../Redux/Connector'

const { width: WINDOW_WIDTH } = Dimensions.get('window')

function SplashScreen (props) {
  const { theme, dark } = props

  const source = dark ? require('../../../assets/dark.png') : require('../../../assets/light.png')
  const SafeStyle = {
    ...styles.safeArea,
    backgroundColor: theme.colors.background
  }
  const versionStyle = {
    ...styles.versionText,
    color: theme.colors.text
  }
  return (
    <SafeAreaView style={SafeStyle}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            style={styles.image}
            source={source}
            resizeMode='contain'
          />
        </View>
        <View>
          <ActivityIndicator
            size='large'
            color={theme.colors.primary}
          />
        </View>
        <View style={styles.versionContainer}>
          <Text style={versionStyle}>Version: {props.version}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
    // backgroundColor: color(Colors.primary).lighten(1.5).hex()
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: '36%'
  },
  image: {
    width: WINDOW_WIDTH,
    height: 100
  },
  versionContainer: {
    paddingVertical: '5%',
    alignSelf: 'center'
  },
  versionText: {
    textAlign: 'center',
    fontSize: 18
  }
})
export default Connector(SplashScreen)
