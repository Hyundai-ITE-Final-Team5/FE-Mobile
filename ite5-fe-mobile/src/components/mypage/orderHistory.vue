<template>
  <div class="ms-2 me-1 mt-4">
    <div class="d-flex justify-content-between my-3">
      <h3 class="fw-bold">주문 내역</h3>
      <h6 class="text-muted mx-3 mt-1">최근 날짜순</h6>
    </div>
    <div v-if="getOrderHistoryList.length > 0">
      <orderHistoryList v-for="(order, oidx) in getOrderHistoryList" :key="oidx" :order="order" :oidx="oidx"/>
    </div>
    <div v-if="getOrderHistoryList.length == 0">
      <h2 class="text-center text-muted" style="margin-top: 15vh;">주문내역이 없습니다.</h2>
    </div>
  </div>
</template>

<script>
import orderHistoryList from '@/components/mypage/orderHistoryList'

export default {
  name: 'orderHistory',
  components: {
    orderHistoryList,
  },
  computed: {
    getOrderHistoryList: function() {
      return this.$store.state.orderHistoryList
    },
  },
}
</script>

<style>

</style>