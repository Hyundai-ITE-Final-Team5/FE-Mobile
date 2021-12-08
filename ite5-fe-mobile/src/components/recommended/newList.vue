<template>
  <div class="pt-4">
    <img src="@/assets/left-next.png" alt="" @click="moveLeft" style="position: absolute; top: 42vh; left: 5vw; z-index: 10; opacity: 0.4;">
    <img src="@/assets/next.png" alt="" @click="moveRight" style="position: absolute; top: 42vh; right: 5vw; z-index: 10; opacity: 0.4;">
    <div class="d-flex" id="newList" style="overflow-x: scroll; transform: translate3d(0px, 0px, 0px); transition: all 0.2s ease 0s; padding-left: 40px; padding-right: 40px; position: relative;">
      <newListItem v-for="(newItem, nidx) in newList" :key="nidx" :newItem="newItem" :nidx="nidx"/>
    </div>
  </div>
</template>

<script>
import newListItem from '@/components/recommended/newListItem'

export default {
  name: 'newList',
  components: {
    newListItem,
  },
  computed: {
    newList: function() {
      return this.$store.state.newList
    },
  },
  methods: {
    moveLeft: function() {
      const newListId = document.getElementById('newList')
      newListId.scrollLeft -= 280
    },
    moveRight: function() {
      const newListId = document.getElementById('newList')
      newListId.scrollLeft += 280
    },
  },
  mounted: function() {
    const newListId = document.getElementById('newList')
    newListId.scrollLeft = 1120
  },
}
</script>

<style scoped>
#newList {
  scroll-behavior: smooth;
  -ms-overflow-style: none;
}
#newList::-webkit-scrollbar {
  display: none;
}
</style>