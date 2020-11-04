import storage from '../commons/config/storage.config'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Login from '../views/Login.vue'
import RedirectGoogle from '../views/RedirectGoogle.vue'

import Insight from '../views/Dashboard/Insight.vue'
import Archieve from '../views/Dashboard/Archieve.vue'
import DetailArchieve from '../views/Dashboard/DetailArchieve'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children:[
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/',
        component: Insight,
        name: 'Home'
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/archieve',
        component: Archieve,
        name: 'Archieve'
      },
      {
        path: '/archieve/:id',
        component: DetailArchieve,
        name: 'Detail Archieve'
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  },
  {
    path: '/login/callback',
    name: 'redirect',
    component: RedirectGoogle,
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!storage.getToken()
  
  if (!isPublic && !loggedIn) {
    return next({
      path: '/login'
    })
  }
  
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }
  
  next()
})

export default router
