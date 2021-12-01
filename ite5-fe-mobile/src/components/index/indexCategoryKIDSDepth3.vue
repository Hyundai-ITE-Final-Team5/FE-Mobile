<template>
  <div>
    <router-link to="/product" class="text-decoration-none text-dark" >
      <h6 @click="getCategoryKIDSList">&nbsp;&nbsp;&nbsp;- {{ depth3 }}</h6>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'indexCategoryKIDSDepth3',
  props: {
    depth3: {
      type: String
    },
    kidskey: {
      type: String
    },
  },
  computed: {

  },
  methods: {
    getCategoryKIDSList: function() {
      this.$store.dispatch('resetProductList')
      let str = ''
      str += '?depth1=KIDS'
      str += '&depth2='
      str += this.kidskey
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