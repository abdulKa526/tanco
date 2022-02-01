import Connector from '../../Redux/Connector'
import React from 'react'
import { LoadingView } from '../../Components'

function ToggleLocaleScreen (props) {
  React.useEffect(() => {
    props.toggleLocale(!0)
  }, [])

  return (<LoadingView size={50} />)
}

export default Connector(ToggleLocaleScreen)
