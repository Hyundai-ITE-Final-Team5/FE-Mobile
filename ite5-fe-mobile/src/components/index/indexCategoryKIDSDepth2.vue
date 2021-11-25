<template>
  <div>
    <h3 @click="showCategoryKIDSDepth3">• {{ kidskey }}</h3>
    <div :id="'categoryKIDSDepth3_' + idx" style="display: none;">
      <indexCategoryKIDSDepth3 v-for="(depth3, idx) in categoryKIDS[kidskey]" :key="idx" :depth3="depth3" :kidskey="kidskey"/>
    </div>
  </div>
</template>

<script>
import indexCategoryKIDSDepth3 from '@/components/index/indexCategoryKIDSDepth3'

export default {
  name: 'indexCategoryKIDSDepth2',
  components: {
    indexCategoryKIDSDepth3,
  },
  props: {
    kidskey: {
      type: String
    },
    idx: {
      type: Number
    },
  },
  methods: {
    showCategoryKIDSDepth3() {
      const categoryKIDSDepth3Id = document.getElementById('categoryKIDSDepth3_' + this.idx)
      if (categoryKIDSDepth3Id.style.display == 'none') categoryKIDSDepth3Id.style.display = 'block'
      else categoryKIDSDepth3Id.style.display = 'none'
    },
  },
  computed: {
    categoryKIDS: function() {
      return this.$store.getters.categoryKIDS
    },
  },
}
</script>

<style>

</style>