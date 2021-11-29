<template>
  <div>
    <!-- 쿠폰번호 -->
    <div class="d-flex  my-2">
      <div class="col-3">
        <h5>번호</h5>
      </div>
      <div class="col-9">
        <h6>{{ coupon.cpid }}</h6>
      </div>
    </div>
    <!-- 쿠폰이름 -->
    <div class="d-flex  my-2">
      <div class="col-3">
        <h5>이름</h5>
      </div>
      <div class="col-9">
        <h6>{{ coupon.ecoupontitle }}</h6>
      </div>
    </div>
    <!-- 할인율 -->
    <div class="d-flex  my-2">
      <div class="col-3">
        <h5>할인율</h5>
      </div>
      <div class="col-9">
        <h6>{{ coupon.ediscount }}%</h6>
      </div>
    </div>
    <!-- 쿠폰 유효기간 -->
    <div class="d-flex  my-2">
      <div class="col-3">
        <h5>유효기간</h5>
      </div>
      <div class="col-9">
        <h6>{{ couponIssueDate }} ~ {{ couponExpireDate }}</h6>
      </div>
    </div>
    <!-- 쿠폰사용여부 -->
    <div class="d-flex  my-2">
      <div class="col-9">
        <h6 v-if="coupon.cpstatus == 1" class="fw-bold" style="color: #b1d3c5;">사용가능</h6>
        <h6 v-if="coupon.cpstatus == 0" class="fw-bold" style="color: #e4beb3;">사용완료</h6>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'mycouponList',
  props: {
    coupon: {
      type: Object
    },
    cpidx: {
      type: Number
    },
  },
  computed: {
    couponIssueDate: function() {
      return this.coupon.cpissuedate.substring(0, 10)
    },
    couponExpireDate: function() {
      return this.coupon.cpexpiredate.substring(0, 10)
    },
  },
}
</script>

<style>

</style>