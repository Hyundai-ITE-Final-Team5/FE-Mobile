<template>
  <div>
    <div class="d-flex">
      <h6>{{ coupon.cpid }}</h6>
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