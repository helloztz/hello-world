import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/login/Login'
import Navbar from '@/navbar/Navbar'
import Learn from '@/learn/Learn'
import List from '@/learn/List'
import Homes from '@/home/Homes'
import Video from '@/learn/Video'
import Classify from '@/practice/Classify'
import Detail from '@/practice/Detail'
import ShowResult from '@/practice/ShowResult'


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
    {
      path: '/Classify',
      name: '练习列表',
      component: Classify,
    },
    {
      path: '/Detail',
      name: '练习界面',
      component: Detail,
    },
    {
      path: '/ShowResult',
      name: '查看结果',
      component: ShowResult,
    },
  ]
})
