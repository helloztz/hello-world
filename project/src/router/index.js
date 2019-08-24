import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/login/Login'
import Navbar from '@/navbar/Navbar'
import Learn from '@/learn/Learn'
import List from '@/learn/List'
import Homes from '@/home/Homes'
import Video from '@/learn/Video'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component:Homes
    },
    {
      path: '/List',
      name: '学习',
      component: List,
      // children:[
      //   {
      //     path: '/Video',
      //     name: '学习列表',
      //     component: Video,
      //   }
      // ]
    },
    {
      path:'/Login',
      name:'注册',
      component:Login
    },
    {
      path: '/Video',
      name: '学习列表',
      component: Video,
    },
  ]
})
