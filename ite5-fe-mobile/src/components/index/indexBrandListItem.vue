<template>
  <div>
    <router-link to="/product" class="text-decoration-none text-dark">
      <h4>&nbsp;<span @click="getBrandList">• {{ b.bname }}</span></h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'indexBrandListItem',
  props: {
    b: {
      type: Object,
    },
    idx: {
      type: Number,
    }
  },
  methods: {
    getBrandList() {
      this.$store.dispatch('resetProductList')
      this.$store.dispatch('getBrandList', this.b.bno)
      this.$store.dispatch('changeBrandCallKey', this.b.bno)
    }
  },
}
</script>

<style>

</style>