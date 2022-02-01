import * as React from 'react'
import { AppText, Col } from '../Components'
import { __ } from '../Translations'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

export const GetScreenTitle = routeName => __(`ScreensTitle.${routeName}`)
export const GetHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? GetScreenTitle(route.name)
  return GetHeaderText(routeName || route.name)
}

// export const GetHeaderText = route => (<AppText style={{ fontSize: 21 }}>{GetHeaderTitle(route)}</AppText>)
export const GetHeaderText = text => (
  <Col><AppText style={{ fontSize: 21 }}>{text}</AppText></Col>
)
// export const GetHeaderTitle = routeName => GetHeaderText(GetScreenTitle(routeName))

export const isReadyRef = React.createRef()

export const navigationRef = React.createRef()

export function navigation (name, params) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    // if (method) {
    //   console.log(navigationRef.current)
    //   // navigationRef.current[method](name, params)
    // }
    // else {
    navigationRef.current.navigate(name, params)
    // }
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export const RouteNavigator = {
  toggleLocale: navigation => navigation.navigate('ToggleLocale'),
  app: {
    root: navigation => navigation.replace('App'),
    aboutUs: (navigation, params) => navigation.navigate('AboutUs', params),
    termsAndConditions: (navigation, params) => navigation.navigate('TermsAndConditions', params),
    privacyPolicy: (navigation, params) => navigation.navigate('PrivacyPolicy', params)
  },
  auth: {
    signOut: () => navigation('SignOut'),
    signIn: () => navigation('SignIn'),
    loginBackground: ({ token, user }) => navigation('LoginBackground', { token, user }),
    signUp: () => navigation('SignUp'),
    forgotPassword: () => navigation('ForgotPassword'),
    forgotPasswordCode: ({ countdown, mobile, message }, navigation) => navigation.replace('ForgotPasswordCode', { countdown, mobile, message }),
    resetPassword: (navigation, { mobile, verification_code }) => navigation.replace('ResetPassword', { mobile, verification_code })
  },
  products: {
    cart: (navigation, params) => navigation.navigate('cartDetailsScreen', params),
    list: (navigation, params) => navigation.navigate('ProductsList', params),
    view: (navigation, id) => navigation.navigate('ViewProduct', {
      params: { id }
    })
  }
}
