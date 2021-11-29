<template>
  <div>
    <h1 class="mb-4">주문 완료</h1>
    {{ getShoppingbag }}
    --------------------------------
    {{ getTempOrderInfo }}
  </div>
</template>

<script>
export default {
  name: 'OrderComplete',
  computed: {
    getTempOrderInfo: function() {
      return this.$store.state.tempOrderInfo
    },
    getShoppingbag: function() {
      return this.$store.state.shoppingbag
    },
  },
}
</script>

<style>

</style>