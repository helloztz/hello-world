import axiosInstance from '@/plugins/axios'

// 获取章节练习列表
export const getPracticeList = function (params) {
  return axiosInstance({
    method: 'post',
    url: '/userTopicList',
    params: params
  })
}

// 获取题目
export const getPracticeDetail = function (params) {
    return axiosInstance({
      method: 'post',
      url: '/userTopicDetail',
      params: params
    })
}

// 重新开始答题
export const getRestartTopic = function (params) {
  return axiosInstance({
    method: 'post',
    url: '/userRestartTopic',
    params: params
  })
}

// 断点答题存储
export const getSaveQuestion = function (params) {
  return axiosInstance({
    method: 'post',
    url: '/userSubmitQuestion',
    params: params
  })
}

