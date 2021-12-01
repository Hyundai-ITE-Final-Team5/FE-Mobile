<template>
  <div>
    <router-link to="/product" class="text-decoration-none text-dark" >
      <h6 @click="getCategoryWOMENList">&nbsp;&nbsp;&nbsp;- {{ depth3 }}</h6>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'indexCategoryWOMENDepth3',
  props: {
    depth3: {
      type: String
    },
    womenkey: {
      type: String
    },
  },
  methods: {
    getCategoryWOMENList: function() {
      this.$store.dispatch('resetProductList')
      let str = ''
      str += '?depth1=WOMEN'
      str += '&depth2='
      str += this.womenkey
      str += '&depth3='
      str += this.depth3
      this.$store.dispatch('changeCategoryCallKey', str)
      this.$store.dispatch('getCategoryList', str)
    },
  },
}
</script>

<style scoped>
  h6:hover {
    text-decoration: underline;
  }
</style>