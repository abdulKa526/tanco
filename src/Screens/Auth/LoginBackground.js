import Connector from '../../Redux/Connector'
import React, { useEffect } from 'react'
import { LoadingView } from '../../Components'

let ready = false

function LoginBackground ({ route, ...props }) {
  const { params } = route
  let unsubscribe

  const login = async form => {
    if (!form || !ready || !form?.token) return
    const { token, user } = form
    if (!token) return

    console.log('Succewss', { token, user })
    props.signIn({ token, user })
  }

  useEffect(() => {
    ready = !0
    if (params?.token) {
      unsubscribe = setTimeout(() => login(params), 500)
    }

    return () => {
      ready = false
      unsubscribe && clearTimeout(unsubscribe)
    }
  }, [])

  return (<LoadingView size={50} />)
}

export default Connector(LoginBackground)
