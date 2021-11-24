<template>
  <div>
    <div class="" style="opacity: 0.2; height: 0;">
      <img src="@/assets/up.png" alt="" class="remoteControllUp" @click="scrollUp">
      <br>
      <img src="@/assets/down.png" alt="" class="remoteControllDown" @click="scrollDown">
    </div>
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

  },
  methods: {
    scrollUp: function() {
      let position = document.documentElement.scrollTop
      position -= 770
      window.scrollTo(0, position)
    },
    scrollDown: function() {
      let position = document.documentElement.scrollTop
      position += 770
      window.scrollTo(0, position)
    },
  },
  mounted: function() {
      document.addEventListener('scroll', function() {
      })
  }
}
</script>

<style scoped>
.remoteControllUp {
  position: fixed;
  margin-top: 77vh;
  margin-left: 89vw;
  width: 20px;
}
.remoteControllDown {
  position: fixed;
  margin-top: 80vh;
  margin-left: 89vw;
  width: 20px;
}
</style>