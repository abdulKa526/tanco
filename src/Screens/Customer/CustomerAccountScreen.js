import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Connector from '../../Redux/Connector'
import { Page, AppText, Col, Row, AppButton, AppInput } from '../../Components'
import { RouteNavigator } from '../../Navigator'
import Header from '../../Components/Grid/Header'
import { ExampleSelect } from '../../Example/TypesSelect'
import AppSelect from '../../Components/AppSelect'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function CustomerAccountScreen (props) {
  const { app, navigation } = props
  const { theme } = props
  const [selectValue, setSelectValue] = useState(5)
  const [errors, setErrors] = useState({
    name: [
      'Name invalid',
      'Name must be Valid name'
    ]
  })
  const versionStyle = {
    ...styles.versionText,
    color: theme.colors.text
  }
  return (
    <Page>
      <Header />
      <Col
        px={10}
        pt={5}
      >
        <AppText style={{
          fontSize: 33,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 10
        }}
        >Your Profile
        </AppText>

        <AppText style={{
          fontSize: 20,
          color: '#878787',
          marginBottom: 35,
          marginVertical: 4
        }}
        >Log in to start ordering your next order.
        </AppText>

        <Col>
          <AppButton
            onPress={() => RouteNavigator.auth.signIn(navigation)}
            text='Log in'
            bgColor='#00aa5c'
          />
          <AppText
            style={{
              fontSize: 12,
              marginVertical: 10,
              marginBottom: 20
            }} numberOfLines={2}
          >Don't have an account? <Text onPress={() => RouteNavigator.auth.signUp(navigation)} style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Sign Up</Text>
          </AppText>

          {/* Buttons */}

          <Pressable
            onPress={() => RouteNavigator.toggleLocale(navigation)}
            style={{
              borderBottomColor: '#C3C3C3',
              borderBottomWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 48,
              width: '100%',
              marginVertical: 10
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <MaterialIcons name='language' size={25} color='black' />
              <Text style={{
                color: 'black',
                fontSize: 17,
                fontWeight: 'bold',
                marginHorizontal: 15
              }}
              >{props.__(props.app.localeReverse)}
              </Text>
            </View>
            <View>
              <MaterialIcons name='keyboard-arrow-right' size={25} color='black' />
            </View>
          </Pressable>

          <Pressable
            onPress={() => RouteNavigator.toggleLocale(navigation)}
            style={{
              borderBottomColor: '#C3C3C3',
              borderBottomWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 48,
              width: '100%',
              marginVertical: 10
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <MaterialIcons name='language' size={25} color='black' />
              <Text style={{
                color: 'black',
                fontSize: 17,
                fontWeight: 'bold',
                marginHorizontal: 15
              }}
              >{props.__(props.app.localeReverse)}
              </Text>
            </View>
            <View>
              <MaterialIcons name='keyboard-arrow-right' size={25} color='black' />
            </View>
          </Pressable>

          <Pressable
            onPress={() => RouteNavigator.toggleLocale(navigation)}
            style={{
              borderBottomColor: '#C3C3C3',
              borderBottomWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 48,
              width: '100%',
              marginVertical: 10
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <MaterialIcons name='menu-book' size={25} color='black' />
              <Text style={{
                color: 'black',
                fontSize: 17,
                fontWeight: 'bold',
                marginHorizontal: 15
              }}
              >Terms of Service
              </Text>
            </View>
            <View>
              <MaterialIcons name='keyboard-arrow-right' size={25} color='black' />
            </View>
          </Pressable>

          <Pressable
            onPress={() => RouteNavigator.toggleLocale(navigation)}
            style={{
              borderBottomColor: '#C3C3C3',
              borderBottomWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 48,
              width: '100%',
              marginVertical: 10
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <MaterialIcons name='language' size={25} color='black' />
              <Text style={{
                color: 'black',
                fontSize: 17,
                fontWeight: 'bold',
                marginHorizontal: 15
              }}
              >{props.__(props.app.localeReverse)}
              </Text>
            </View>
            <View>
              <MaterialIcons name='keyboard-arrow-right' size={25} color='black' />
            </View>
          </Pressable>
          <View style={styles.versionContainer}>
            <Text style={versionStyle}>Version {props.version}</Text>
          </View>
        </Col>
      </Col>
    </Page>
  )
}
const styles = StyleSheet.create({
  versionContainer: {
    paddingVertical: '2%'
  },
  versionText: {
    textAlign: 'left',
    fontSize: 13,
    color: 'black'
  }
})
export default Connector(CustomerAccountScreen)
