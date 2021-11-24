<template>
  <div>
    <h3 @click="showCategoryMENDepth3">• {{ menkey }}</h3>
    <div :id="'categoryMENDepth3_' + idx" style="display: none;">
      <indexCategoryMENDepth3 v-for="(depth3, idx) in categoryMEN[menkey]" :key="idx" :depth3="depth3" :menkey="menkey"/>
    </div>
  </div>
</template>

<script>
import indexCategoryMENDepth3 from '@/components/index/indexCategoryMENDepth3'

export default {
  name: 'indexCategoryMENdepth2',
  components: {
    indexCategoryMENDepth3,
  },
  props: {
    menkey: {
      type: String
    },
    idx: {
      type: Number
    },
  },
  methods: {
    showCategoryMENDepth3() {
      const categoryMENDepth3Id = document.getElementById('categoryMENDepth3_' + this.idx)
      if (categoryMENDepth3Id.style.display == 'none') categoryMENDepth3Id.style.display = 'block'
      else categoryMENDepth3Id.style.display = 'none'
    },
  },
  computed: {
    categoryMEN: function() {
      return this.$store.getters.categoryMEN
    },
  },
}
</script>

<style>

</style>