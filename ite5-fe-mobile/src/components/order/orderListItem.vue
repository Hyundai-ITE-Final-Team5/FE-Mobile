<template>
  <div class="my-3">
    <div class="d-flex">
      <div class="col-4">
        <img :src="orderitem.pcimg1" alt="" style="width: 105px;">
      </div>
      <div class="col-8 mt-2">
        <h5 class="fw-bold">{{ orderitem.bname }}</h5>
        <h6>{{ orderitem.pname }}</h6>
        <h6>{{ pcprice }}<span> 원</span></h6>
        <div class="d-flex mt-3">
          <div class="d-flex col-5">
            <h6>COLOR</h6>
            <img :src="orderitem.pcchipimg" alt="" class="mx-2" style="width: 20px; height: 20px;">
          </div>
          <div class="d-flex col-7">
            <h6>SIZE</h6>
            <h6 class="mx-2 fw-bold">{{ orderitem.psize }}</h6>
          </div>
        </div>
        <div class="d-flex">
          <div class="d-flex col-5">
            <h6>수량</h6>
            <h6 class="ms-2 me-1 fw-bold">{{ orderitem.pquantity }}</h6>
          </div>
          <div class="d-flex col-7">
            <h6>합계</h6>
            <h6 class="ms-2 me-1 fw-bold">{{ pcpriceTotal }}</h6>
            <h6>원</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderListItem',
  props: {
    orderitem: {
      type: Object
    },
    oidx: {
      type: Number
    },
  },
  computed: {
    pcprice: function() {
      return this.orderitem.pcprice.toLocaleString("ko-KR")
    },
    pcpriceTotal: function() {
      return (this.orderitem.pquantity * this.orderitem.pcprice).toLocaleString("ko-KR")
    },
  },
}
</script>

<style>

</style>