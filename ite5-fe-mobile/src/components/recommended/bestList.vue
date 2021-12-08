<template>
  <div class="pt-4">
    <img src="@/assets/left-next.png" alt="" @click="moveLeft" style="position: absolute; top: 42vh; left: 5vw; z-index: 10; opacity: 0.4;">
    <img src="@/assets/next.png" alt="" @click="moveRight" style="position: absolute; top: 42vh; right: 5vw; z-index: 10; opacity: 0.4;">
    <div class="d-flex" id="bestList" style="overflow-x: scroll; transform: translate3d(0px, 0px, 0px); transition: all 0.2s ease 0s; padding-left: 40px; padding-right: 40px; position: relative;">
      <bestListItem v-for="(best, bidx) in bestList" :key="bidx" :best="best" :bidx="bidx"/>
    </div>
  </div>
</template>

<script>
import bestListItem from '@/components/recommended/bestListItem'

export default {
  name: 'bestList',
  components: {
    bestListItem,
  },
  computed: {
    bestList: function() {
      return this.$store.state.bestList
    },
  },
  methods: {
    moveLeft: function() {
      const bestListId = document.getElementById('bestList')
      bestListId.scrollLeft -= 280
    },
    moveRight: function() {
      const bestListId = document.getElementById('bestList')
      bestListId.scrollLeft += 280
    },
  },
  mounted: function() {
    const bestListId = document.getElementById('bestList')
    bestListId.scrollLeft = 1120
  },
}
</script>

<style scoped>
#bestList {
  scroll-behavior: smooth;
  -ms-overflow-style: none;
}
#bestList::-webkit-scrollbar {
  display: none;
}
</style>