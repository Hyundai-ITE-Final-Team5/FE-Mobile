<template>
  <div>
    <!-- WOMEN -->
    <div class="mt-5 d-flex justify-content-between mx-2" @click="showCategoryWOMENDepth2">
      <h1 class="me-5">WOMEN</h1>
      <img src="@/assets/downSmall.png" alt="" class="btn" style="opacity: 0.4; height: 33px;">
    </div>
    <div id="categoryWOMENDepth2" class="mx-2" style="display: none;">
        <indexCategoryWOMENDepth2 v-for="(womenkey, idx) in categoryWOMENKeys" :key="idx" :womenkey="womenkey" :idx="idx"/>
    </div>
    <!-- MEN -->
    <div class="mt-5 d-flex justify-content-between mx-2" @click="showCategoryMENDepth2">
      <h1 class="me-5">MEN</h1>
      <img src="@/assets/downSmall.png" alt="" class="btn" style="opacity: 0.4; height: 33px;">
    </div>
    <div id="categoryMENDepth2" class="mx-2" style="display: none;">
        <indexCategoryMENDepth2 v-for="(menkey, idx) in categoryMENKeys" :key="idx" :menkey="menkey" :idx="idx"/>
    </div>
    <!-- KIDS -->
    <div class="mt-5 d-flex justify-content-between mx-2" @click="showCategoryKIDSDepth2">
      <h1 class="me-5">KIDS</h1>
      <img src="@/assets/downSmall.png" alt="" class="btn" style="opacity: 0.4; height: 33px;">
    </div>
    <div id="categoryKIDSDepth2" class="mx-2" style="display: none;">
        <indexCategoryKIDSDepth2 v-for="(kidskey, idx) in categoryKIDSKeys" :key="idx" :kidskey="kidskey" :idx="idx"/>
    </div>
    <!-- LIFE STYLE -->
    <div class="mt-5 d-flex justify-content-between mx-2" @click="showCategoryLSDepth2">
      <h1 class="me-5">LIFE STYLE</h1>
      <img src="@/assets/downSmall.png" alt="" class="btn" style="opacity: 0.4; height: 33px;">
    </div>
    <div id="categoryLSDepth2" class="mx-2" style="display: none;">
        <indexCategoryLSDepth2 v-for="(lskey, idx) in categoryLSKeys" :key="idx" :lskey="lskey" :idx="idx"/>
    </div>
  </div>
</template>

<script>
import indexCategoryWOMENDepth2 from '@/components/index/indexCategoryWOMENDepth2.vue'
import indexCategoryMENDepth2 from '@/components/index/indexCategoryMENDepth2.vue'
import indexCategoryKIDSDepth2 from '@/components/index/indexCategoryKIDSDepth2.vue'
import indexCategoryLSDepth2 from '@/components/index/indexCategoryLSDepth2.vue'

export default {
  name: 'indexCategoryList',
  components: {
    indexCategoryWOMENDepth2,
    indexCategoryMENDepth2,
    indexCategoryKIDSDepth2,
    indexCategoryLSDepth2,
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
    showCategoryKIDSDepth2() {
      const categoryKIDSDepth2Id = document.getElementById('categoryKIDSDepth2')
      if (categoryKIDSDepth2Id.style.display == 'none') categoryKIDSDepth2Id.style.display = 'block'
      else categoryKIDSDepth2Id.style.display = 'none'
    },
    showCategoryLSDepth2() {
      const categoryLSDepth2Id = document.getElementById('categoryLSDepth2')
      if (categoryLSDepth2Id.style.display == 'none') categoryLSDepth2Id.style.display = 'block'
      else categoryLSDepth2Id.style.display = 'none'
    },
  },
  created: function() {
    this.$store.dispatch('getCategoryWOMEN')
    this.$store.dispatch('getCategoryMEN')
    this.$store.dispatch('getCategoryKIDS')
    this.$store.dispatch('getCategoryLS')
  },
  computed: {
    categoryWOMENKeys: function() {
      return this.$store.getters.categoryWOMENKeys
    },
    categoryMENKeys: function() {
      return this.$store.getters.categoryMENKeys
    },
    categoryKIDSKeys: function() {
      return this.$store.getters.categoryKIDSKeys
    },
    categoryLSKeys: function() {
      return this.$store.getters.categoryLSKeys
    },
  },
}
</script>

<style>

</style>