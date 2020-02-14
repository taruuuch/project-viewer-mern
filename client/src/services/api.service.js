import axios from 'axios'

export const apiClient = axios.create({
  // baseURL: '',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

apiClient.interceptors.request.use(
  reqConfig => {
    const token = JSON.parse(localStorage.getItem('token'))

    if (token && token.accessToken) {
      reqConfig.headers.Authorization = `Bearer ${token.accessToken}`
    }

    return reqConfig
  },
  err => Promise.reject(err)
)
