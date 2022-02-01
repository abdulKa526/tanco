import React from 'react'
import Connector from '../Redux/Connector'
import { Switch, FAB, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Button } from 'react-native'
import AppInput from '../Components/AppInput'
import AppText from '../Components/AppText'

function TestScreen (props) {
  // console.log(props.app.locale)
  // if( props.app.locale === 'en'){
  //   props.toggleLocale();
  // }
  // console.log(props.app.locale)
  const [checked, setChecked] = React.useState(!0)
  const [visible, setVisible] = React.useState(!0)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          padding: 10
        }}
      >
        <View />
        <View>
          <Button
            onPress={() => props.toggleLocale()}
            title='toggleLocale'
            buttonStyle={{
              borderColor: 'rgba(78, 116, 289, 1)'
            }}
            type='outline'
            raised
            titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10
            }}
          />
        </View>
        <View>
          <AppInput
            placeholder='INPUT WITH ICON'
            leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
            style={{ textAlign: 'right' }}
          />
        </View>
        <View>
          <AppText>{props.app.locale}</AppText>
          <Switch
            value={checked}
            onValueChange={(value) => setChecked(value)}
          />
        </View>

        <>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 5,
              flexGrow: 1
            }}
          >
            <Text style={{ color: '#397af8', paddingVertical: 10 }}>
              Small Size
            </Text>
            <FAB
              loading
              visible={visible}
              icon={{ name: 'add', color: 'white' }}
              size='small'
            />
            <Text style={{ color: '#397af8', paddingVertical: 10 }}>
              Large Size
            </Text>
            <FAB
              visible={visible}
              icon={{ name: 'add', color: 'white' }}
              color='green'
            />
            <Text style={{ color: '#397af8', paddingVertical: 10 }}>
              Primary Color
            </Text>
            <FAB
              visible={visible}
              title='Navigate'
              upperCase
              icon={{ name: 'place', color: 'white' }}
            />

            <Text style={{ color: '#397af8', paddingVertical: 10 }}>Disabled</Text>

            <FAB
              visible={visible}
              disabled
              title='Extended'
              icon={{
                name: 'place',
                color: 'white'
              }}
            />
            <FAB
              visible={visible}
              onPress={() => setVisible(!visible)}
              placement='right'
              title='Hide'
              icon={{ name: 'delete', color: 'white' }}
              color='red'
            />
            <FAB
              visible={!visible}
              onPress={() => setVisible(!visible)}
              placement='left'
              title='Show'
              icon={{ name: 'edit', color: 'white' }}
              color='green'
            />
          </View>
        </>

      </View>
    </SafeAreaView>
  )
}

/*

class TestScreen extends React.Component {

  render () {
    let checked = 0
    return (
      <SafeAreaView>
        <View>
          <Switch
            value={checked}
            onValueChange={(value) => checked = value}
          />
        </View>
      </SafeAreaView>)
  }
}
*/

export default Connector(TestScreen)
