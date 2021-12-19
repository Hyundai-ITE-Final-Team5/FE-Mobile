<template>
  <div>
    <h4 @click="putSearchInput">{{ res }}</h4>
  </div>
</template>

<script>
export default {
  name: 'indexSearchListItem',
  props: {
    res : {
      type: String
    },
    ridx: {
      type: Number
    },
  },
  data: function() {
    return {
      bno: null,
      isHover: false,
    }
  },
  // created: function() {
  //   for (let i = 0; i < this.brandIndex.length; i++) {
  //     if (this.brandIndex[i].bname == this.res) {
  //       this.bno = this.brandIndex[i].bno
  //       break;
  //     }
  //   }
  // },
  methods: {
    putSearchInput() {
      this.$emit('putSearchInput', this.res)
    },
  },
  computed: {
    brandIndex: function() {
      return this.$store.getters.brandIndex
    },
  },
}
</script>

<style scoped>

</style>