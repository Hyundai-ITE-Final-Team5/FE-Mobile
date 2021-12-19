<template>
  <div class="mt-4">
    <div class="d-flex justify-content-between mt-5 mb-4 ms-2 me-1">
      <h3 class="fw-bold">쿠폰 목록</h3>
      <h6 class="text-muted mx-3 mt-1">최근 발급순</h6>
    </div>
    <div v-if="couponList.length > 0" class="pb-1" style="background-color: #e9e9e9;">
      <couponListItem v-for="(coupon, cpidx) in couponList" :key="cpidx" :coupon="coupon" :cpidx="cpidx" />
    </div>
    <div v-if="couponList.length == 0">
      <h2 class="text-center text-muted" style="margin-top: 15vh;">쿠폰내역이 없습니다.</h2>
    </div>
  </div>
</template>

<script>
import couponListItem from '@/components/mypage/couponListItem'

export default {
  name: 'coupon',
  components: {
    couponListItem,
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