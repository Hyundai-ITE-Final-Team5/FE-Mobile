<template>
  <div>
    <div class="d-flex">
      <h6>{{ coupon.ecoupontitle }}</h6>
      <h6>&nbsp;&nbsp;-&nbsp;&nbsp;</h6>
      <h6>{{ coupon.ediscount }}%</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'couponListItem',
  props: {
    coupon: {
      type: Object
    },
    cpidx: {
      type: Number
    },
  },
}
</script>

<style>

</style>