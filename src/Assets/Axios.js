import Qs from 'qs'
import axios from 'axios'

// const SERVER_API = 'http://192.168.1.34/v2/'
const SERVER_API = process.env.NODE_ENV === 'development' ? 'https://localhost/api' : 'https://localhost/api'

const parseFulfilled = response => {
  if (response) {
    response._data = response?.data?.data
    response._message = response?.data?.message
    response._meta = response?.data?.meta
    response._success = response?.data?.success || false
  }
  return response
}
const parseReject = error => {
  if (error) {
    error._data = error?.response?.data?.data
    error._message = error?.response?.data?.message
    error._errors = error?.response?.data?.errors || {}
  }
  // console.log(error?.statusCode)
  return Promise.reject(error)
}
axios.interceptors.response.use(r => parseFulfilled(r), e => parseReject(e))

axios.defaults.baseURL = SERVER_API
axios.defaults.paramsSerializer = params => Qs.stringify(params, { arrayFormat: 'indices' })

axios.defaults.headers.common.Accept = 'application/json'

const setAxiosToken = token => axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : undefined
const setAxiosLocale = locale => axios.defaults.headers.common['App-Locale'] = locale
const setAxiosAppName = v => axios.defaults.headers.common['App-Name'] = v
const setAxiosAppVersion = v => axios.defaults.headers.common['App-Version'] = v

export {
  SERVER_API,
  axios,
  setAxiosToken,
  setAxiosLocale,
  setAxiosAppName,
  setAxiosAppVersion,
  parseFulfilled,
  parseReject
}
