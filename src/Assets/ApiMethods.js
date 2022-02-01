import { axios } from './Axios'

const URL = (url, prefix) => url + (prefix ? `/${prefix}` : '')

// Helper to use with API Url
const Prefix = a => URL('Prefix', a)

export default {
  checkToken: () => axios.get('check-token'),
  login: (form) => axios.post('loginMobile', form),
  logout: (push_token) => axios.get('logout', { params: { push_token } }),
  register: (form) => axios.post('register', form),
  forgotPassword: username => axios.post('forgot-password', { username }),
  verificationCode: ({ username, verification_code }) => axios.post('verification-code', { username, verification_code }),
  resetPassword: form => axios.post('reset-password', { ...form })
}
