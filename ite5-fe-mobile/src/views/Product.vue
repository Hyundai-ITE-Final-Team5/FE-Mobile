<template>
  <div>
    <h1>상품리스트 페이지입니다.</h1>
    <ProductList/>
  </div>
</template>

<script>
import ProductList from '@/components/product/ProductList.vue'

export default {
  name: 'Product',
  components: {
    ProductList,
  }
}
</script>

<style>

</style>