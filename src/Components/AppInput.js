import React, { useEffect, useState, useMemo } from 'react'
import { Input } from 'react-native-elements'
import Connector from '../Redux/Connector'
import Col from './Grid/Col'
import AppText from './AppText'
import Row from './Grid/Row'

function AppInput ({ name, placeholder, label, required = !1, value, textInfo, errors = {}, secureTextEntry = !1, ...props }) {
  const [ready, setReady] = useState(false)
  const { __, _errorMessage } = props

  const errorMessage = useMemo(() => _errorMessage(errors, name), [errors])
  const hasError = useMemo(() => _errorMessage(errors, name) !== undefined, [errors])
  const hasTextInfo = useMemo(() => textInfo !== undefined && textInfo !== null && textInfo.length > 0, [textInfo])

  let string = ''
  if (name) {
    string = __(name)
    string && !placeholder && (placeholder = `${__('enter_form')}${string}`)
    string && !label && (label = string)
  }
  label && required && (label += ' *')

  useEffect(() => {
    setReady(!0)
    return () => setReady(!1)
  }, [])

  if (!ready) return null
  return (
    <Col my={5}>
      <Input
        label={label}
        placeholder={placeholder}
        errorMessage={errorMessage}
        renderErrorMessage={hasError}
        textAlign={props.app.textAlign}
        errorStyle={{
          textAlign: 'left',
          color: 'red'
        }}
        textContentType={name}
        importantForAutofill='yes'
        secureTextEntry={secureTextEntry}
        {...props}
      />
      <Row px={10}>
        {hasTextInfo && <AppText>{textInfo}</AppText>}
      </Row>
    </Col>
  )
}

export default Connector(AppInput)
