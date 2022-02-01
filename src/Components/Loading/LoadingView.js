import React from 'react'
import Connector from '../../Redux/Connector'
import ActivityComponent from './ActivityComponent'
import Col from '../Grid/Col'

function LoadingView (props) {
  return (
    <Col
      flex={1}
      jContent='center'
    ><ActivityComponent {...props} />
    </Col>
  )
}

export default Connector(LoadingView)
