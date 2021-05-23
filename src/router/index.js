import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import MovieDetail from '../views/MovieDetail.vue'

import Board from '@/views/Board.vue'
import Article from '@/views/Article.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'

import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'
import store from '@/store/index.js'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter : function (to, from, next) {
      if (store.state.isLogin){
        next()
      }else{
        next({ name : 'Login'})
      }
    }
  },
  {
    path: '/movie/:movieId',
    name: 'MovieDetail',
    component : MovieDetail,
    beforeEnter : function (to, from, next) {
      if (store.state.isLogin){
        next()
      }else{
        next({ name : 'Login'})
      }
    }
  },
  {
    path: '/board',
    name: 'Board',
    component: Board
  },
  {
    path: '/article',
    name: 'Article',
    component: Article
  },
  {
    path: '/article/:articleId',
    name: 'ArticleDetail',
    component: ArticleDetail
  },

  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeEnter : function (to, from, next) {
      if (store.state.isLogin){
        next({ name : 'Home' })
      }
      next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter : function (to, from, next) {
      if (store.state.isLogin){
        next({ name : 'Home' })
      }
      next()
    }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
