/* eslint-disable react/jsx-indent-props */
import React from 'react'
import { StyleSheet, View, Linking, Text } from 'react-native'
import { Header as HeaderRNE, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Connector from '../../Redux/Connector'

function Header ({ title, ...props }) {
  // console.log(useNavigation().dispatch())
  const docsNavigate = () => {
    Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`)
  }

  const playgroundNavigate = () => {
    // props.navigation.dispatch(DrawerActions.toggleDrawer())
  }
  // const toggleDrawer = () => {
  //   useNavigation().dispatch(DrawerActions.toggleDrawer())
  // }

  return (
    <HeaderRNE
      leftComponent={
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Tanko</Text>
        </TouchableOpacity>
      }
      rightComponent={
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            onPress={playgroundNavigate}
          >
            <Icon
              type='simple-line-icon'
              name='basket'
              color='white'
              size={33}
            />
            <Text style={{ backgroundColor: 'white', color: '#00aa5c', borderRadius: 15, right: 7, paddingHorizontal: 8, height: 25, fontSize: 18, fontWeight: 'bold' }}>0</Text>
          </TouchableOpacity>
        </View>
      }
      centerComponent={{ text: title, style: styles.heading }}
    />
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 7
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5
  }
})

// function Header (props) {
//   const [ready, setReady] = useState(false)
//
//   useEffect(() => {
//     setReady(!0)
//     return () => setReady(!1)
//   }, [])
//
//   if (!ready) return null
//
//   return (
//     // <SafeAreaView {...props}>
//     <Header />
//     // </SafeAreaView>
//   )
// }

export default Connector(Header)
