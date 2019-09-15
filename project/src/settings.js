module.exports = {
  servers: {
    baseURL: process.env.API_HOST,
    timeout: 5000
  },
  user: {
    useInfor: 'token'
  },
  router: {
    whiteList: ['/', '/Login']
  },
  global: {
    appId: ""
  },
  examineData: {
    time: ''
  }
}
