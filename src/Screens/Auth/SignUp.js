import React, { useState } from 'react'
import Connector from '../../Redux/Connector'
import { Col, Page, AppInput, AppButton } from '../../Components'
import { getPushNotificationsAsync } from '../../Assets/AppNotification'
import ApiMethods from '../../Assets/ApiMethods'
import { RouteNavigator } from '../../Navigator'

function SignInScreen (props) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [loading, setLoading] = useState()
  const [errors, setErrors] = useState({})
  let push_token
  const { __ } = props
  const _login = (token, user) => {
    if (token && user) {
      RouteNavigator.auth.loginBackground({ token, user })
    }
  }
  const login = async () => {
    _login('Token', { id: 1 })
    if (loading) return

    setLoading(!0)
    setErrors({})
    const form = { username, password, push_token }

    try {
      // Data From API
      const { _data: user, data, _success } = await ApiMethods.login(form)
      if (_success === !0) {
        _login(data?.token, user)
      } else {
        alert(props.__('messages.loginError'))
      }
    } catch (e) {
      const { _message: errorMessage, _errors } = e
      const m = errorMessage || e?.message || props.__('messages.loginError')
      m && alert(m)
      setErrors(_errors || {})
    } finally {
      setLoading(!1)
    }
  }
  React.useEffect(() => {
    setTimeout(async () => {
      try {
        push_token = await getPushNotificationsAsync() || null
      } catch (e) {

      }
      console.log(push_token)
      // props.signOut(push_token)
    }, 500)
  }, [])

  return (
    <Page>
      <Col flex={1}>
        <AppInput
          name='username'
          value={username}
          onChangeText={v => setUsername(v)}
          errors={errors}
        />
        <AppInput
          name='email'
          value={email}
          onChangeText={v => setEmail(v)}
          secureTextEntry
          errors={errors}
        />
        <AppInput
          name='password'
          value={password}
          onChangeText={v => setPassword(v)}
          secureTextEntry
          errors={errors}
        />
        <AppInput
          name='password'
          value={password}
          onChangeText={v => setPassword(v)}
          secureTextEntry
          errors={errors}
        />
        <Col px={20}>
          <AppButton
            loading={loading}
            text={__('signIn')}
            onPress={login}
          />
        </Col>
      </Col>
    </Page>
  )
}

export default Connector(SignInScreen)
