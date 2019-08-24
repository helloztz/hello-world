import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {}
const mutations = {
    handleUserName: (state, userObj) => {
        state.user_name = userObj.user_name
        state.user_logoe = userObj.user_logo
        state.auto_id = userObj.auto_id
        state.app_id = userObj.app_id
            // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
        sessionStorage.setItem('user_name', userObj.user_name)
        sessionStorage.setItem('user_logo', userObj.user_logo)
    }
}
const state = {
    user_name: '' || sessionStorage.getItem('user_name'),
    user_logo: '' || sessionStorage.getItem('user_logo'),
    // app_id:state.auto_id
}
// getters 只会依赖 state 中的成员去更新
const getters = {
    userName: (state) => state.user_name,
    user_logo: (state) => state.user_logo,
    auto_id: (state) => state.auto_id,
    app_id: (state) => state.app_id,
}

const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
export default  store 