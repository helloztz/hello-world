import settings from '@/settings.js'
import Vue from 'vue'
import { json } from 'body-parser';
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
 * @description 中央事件处理器
 */
/**
 * @description 判断数据类型
 * @return Object
*/
export const inspectDataType = () => {
  let dataTypeArr = ['String', 'Number', 'Object', 'Null', 'Undefined', 'Function', 'Date']
  let dataObj = {}
  dataTypeArr.forEach(ele => {
    let key = 'is' + ele
    dataObj[key] = function (data) {
      return Object.prototype.toString.call(data) === `[object ${ele}]`
    }
  })
  return dataObj
}
export const eventBus = new Vue()
/**
 * @description 倒计时
 * @param {String | Number} date 是以分钟计算
 */
export const countdownTime = (date,dateReg='mm:ss') => {
  let dateNum = Number(date)
  let isNum = isNaN(dateNum)
  if (isNum) {
    console.error('arguments must is number')
    return
  }
  return function (fn) {
    let time = null
    let dateArr = dateReg.split(':')
    let arrL = dateArr.length
    let hours = ''
    let minutes = ''
    let seconds = 59
    const MIN = 60
    if (time) clearInterval(time)
    if (arrL === 3) { // HH:mm:ss
      console.log('arrL: ', arrL);
      if (dateNum < MIN) { // 小于一小时
        hours = '00'
        minutes = dateNum
      } else if (dateNum === MIN) {
        hours = '00'
        minutes = 59
      } else {
        hours = '0' + parseInt(dateNum / MIN)
        minutes = dateNum % MIN
      }
      time = setInterval(() => {
        let initDate = hours + ':' + minutes + ':' + seconds
        fn(initDate, time)
        if (hours == '00' && minutes == '00') {
          clearInterval(time)
          return
        }
        if (seconds === '00') {
          seconds = 60
          minutes -= 1
          if (minutes < 10) {
            minutes = '0' + minutes
          }
          if (hours !== '') {
            if (minutes === '00') {
              if (hours > 0) {
                hours -= 1
                if (hours < 10) {
                  hours =  '0' + hours
                }
              }
            }
          }
        }
        seconds-=1
        if (seconds < 10) {
          seconds = '0' + seconds
        }
      }, 1000)
    } else { // mm:ss
      if (dateNum === MIN) {
        minutes = 59
      } else {
        minutes = dateNum
      }
      time = setInterval(() => {
        let initDate = minutes + ':' + seconds
        fn(initDate, time)
        if (minutes == '00') {
          clearInterval(time)
          return
        }
        if (seconds === '00') {
          seconds = 60
          minutes -= 1
          if (minutes < 10) {
            minutes = '0' + minutes
          }
        }
        seconds-=1
        if (seconds < 10 && seconds !== '00') {
          seconds = '0' + seconds
        }
      }, 1000)
    }
  }
}
/**
 * @description 设置考试题库
 * @param {*} params
 */
const LOCALKEY = 'examines'
export const setExamineQuestion = (params) => {
  window.localStorage.setItem(LOCALKEY, params)
}
/**
 * @description 获取考试题库
 */
export const getExamineQuestion = () => {
  let extions = window.localStorage.getItem(LOCALKEY)
  return JSON.parse(extions)
}
