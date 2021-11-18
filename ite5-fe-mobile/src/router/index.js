import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import ShoppingBag from '@/views/ShoppingBag.vue'
import Like from '@/views/Like.vue'
import MyPage from '@/views/MyPage.vue'
import Product from '@/views/Product.vue'

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
    component: About
  },
  {
    path: '/shoppingbag',
    name: 'ShoppingBag',
    component: ShoppingBag
  },
  {
    path: '/like',
    name: 'Like',
    component: Like
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
