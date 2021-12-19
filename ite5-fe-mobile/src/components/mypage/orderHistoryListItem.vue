<template>
  <div class="my-3">
    <div class="d-flex">
      <div class="col-4 ps-2">
        <img :src="oitem.itemInfo.pcimg1" alt="" style="width: 105px;">
      </div>
      <div class="col-8 mt-2 ms-2">
        <h5 class="fw-bold">{{ oitem.itemInfo.bname }}</h5>
        <h6 class="pe-3">{{ oitem.itemInfo.pname }}</h6>
        <h6>{{ pcprice }}<span> 원</span></h6>
        <div class="d-flex mt-3">
          <div class="d-flex col-5">
            <h6>COLOR</h6>
            <img :src="oitem.itemInfo.pcchipimg" alt="" class="mx-2" style="width: 20px; height: 20px;">
          </div>
          <div class="d-flex col-7">
            <h6>SIZE</h6>
            <h6 class="mx-2">{{ oitem.itemInfo.psize }}</h6>
          </div>
        </div>
        <div class="d-flex mt-1">
          <div class="d-flex col-5">
            <h6>수량</h6>
            <h6 class="ms-2 me-1">{{ oitem.oicount }}</h6>
          </div>
          <div class="d-flex col-7">
            <h6>합계</h6>
            <h6 class="ms-2 me-1">{{ totalPrice }}</h6>
            <h6 class="pe-3">원</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderHistoryListItem',
  props: {
    oitem: {
      type: Object
    },
    oiidx: {
      type: Number
    },
  },
  computed: {
    pcprice: function() {
      return this.oitem.itemInfo.pcprice.toLocaleString("ko-KR")
    },
    totalPrice: function() {
      return this.oitem.oitotalprice.toLocaleString("ko-KR")
    },
  },
}
</script>

<style>

</style>