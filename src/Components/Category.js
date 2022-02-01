import React, { Component } from 'react'
import { RouteNavigator } from '../Navigator'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable
} from 'react-native'

class Category extends Component {
  render () {
    // const { navigation } = props
    return (
      <Pressable
        // onPress={() => RouteNavigator.products.view(navigation)}
      >
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Image
              source={this.props.imageUri}
              style={styles.image}
            />

            <View style={styles.descriptionDetails}>
              <Text style={styles.description}>{this.props.name}</Text>
            </View>

          </View>
        </View>
      </Pressable>
    )
  }
}
export default Category

const styles = StyleSheet.create({
  container: {
    margin: 10
  },

  innerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 4
  },
  descriptionDetails: {
    height: 50,
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 10
  },

  image: {
    width: 230,
    height: 180,
    resizeMode: 'cover'
  },
  description: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700',
    bottom: 5,
    color: '#00aa5c'
  }
})
