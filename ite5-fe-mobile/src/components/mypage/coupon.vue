<template>
  <div class="ms-3 mt-4">
    <h3 class="fw-bold my-3">쿠폰 정보</h3>
    <mycouponList v-for="(coupon, cpidx) in couponList" :key="cpidx" :coupon="coupon" :cpidx="cpidx" />
  </div>
</template>

<script>
import mycouponList from '@/components/mypage/mycouponList'

export default {
  name: 'coupon',
  components: {
    mycouponList,
  },
  computed: {
    couponList: function() {
      return this.$store.state.couponList
    }
  },
}
</script>

<style>

</style>