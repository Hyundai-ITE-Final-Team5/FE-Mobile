<template>
  <div>
    <div class="mt-5 d-flex justify-content-between" @click="showWOMEN">
      <h1 class="me-5">WOMEN</h1>
      <img src="@/assets/downSmall.png" alt="" class="btn" style="opacity: 0.4; height: 33px;">
    </div>
    <div id="categoryWOMEN" style="display: none;">
        <indexCategoryWOMENDepth2 v-for="(womenkey, idx) in categoryWOMENKeys" :key="idx" :womenkey="womenkey"/>
    </div>
  </div>
</template>

<script>
import indexCategoryWOMENDepth2 from '@/components/index/indexCategoryWOMENDepth2.vue'

export default {
  name: 'indexCategoryList',
  components: {
    indexCategoryWOMENDepth2,
  },
  methods: {
    showWOMEN() {
      const categoryWOMENId = document.getElementById('categoryWOMEN')
      if (categoryWOMENId.style.display == 'none') categoryWOMENId.style.display = 'block'
      else categoryWOMENId.style.display = 'none'
    },
  },
  created: function() {
    this.$store.dispatch('getCategoryWOMEN')
  },
  computed: {
    categoryWOMENKeys: function() {
      return this.$store.getters.categoryWOMENKeys
    },
  },
}
</script>

<style>

</style>