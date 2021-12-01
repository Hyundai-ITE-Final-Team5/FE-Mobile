<template>
  <div class="ms-3 mt-4">
    <h3 class="fw-bold my-3">쿠폰 정보</h3>
    <div v-if="couponList.length > 0">
      <mycouponList v-for="(coupon, cpidx) in couponList" :key="cpidx" :coupon="coupon" :cpidx="cpidx" />
    </div>
    <div v-if="couponList.length == 0">
      <h2 class="text-center text-muted" style="margin-top: 15vh;">쿠폰내역이 없습니다.</h2>
    </div>
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