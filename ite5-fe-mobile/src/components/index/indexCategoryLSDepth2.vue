<template>
  <div>
    <h3 @click="showCategoryLSDepth3">• {{ lskey }}</h3>
    <div :id="'categoryLSDepth3_' + idx" style="display: none;">
      <indexCategoryLSDepth3 v-for="(depth3, idx) in categoryLS[lskey]" :key="idx" :depth3="depth3" :lskey="lskey"/>
    </div>
  </div>
</template>

<script>
import indexCategoryLSDepth3 from '@/components/index/indexCategoryLSDepth3'

export default {
  name: 'indexCategoryLSDepth2',
  components: {
    indexCategoryLSDepth3,
  },
  props: {
    lskey: {
      type: String
    },
    idx: {
      type: Number
    },
  },
  methods: {
    showCategoryLSDepth3() {
      const categoryLSDepth3Id = document.getElementById('categoryLSDepth3_' + this.idx)
      if (categoryLSDepth3Id.style.display == 'none') categoryLSDepth3Id.style.display = 'block'
      else categoryLSDepth3Id.style.display = 'none'
    },
  },
  computed: {
    categoryLS: function() {
      return this.$store.getters.categoryLS
    },
  },
}
</script>

<style>

</style>