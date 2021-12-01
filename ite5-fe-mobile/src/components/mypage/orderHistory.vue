<template>
  <div class="ms-3 mt-4">
    <h3 class="fw-bold my-3">주문 내역</h3>
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