<template>
  <div>
    <shoppingbagListItem v-for="(item, idx) in getShoppingbag" :key="idx" :item="item" :idx="idx"/>
  </div>
</template>

<script>
import shoppingbagListItem from '@/components/shoppingbag/shoppingbagListItem'

export default {
  name: 'shoppingbagList',
  components: {
    shoppingbagListItem,
  },
  created: function() {
    this.$store.dispatch('getShoppingbagList')
  },
  computed: {
    getShoppingbag: function() {
      return this.$store.state.shoppingbag
    },
  },
}
</script>

<style>

</style>