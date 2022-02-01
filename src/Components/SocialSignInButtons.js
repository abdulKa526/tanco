/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, Linking } from 'react-native'
import CustomButton from '../CustomButton'
import { withOAuth } from 'aws-amplify-react-native/dist/Auth'

const SocialSignInButtons = (props) => {
  const onSignInGoogle = () => {
    console.warn('onSignInFacebook')
  }

  const onSignInFacebook = () => {
    console.warn('onSignInFacebook')
  }

  const onSignInApple = () => {
    console.warn('onSignInApple')
  }

  return (
    <>
      <CustomButton
        text='Sign In with Facebook'
        onPress={onSignInFacebook}
        bgColor='#E7EAF4'
        fgColor='#4765A9'
      />

      <CustomButton
        text='Sign In with Google'
        onPress={onSignInGoogle}
        bgColor='#FAE9EA'
        fgColor='#DD4D44'
      />

      <CustomButton
        text='Sign In with Apple'
        onPress={onSignInApple}
        bgColor='#e3e3e3'
        fgColor='#363636'
      />
    </>
  )
}

export default withOAuth(SocialSignInButtons)
