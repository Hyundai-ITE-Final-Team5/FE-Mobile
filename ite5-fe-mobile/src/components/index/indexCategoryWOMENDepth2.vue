<template>
  <div>
    <h3 @click="showCategoryWOMENDepth3">• {{ womenkey }}</h3>
    <div :id="'categoryWOMENDepth3_' + idx" style="display: none;">
      <indexCategoryWOMENDepth3 v-for="(depth3, idx) in categoryWOMEN[womenkey]" :key="idx" :depth3="depth3" :womenkey="womenkey"/>
    </div>
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
    idx: {
      type: Number
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
  methods: {
    showCategoryWOMENDepth3() {
      const categoryWOMENDepth3Id = document.getElementById('categoryWOMENDepth3_' + this.idx)
      if (categoryWOMENDepth3Id.style.display == 'none') categoryWOMENDepth3Id.style.display = 'block'
      else categoryWOMENDepth3Id.style.display = 'none'
    },
  },
}
</script>

<style>

</style>