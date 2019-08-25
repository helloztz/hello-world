import axios from 'axios'
import globalConfig from '@/settings.js'

let config = {
  baseURL: process.env.API_HOST,
  timeout: globalConfig.servers.timeout,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
}
const axiosInstance = axios.create(config)

axiosInstance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
export default axiosInstance
