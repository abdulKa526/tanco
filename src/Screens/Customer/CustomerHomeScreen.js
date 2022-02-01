import React, { useState } from 'react'
import Connector from '../../Redux/Connector'
import Header from '../../Components/Grid/Header'
import { RouteNavigator } from '../../Navigator'
import { Page, AppText, Col, Row, AppButton, AppInput } from '../../Components'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ViewProductScreen from './ViewProductScreen'
import Category from '../../Components/Category'
import ImagesSlider from '../../Assets/imagesSlider'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Pressable
} from 'react-native'

function CustomerHomeScreen (props) {
  const { app, navigation } = props
  const [selectValue, setSelectValue] = useState(5)
  const [errors, setErrors] = useState({
    name: [
      'Name invalid',
      'Name must be Valid name'
    ]
  })

  return (
    <Page>
      <Header />
      <Row
        alignItems='center'
        jContent='space-between'
      />
      <View style={{ flexDirection: 'row', marginVertical: 10, right: 5 }}>
        <EvilIcons style={{ marginVertical: 15, marginHorizontal: 10 }} name='location' size={23} color='black' />
        <View>
          <View style={{ flexDirection: 'row', top: 5 }}>
            <Text style={{ fontWeight: '700' }}>Delivery Location</Text>
            <MaterialIcons style={{ bottom: 3, marginHorizontal: 4 }} name='keyboard-arrow-down' size={25} color='black' />
          </View>
          <Text>Riyadh, Saudi Arabia</Text>
        </View>
      </View>
      <Col>
        <ImagesSlider style={{ borderRadius: 5 }} />
      </Col>
      <Col
        px={10}
        pt={5}
      >
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Looking for large quantities?</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>

          <View style={{ height: 50, width: 50, marginHorizontal: 20 }}>
            <Image
              style={{ height: 50, width: 50 }}
              source={require('../../../assets/p1.jpg')}
            />
            <Text style={{ fontSize: 7, textAlign: 'center' }}>Diesel</Text>
          </View>

          <View style={{ height: 50, width: 50, marginHorizontal: 20 }}>
            <Image
              style={{ height: 50, width: 50 }}
              source={require('../../../assets/p2.jpg')}
            />
            <Text style={{ fontSize: 7, textAlign: 'center' }}>Petrol 91</Text>
          </View>

          <View style={{ height: 50, width: 50, marginHorizontal: 20 }}>
            <Image
              style={{ height: 50, width: 50 }}
              source={require('../../../assets/p3.jpg')}
            />
            <Text style={{ fontSize: 7, textAlign: 'center' }}>Petrol 95</Text>
          </View>

          <View style={{ height: 50, width: 50, marginHorizontal: 20 }}>
            <Image
              style={{ height: 50, width: 50 }}
              source={require('../../../assets/p4.jpg')}
            />
            <Text style={{ fontSize: 7, textAlign: 'center' }}>Gas</Text>
          </View>

        </View>
        <Pressable onPress={() => RouteNavigator.products.view(navigation)}>
          <ViewProductScreen />
        </Pressable>
      </Col>
    </Page>
  )
}

export default Connector(CustomerHomeScreen)
