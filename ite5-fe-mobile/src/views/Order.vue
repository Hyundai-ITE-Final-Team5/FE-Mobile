<template>
  <div>
    <h1 class="mb-4">주문 정보</h1>
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
  },
}
</script>

<style>

</style>