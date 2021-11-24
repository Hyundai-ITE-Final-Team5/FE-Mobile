<template>
  <div class="ms-2">
    <h1>Index</h1>
    <form class="d-flex my-3 ">
      <input class="form-control me-2">
      <button class="btn" type="submit">
        <img src="@/assets/search.png" alt="" style="width: 24px; border: #ced4da; opacity: 0.7;">
      </button>
    </form>
    <hr class="my-5">
    <indexBrandList/>
    <indexCategoryList/>
  </div>
</template>

<script>
import indexBrandList from '@/components/index/indexBrandList.vue'
import indexCategoryList from '@/components/index/indexCategoryList.vue'

export default {
  name: 'Index',
  components: {
    indexBrandList,
    indexCategoryList,
  },
  methods: {
    showBrand() {
      const brandIndexId = document.getElementById('brandIndex')
      if (brandIndexId.style.display == 'none') brandIndexId.style.display = 'block'
      else brandIndexId.style.display = 'none'
    },
  },
}
</script>

<style>

</style>