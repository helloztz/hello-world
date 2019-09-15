import settings from '@/settings.js'

let tokenName = settings.user.useInfor
/**
 * @description 倒计时
 * @param {Number} fromSeconds 开始秒数
 * @param {Number} endSeconds 结束秒数
 * @param {Number} interval 计时周期
*/
export const countdown = function (fromSeconds = 60, endSeconds = 0, interval = 1000) {
  let time = null
  return function (fn) {
    if (time) clearInterval(time)
    time = setInterval(() => {
      fromSeconds -= 1
      fn && fn(fromSeconds)
      if (fromSeconds === 1) {
        fromSeconds = 60
        clearInterval(time)
      }
    }, interval)
  }
}
/**
 * 存储用户信息到本地
 * @param {*} useInfor 用户身份票证
 */
export const setUserInfor = function (useInfor) {
  window.localStorage.setItem(tokenName, useInfor)
}
/**
 * 获取用户信息
 */
export const getUserInfor = function () {
  let userInfo = window.localStorage.getItem(tokenName)
  return JSON.parse(userInfo)
}
/**
 * 销毁本地用户信息
*/
export const removeUserInfor = function () {
  window.localStorage.removeItem(tokenName)
}
/**
 * @description 节流函数
*/
export const throttle = (fn, dealy = 500) => {
  let time = null,
      isFirst = true
    return function (...args) {
      if (isFirst) {
        fn && fn.apply(this,args)
        return isFirst = false
      }
      if (time) {
        return false
      }
      time = setTimeout(() => {
        clearTimeout(time)
        time = false
        fn && fn.apply(this, args)
      }, dealy)
    }
}
/**
 * 存储练习信息到本地存储
 */
export const setLocalStorage = function (key,val) {
  window.localStorage.setItem(key, JSON.stringify(val));
}
/**
 * 存储练习信息到本地存储
 */
export const getLocalStorage = function (key) {
  let info = window.localStorage.getItem(key)
  return JSON.parse(info)
}
/**
 * 删除本地存储中的练习信息
 */
export const removeLocalStorage = function (key) {
   window.localStorage.removeItem(key)
}

