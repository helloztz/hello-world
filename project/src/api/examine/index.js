import axiosInstance from '@/plugins/axios'
/**
 * @description 获取考试列表
 * @param {String} params
 */
export const getExamineList = (params) => {
  return axiosInstance({
    url: '/userExaminationList',
    method: 'post',
    params: params
  })
}
/**
 * @description 获取考试详情
 * @param {String} params
 */
export const examineDetail = (params) => {
  return axiosInstance({
    url: '/userExaminationDetail',
    method: 'post',
    params: params
  })
}
/**
 * @description 答题
 * @param {*} params
 */
export const submitQuestion = (params) => {
  return axiosInstance({
    url: '/userAnswerQuestion',
    method: 'post',
    params: params
  })
}
