import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import BlogOne from '../views/BlogOne.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:Cat',
    name: 'Category',
    component: Category
  },
  {
    path: '/:Cat/:Blog',
    name: 'BlogOne',
    component: BlogOne
  }

]

const router = new VueRouter({
  routes
})

export default router
