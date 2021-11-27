<template>
  <div>
    <div @click="changeImg">
      <img :src="color.pcchipimg" alt="" class="ms-2" style="height: 24px;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductListItemColor',
  data: function() {
    return {
      upHere : false
    }
  },
  props: {
    color: {
      type: Object
    },
    idx: {
      type: Number
    },
  },
  methods: {
    changeImg: function() {
      this.$emit('changeImg', this.color.pcimg1)
      this.$emit('changeProductColorId', this.color.pcid)
    },
  },
}
</script>

<style scoped>

</style>