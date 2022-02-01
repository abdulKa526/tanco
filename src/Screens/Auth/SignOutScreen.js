import React from 'react'
import Connector from '../../Redux/Connector'
import { Col, LoadingView } from '../../Components'
import { getPushNotificationsAsync } from '../../Assets/AppNotification'

function SignOutScreen (props) {
  React.useEffect(() => {
    setTimeout(async () => {
      let push_token
      try {
        push_token = await getPushNotificationsAsync() || null
      } catch (e) {

      }
      props.signOut(push_token)
    }, 500)
  }, [])

  return (
    <Col flex={1}>
      <LoadingView size={50} />
    </Col>
  )
}

export default Connector(SignOutScreen)
