<template>
  <div>
    <router-link to="/product" class="text-decoration-none text-dark" >
      <h6 @click="getCategoryLSList">&nbsp;&nbsp;&nbsp;- {{ depth3 }}</h6>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'indexCategoryLSDepth3',
  props: {
    depth3: {
      type: String
    },
    lskey: {
      type: String
    },
  },
  methods: {
    getCategoryLSList: function() {
      this.$store.dispatch('resetProductList')
      let str = ''
      str += '?depth1=LIFESTYLE'
      str += '&depth2='
      str += this.lskey
      str += '&depth3='
      str += this.depth3
      this.$store.dispatch('changeCategoryCallKey', str)
      this.$store.dispatch('getCategoryList', str)
    },
  },
}
</script>

<style>

</style>