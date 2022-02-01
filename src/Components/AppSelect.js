import React, { useEffect, useState, useMemo } from 'react'
import { BottomSheet, ListItem } from 'react-native-elements'
import Connector from '../Redux/Connector'
import { Row, Col, AppButton } from './index'
import AppText from './AppText'

function AppSelect ({ onSelect, items = [], name, value, errors = {}, ...props }) {
  const [ready, setReady] = useState(false)
  const [isVisible, setIsVisible] = React.useState(!1)
  const { __, _errorMessage } = props

  const errorMessage = useMemo(() => _errorMessage(errors, name), [errors])
  const hasError = useMemo(() => _errorMessage(errors, name) !== undefined, [errors])

  const getValue = React.useMemo(() => {
    if (value !== null && value !== undefined) {
      const i = items.find(e => e.value === value)
      return i ? i.text : value
    }
    return value
  }, [value, items])

  useEffect(() => {
    setReady(!0)
    return () => setReady(!1)
  }, [])
  const onPress = (item) => {
    if (onSelect) {
      onSelect(item)
    }
    setIsVisible(!1)
  }

  let string = ''
  if (name) {
    string = __(name)
  }
  const title = `${__('choose')}${string}`

  if (!ready) return null
  return (
    <Col>
      <Row>
        <Col>
          <AppButton
            onPress={() => setIsVisible(!0)}
            text={title}
          />
        </Col>
        <Col
          jContent='center'
          ps={5}
        >
          <AppText>{getValue}</AppText>
        </Col>
      </Row>
      <Row>
        {hasError &&
          <Col
            jContent='center'
            ps={5}
          >
            <AppText red>{errorMessage}</AppText>
          </Col>}
      </Row>
      <BottomSheet
        modalProps={{}}
        isVisible={isVisible}
      >
        {items.map((item, i) => (
          <ListItem
            key={i.toString()}
            onPress={() => onPress(item)}
          >
            <ListItem.Content>
              <ListItem.Title>{item.text}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
        <ListItem
          onPress={() => setIsVisible(!1)}
          containerStyle={{}}
        >
          <ListItem.Content>
            <ListItem.Title>
              <AppText red>{props.__('cancel')}</AppText>
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </BottomSheet>
    </Col>
  )
}

export default Connector(AppSelect)
