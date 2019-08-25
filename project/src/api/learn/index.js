import axiosInstance from '@/plugins/axios'

// 首页获取新闻动态
export const getNews = function (params) {
  return axiosInstance({
    method: 'post',
    url: '/companyInfo',
    params: params
  })
}

// 学习页面  获取课程列表
export const getCourseList = function (params) {
    return axiosInstance({
      method: 'post',
      url: '/myCourses',
      params: params
    })
}

// 学习页面  获取章节和默认显示节数据
export const getChapterList = function (params) {
    return axiosInstance({
      method: 'post',
      url: '/courseDetail',
      params: params
    })
  }

  // 学习页面  获取章节对于的小节
export const getNodeList = function (params) {
    return axiosInstance({
      method: 'post',
      url: '/chapterSubsection',
      params: params
    })
  }

    // 学习页面  获取小节对于的详细内容
export const getNodeDetailList = function (params) {
    return axiosInstance({
      method: 'post',
      url: '/subsectionInfo',
      params: params
    })
  }
