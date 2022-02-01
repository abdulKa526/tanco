/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react'
import { View, Text, ImageBackground, ScrollView, BackHandler, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../Components/AppButton'
import Connector from '../../Redux/Connector'
import { Page, AppText, Col, Counter } from '../../Components'
import styles from './stylesDetails'

function handleBackButtonClick () {
  const navigation = useNavigation()
  navigation.goBack()
  return true
}
function CartDetails (props) {
  const { app } = props
  const days = 5
  const post = props.post

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick)
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick)
    }
  }, [])

  return (
    <Page
      stickyHeaderIndices={[2]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.imageButtons}>
          <AntDesign onPress={handleBackButtonClick} style={styles.back} name='back' size={19} color='black' />
          <AntDesign style={styles.like} name='hearto' size={19} color='black' />
        </View>

        {/* Image */}
        <View styles={{ flexDirection: 'row' }}>
          <View>
                <Image
                style={styles.image}
                source={require('../../../assets/p1.jpg')}
                />
          </View>
          <View>
                <Text>Diesel (500 liters)</Text>
                <Counter />
          </View>
        </View>

        <View style={styles.info}>
          {/* Title and Location */}
          <Text style={styles.review}> Diesel (500 liter) </Text>
          <Text style={styles.review}> Tanko </Text>
          <Text style={{ marginVertical: 5, color: 'white', fontSize: 15, borderRadius: 15, backgroundColor: '#00aa5c', width: 90, padding: 2 }}> Deliverable </Text>

          <View style={{ borderBottomColor: '#C3C3C3', borderBottomWidth: 1, marginVertical: 15 }} />

          {/* Old price & new price */}
          <Text style={styles.prices}>
            <Text style={styles.oldPrice}>${post && post.oldPrice} </Text>
            <Text style={styles.price}> ${post && post.newPrice}</Text>
            / night
          </Text>

          {/* Total price */}
          <Text style={styles.totalPrice}>${post && post.newPrice * days} total</Text>

          <Text style={styles.LongDescripton}>{post && post.description}</Text>

          <View style={{ borderBottomColor: '#C3C3C3', borderBottomWidth: 1, marginVertical: 15 }} />

          <CustomButton
            text='Add to cart'
            type='TERTIARY'
            bgColor='#00aa5c'
            fgColor='white'
          />

        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View><Text>my text</Text></View>
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}><Text>My fixed footer</Text></View>
      </View>

    </Page>
  )
};
export default Connector(CartDetails)
