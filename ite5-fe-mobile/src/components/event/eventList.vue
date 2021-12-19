<template>
  <div>  
    <img src="@/assets/left-next.png" alt="" @click="moveLeft" style="position: absolute; top: 9vh; right: 14vw; z-index: 10; opacity: 0.4;">
    <img src="@/assets/next.png" alt="" @click="moveRight" style="position: absolute; top: 9vh; right: 3vw; z-index: 10; opacity: 0.4;">
    <div class="d-flex" id="eventtListId" style="overflow-x: scroll; transform: translate3d(0px, 0px, 0px); transition: all 0.2s ease 0s; position: relative;"> 
      <eventListItem v-for="(event, eidx) in eventList" :key="eidx" :event="event" :eidx="eidx"/>
    </div>
  </div>
</template>

<script>
import eventListItem from '@/components/event/eventListItem'
export default {
  name: 'eventList',
  components: {
    eventListItem,
  },
  computed: {
    eventList: function() {
      return this.$store.state.eventList
    },
  },
  methods: {
    moveLeft: function() {
      const eventListId = document.getElementById('eventtListId')
      eventListId.scrollLeft -= 375
    },
    moveRight: function() {
      const eventListId = document.getElementById('eventtListId')
      eventListId.scrollLeft += 375
    },
  },
}
</script>

<style scoped>
#eventtListId {
  scroll-behavior: smooth;
}
#eventtListId::-webkit-scrollbar {
  display: none;
}
</style>