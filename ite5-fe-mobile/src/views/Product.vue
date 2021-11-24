<template>
  <div>
    <h3 class="my-5">Category > {{ category }}</h3>
    <ProductList/>
  </div>
</template>

<script>
import ProductList from '@/components/product/ProductList.vue'

export default {
  name: 'Product',
  components: {
    ProductList,
  },
  computed: {
    category: function() {
      return this.$store.state.category
    }
  },
}
</script>

<style>

</style>