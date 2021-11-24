<template>
  <div>
    <h3>• {{ womenkey }}</h3>
    <indexCategoryWOMENDepth3 v-for="(depth3, idx) in categoryWOMEN[womenkey]" :key="idx" :depth3="depth3"/>
  </div>
</template>

<script>
import indexCategoryWOMENDepth3 from '@/components/index/indexCategoryWOMENDepth3'
export default {
  name: 'indexCategoryDepth2',
  props: {
    womenkey: {
      type: String
    },
  },
  components: {
    indexCategoryWOMENDepth3,
  },
  computed: {
    categoryWOMEN: function() {
      return this.$store.getters.categoryWOMEN
    },
  },
}
</script>

<style>

</style>