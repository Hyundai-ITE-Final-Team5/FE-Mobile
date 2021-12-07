<template>
  <div>
    <hr>
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
        <h6>{{ odate }}</h6>
      </div>
    </div>
    <div class="d-flex  my-2">
      <div class="col-4">
        <h5>•주문상태</h5>
      </div>
      <div class="col-8">
        <h5 v-if="order.ostatus != '주문취소'" class="fw-bold" style="color: #7fb7a0;">{{ order.ostatus }}</h5>
        <h5 v-if="order.ostatus == '주문취소'" class="fw-bold" id="orderStatus" style="color: #b97687;">{{ order.ostatus }}</h5>
      </div>
    </div>
    <orderHistoryListItem v-for="(oitem, oiidx) in order.items" :key="oiidx" :oitem="oitem" :oiidx="oiidx"/>
    <div v-if="order.ostatus != '주문취소'" class="d-flex justify-content-end me-3">
      <button class="btn btn-sm" style="color: #b97687; border-color: #b97687;" 
              data-bs-toggle="modal" :data-bs-target="'#orderCancelAlert_' + this.oidx">주문취소</button>
    </div>
    <div v-if="order.ostatus == '주문취소'" class="d-flex justify-content-end me-3">
      <button class="btn btn-sm btn-outline-secondary" disabled>주문취소</button>
    </div>
    <!-- 주문취소확인 Modal -->
    <div class="modal fade" style="margin-top: 30vh;" :id="'orderCancelAlert_' + oidx" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title d-flex" id="exampleModalLabel">
              <img src="@/assets/problem.png" style="height: 24px;" alt="">
              <h5 class="mx-2">알림</h5>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            해당 주문을 취소하시겠습니까?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-outline-dark col-3" data-bs-dismiss="modal">닫기</button>
            <button type="button" class="btn btn-sm btn-dark col-3" @click="cancelOrder" data-bs-dismiss="modal">주문취소</button>
          </div>
        </div>
      </div>
    </div>
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

      const orderStatusId = document.getElementById('orderStatus')
      orderStatusId.style.color = '#e4beb3'
      orderStatusId.innerHTML = '주문취소'
    },
  },
  computed: {
    odate: function() {
      return this.order.odate.substring(0, 10)
    },
  },
}
</script>

<style>

</style>