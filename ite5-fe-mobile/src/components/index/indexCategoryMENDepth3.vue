<template>
  <div>
    <router-link to="/product" class="text-decoration-none text-dark" >
      <h6 @click="getCategoryMENList">&nbsp;&nbsp;&nbsp;- {{ depth3 }}</h6>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'indexCategoryMENDepth3',
  props: {
    depth3: {
      type: String
    },
    menkey: {
      type: String
    },
  },
  methods: {
    getCategoryMENList: function() {
      let str = ''
      str += '?depth1=MEN'
      str += '&depth2='
      str += this.menkey
      str += '&depth3='
      str += this.depth3
      this.$store.dispatch('getCategoryMENList', str)
    },
  },
}
</script>

<style>

</style>