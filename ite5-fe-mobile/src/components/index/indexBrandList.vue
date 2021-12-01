<template>
  <div>
    <div class="mt-5 d-flex justify-content-between" @click="showBrand">
      <h1 class="mt-5 me-5">BRAND</h1>
      <img src="@/assets/downSmall.png" alt="" class="btn mt-5" style="opacity: 0.4; height: 33px;">
    </div>
    <div id="brandIndex" style="display: none;">
      <indexBrandListItem v-for="(b, idx) in brandIndex" :key="idx" :b="b" :idx="idx" />
    </div>
  </div>
</template>

<script>
import indexBrandListItem from '@/components/index/indexBrandListItem.vue'

export default {
  name: 'indexBrandList',
  components: {
    indexBrandListItem,
  },
  created: function() {
    this.$store.dispatch('getBrandIndex')
  },
  methods: {
    showBrand() {
      const brandIndexId = document.getElementById('brandIndex')
      if (brandIndexId.style.display == 'none') brandIndexId.style.display = 'block'
      else brandIndexId.style.display = 'none'
    },
  },
  computed: {
    brandIndex: function() {
      return this.$store.getters.brandIndex
    }
  },
}
</script>

<style>

</style>