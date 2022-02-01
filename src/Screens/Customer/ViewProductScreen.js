import React, { useState } from 'react'
import Connector from '../../Redux/Connector'
import { RouteNavigator } from '../../Navigator'
import { Page, AppText, Col, Row, AppButton, AppInput } from '../../Components'
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  Pressable,
  StyleSheet
} from 'react-native'
const example = []
for (let i = 0; i <= 10; i++) {
  example.push({ text: 'text' })
}

function ViewProductScreen (props) {
  const { navigation } = props
  const [children, setChildren] = useState(0)

  return (
    <Page>
      <Pressable onPress={() => RouteNavigator.products.list}>
        <ScrollView>
          <Col px={10}>
            <Text style={{ fontSize: 20, marginVertical: 5 }}>Pick's for Today</Text>
            {example.map((value, index, array) =>
              <Col key={index.toString()}>
                <View style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', padding: 7, borderRadius: 10, height: 100 }}>
                  <View>
                    <AppText style={{ fontWeight: '700' }}>Diesel (500 liters)</AppText>
                    <AppText>Tanko</AppText>
                  </View>
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                      <Pressable
                        onPress={() => setChildren(Math.max(0, children - 1))}
                        style={styles.button}
                      >
                        <Text style={styles.TextButton}>-</Text>
                      </Pressable>

                      <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{children}</Text>

                      <Pressable
                        onPress={() => setChildren(children + 1)}
                        style={styles.button}
                      >
                        <Text style={styles.TextButton}>+</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </Col>
            )}

          </Col>
        </ScrollView>
      </Pressable>
    </Page>
  )
}
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey'
  },
  TextButton: {
    marginBottom: 7,
    fontSize: 20,
    color: '#474747'
  }
})
export default Connector(ViewProductScreen)
