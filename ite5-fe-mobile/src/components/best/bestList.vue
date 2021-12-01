<template>
  <div class="d-flex" style="overflow: auto;">
    <bestListItem v-for="(best, bidx) in bestList" :key="bidx" :best="best" :bidx="bidx"/>
  </div>
</template>

<script>
import bestListItem from '@/components/best/bestListItem'

export default {
  name: 'bestList',
  components: {
    bestListItem,
  },
  computed: {
    bestList: function() {
      return this.$store.state.bestList
    },
  },
}
</script>

<style>

</style>