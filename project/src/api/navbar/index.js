import axiosInstance from '@/plugins/axios'
export const initInfo = function (params) {
  return axiosInstance({
    method: 'post',
    url: '/companyInfo',
    params: params
  })
}

