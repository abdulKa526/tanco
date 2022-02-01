import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Page, AppText, Col, Row, AppButton, AppInput } from '../Components'
import { SliderBox } from "react-native-image-slider-box";
export default class ImagesSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assets/pic1.jpg'),
        require('../../assets/petrol.jpg'),
        require('../../assets/pic1.jpg'),
        require('../../assets/petrol.jpg')
      ]
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={200}
          // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor='#00aa5c'
          inactiveDotColor='#90A4AE'
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          paginationBoxStyle={{
            borderRadius: 10,
            paddingVertical: 10
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: 'rgba(128, 128, 128, 0.92)'
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});