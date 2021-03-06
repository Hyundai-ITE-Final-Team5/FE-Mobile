import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Event from '@/views/Event.vue'
import Recommended from '@/views/Recommended.vue'
import Index from '@/views/Index.vue'
import ShoppingBag from '@/views/ShoppingBag.vue'
import Like from '@/views/Like.vue'
import MyPage from '@/views/MyPage.vue'
import Product from '@/views/Product.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import Order from '@/views/Order.vue'
import OrderComplete from '@/views/OrderComplete.vue'
import Login from '@/views/Login.vue'
import Join from '@/views/Join.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
  {
    path: '/recommended',
    name: 'Recommended',
    component: Recommended
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
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
  // My Page
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
  {
    path: '/productdetail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/ordercomplete',
    name: 'OrderComplete',
    component: OrderComplete
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/join',
    name: 'Join',
    component: Join
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() { 
    return { x: 0, y: 0 } 
  },
  base: process.env.BASE_URL,
  routes
})

export default router
