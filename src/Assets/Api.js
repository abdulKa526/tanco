import { setAxiosToken } from './Axios'
import ApiMethods from './ApiMethods'

const Api = {}

export const getUserAsync = async (token) => {
  token && setAxiosToken(token)
  return ApiMethods.checkToken()
}
export default Api

export {}
