// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RootReducers from './Reducers'

const rootConfig = {
  key: '@root',
  // blacklist: ['app'],
  whitelist: ['app'],
  storage: AsyncStorage,
  timeout: null
}

const persistedReducer = persistReducer(rootConfig, RootReducers)

export default () => {
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)
  return { store, persistor }
}
