import Vue from 'vue'
import Router from 'vue-router'
import MainWrapper from '@/components/main-wrapper'
import Account from '@/components/account'
import Orders from '@/components/orders'
import Cart from '@/components/cart'
import Products from '@/components/products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainWrapper',
      component: MainWrapper
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
  ]
})
