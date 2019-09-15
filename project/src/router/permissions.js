import router from './index.js'
import {getUserInfor} from '@/utils/index.js'
import settings from '@/settings.js'
// router.beforeEach((to, from ,next) => {
//   let isLogin = getUserInfor()
//   let whiteList = settings.router.whiteList
//   if (!isLogin) { // 未登录
//     if (whiteList.includes(to.path)) {
//       next()
//     } else {
//       next('Login')
//     }
//   } else {
//     if (to.path === '/Login') {
//       next('/')
//     } else {
//       next()
//     }
//   }
// })
