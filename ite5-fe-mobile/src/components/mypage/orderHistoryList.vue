<template>
  <div>
    <div class="d-flex  my-2">
      <div class="col-4">
        <h5>•주문번호</h5>
      </div>
      <div class="col-8">
        <h6>{{ order.oid }}</h6>
      </div>
    </div>
    <div class="d-flex  my-2">
      <div class="col-4">
        <h5>•주문날짜</h5>
      </div>
      <div class="col-8">
        <h6>{{ order.odate }}</h6>
      </div>
    </div>
    <div class="d-flex  my-2">
      <div class="col-4">
        <h5>•주문상태</h5>
      </div>
      <div class="col-8">
        <h6 v-if="order.ostatus != '주문취소'" style="color: #b1d3c5;">{{ order.ostatus }}</h6>
        <h6 v-if="order.ostatus == '주문취소'" style="color: #e4beb3;">{{ order.ostatus }}</h6>
      </div>
    </div>
    <orderHistoryListItem v-for="(oitem, oiidx) in order.items" :key="oiidx" :oitem="oitem" :oiidx="oiidx"/>
    <div v-if="order.ostatus != '주문취소'" class="d-flex justify-content-end me-3">
      <button class="btn btn-sm" style="color: #e4beb3; border-color: #e4beb3;" @click="cancelOrder">주문취소</button>
    </div>
    <div v-if="order.ostatus == '주문취소'" class="d-flex justify-content-end me-3">
      <button class="btn btn-sm" style="color: #e4beb3; border-color: #e4beb3;" @click="cancelOrder" disabled>주문취소</button>
    </div>
    <hr>
  </div>
</template>

<script>
import orderHistoryListItem from '@/components/mypage/orderHistoryListItem'

export default {
  name: 'orderHistoryList',
  components: {
    orderHistoryListItem,
  },
  props: {
    order: {
      type: Object
    },
    oidx: {
      type: Number
    },
  },
  methods: {
    cancelOrder: function() {
      this.$store.dispatch('cancelOrder', this.order.oid)
      this.$store.dispatch('getOrderHistory')
    }
  },
}
</script>

<style>

</style>