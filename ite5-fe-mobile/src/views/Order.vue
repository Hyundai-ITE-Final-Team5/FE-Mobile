<template>
  <div>
    <div class="mb-5 fixed-top" id="nav">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <img src="@/assets/back.png" style="opacity: 0.6;" alt="" @click="goBack">
          <h3 class="" @click="moveMenuStatusBarHome">
            <router-link to="/" class="text-decoration-none" id="handsome">HANDSOME</router-link>
          </h3>
          <div class="d-flex">
            <router-link to="/login" v-if="decodedJWT == null">
              <img src="@/assets/user.png" alt="" style=" height: 28px;" @click="moveMenuStatusBarMyPage">
            </router-link>
            <router-link to="/shoppingbag" v-if="decodedJWT != null"><img src="@/assets/shoppingbag.png" alt="" style="opacity: 0.9; height: 28px;"></router-link>
          </div>
        </div>
      </nav>
    </div>
    <h1 class="mb-4" style="margin-top: 61px;">주문 정보</h1>
    <orderList :userInfo="userInfo" :couponList="couponList" :paymentList="paymentList"/>
  </div>
</template>

<script>
import orderList from '@/components/order/orderList'

export default {
  name: 'Order',
  components: {
    orderList,
  },
  mounted: function() {
    this.$store.dispatch('getCouponList')
    this.$store.dispatch('getPaymentList')
    window.scrollTo(0, 0)
  },
  methods: {
    moveMenuStatusBarHome: function() {
      const menuStatusBarId = document.getElementById('menuStatusBar')
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveHome")
    },
    moveMenuStatusBarMyPage: function() {
      const menuStatusBarId = document.getElementById('menuStatusBar')
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveMyPage")
    },
    goBack: function() {
      this.$router.go(-1)
    },
  },
  computed: {
    userInfo: function() {
      let temp = []
      if (this.$store.state.userInfo) {
        temp.push(this.$store.state.userInfo)
      }
      return temp
    },
    couponList: function() {
      return this.$store.state.couponList
    },
    paymentList: function() {
      return this.$store.state.paymentList.pmList
    },
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
  },
}
</script>

<style>

</style>