import axiosInstance from '@/plugins/axios'
import qs from 'qs'
export const login = function (params) {
  return axiosInstance({
    method: 'post',
    url: '/phoneLogin',
    params: params
  })
}
export const getVerificationCode = function (params) {
  return axiosInstance({
    method: 'post',
    url: 'getVerificationCode',
    params: params
  })
}
