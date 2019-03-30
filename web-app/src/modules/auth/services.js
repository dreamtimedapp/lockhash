// plugins is a alias. see client/build/webpack.base.conf.js
// import http client
import http from '$utils/http'
import qs from 'qs'

// send login data and retrive a new token
export const postLogin = ({ username, password }) => {
  return http.post('/oauth/token', qs.stringify({
    grant_type: 'password',
    client_id: process.env.VUE_APP_AUTH_CLIENT_ID_PRODUCT,
    client_secret: process.env.VUE_APP_AUTH_CLIENT_SECRET_PRODUCT,
    username: username,
    password: password,
    scope: ''
  }))
}

export const postRegister = payload => {
  return http.post('/auth/register', payload)
}

// get current user's data
export const loadUserData = () => http.get('/me').catch(() => {})

// revoke current token
export const revokeToken = token => http.post('/oauth/tokens/' + token)
