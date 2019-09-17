import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/login/Login'
import List from '@/learn/List'
import Homes from '@/home/Homes'
import Classify from '@/practice/Classify'
import Detail from '@/practice/Detail'
import ShowResult from '@/practice/ShowResult'
import Examine from '@/examine/examine'
import Layout from '@/layout/layout'
import ExamineDetail from '@/examine/ExamineDetail'
import ExamineResult from '@/examine/ExamineResult'
import Video from '@/learn/Video'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path:'/Login',
      name:'注册',
      component:Login
    },
    {
      path: '/',
      name: 'home',
      component: Layout,
      redirect: '/',
      children: [
        {
          path: '/',
          component: Homes
        }
      ]
    },
    {
      path: '/Video',
      name: 'video',
      component: Layout,
      redirect: '/Video',
      children: [
        {
          path: '/Video',
          component: Video
        }
      ]
    },
    {
      path: '/List',
      name: 'student',
      component: Layout,
      children: [
        {
          path: '/List',
          component: List,
        }
      ]
    },
    {
      path: '/Classify',
      name: 'classify',
      component: Layout,
      children: [
        {
          path: '/Classify',
          component: Classify
        }
      ]
    },
    {
      path: '/Detail',
      name: 'detail',
      component: Layout,
      children: [
        {
          path: '/Detail',
          component: Detail
        }
      ]
    },
    {
      path: '/ShowResult',
      name: 'showResult',
      component: Layout,
      children: [
        {
          path: '/ShowResult',
          component: ShowResult
        }
      ]
    },
    {
      path: '/xamine',
      name: 'examine',
      component: Layout,
      children: [
        {
          path: '/examine',
          component: Examine
        }
      ]
    },
    {
      path: '/examineDetail',
      name: 'examineDetail',
      component: Layout,
      children: [
        {
          path: '/examineDetail',
          component: ExamineDetail
        }
      ]
    },
    {
      path: '/examineResult',
      name: 'examineResult',
      component: Layout,
      children: [
        {
          path: '/examineResult',
          component: ExamineResult
        }
      ]
    }
  ]
})
