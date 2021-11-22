<template>
  <div>
    <ProductListItem
      v-for="(product, idx) in getProducts"
      :key="idx"
      :product="product"
      :idx="idx"
    />
  </div>
</template>

<script>
import ProductListItem from '@/components/product/ProductListItem.vue'

export default {
  name: 'ProductList',
  components: {
    ProductListItem,
  },
  computed: {
    getProducts: function() {
      return this.$store.state.products
    }
  },
}
</script>

<style>

</style>