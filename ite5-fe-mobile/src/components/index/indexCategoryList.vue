<template>
  <div>
    <!-- WOMEN -->
    <div class="mt-5 d-flex justify-content-between" @click="showCategoryWOMENDepth2">
      <h1 class="me-5">WOMEN</h1>
      <img src="@/assets/downSmall.png" alt="" class="btn" style="opacity: 0.4; height: 33px;">
    </div>
    <div id="categoryWOMENDepth2" style="display: none;">
        <indexCategoryWOMENDepth2 v-for="(womenkey, idx) in categoryWOMENKeys" :key="idx" :womenkey="womenkey" :idx="idx"/>
    </div>
    <!-- MEN -->
    <div class="mt-5 d-flex justify-content-between" @click="showCategoryMENDepth2">
      <h1 class="me-5">MEN</h1>
      <img src="@/assets/downSmall.png" alt="" class="btn" style="opacity: 0.4; height: 33px;">
    </div>
    <div id="categoryMENDepth2" style="display: none;">
        <indexCategoryMENDepth2 v-for="(menkey, idx) in categoryMENKeys" :key="idx" :menkey="menkey" :idx="idx"/>
    </div>
  </div>
</template>

<script>
import indexCategoryWOMENDepth2 from '@/components/index/indexCategoryWOMENDepth2.vue'
import indexCategoryMENDepth2 from '@/components/index/indexCategoryMENDepth2.vue'

export default {
  name: 'indexCategoryList',
  components: {
    indexCategoryWOMENDepth2,
    indexCategoryMENDepth2,
  },
  methods: {
    showCategoryWOMENDepth2() {
      const categoryWOMENDepth2Id = document.getElementById('categoryWOMENDepth2')
      if (categoryWOMENDepth2Id.style.display == 'none') categoryWOMENDepth2Id.style.display = 'block'
      else categoryWOMENDepth2Id.style.display = 'none'
    },
    showCategoryMENDepth2() {
      const categoryMENDepth2Id = document.getElementById('categoryMENDepth2')
      if (categoryMENDepth2Id.style.display == 'none') categoryMENDepth2Id.style.display = 'block'
      else categoryMENDepth2Id.style.display = 'none'
    },
  },
  created: function() {
    this.$store.dispatch('getCategoryWOMEN')
    this.$store.dispatch('getCategoryMEN')
  },
  computed: {
    categoryWOMENKeys: function() {
      return this.$store.getters.categoryWOMENKeys
    },
    categoryMENKeys: function() {
      return this.$store.getters.categoryMENKeys
    },
  },
}
</script>

<style>

</style>