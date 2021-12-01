<template>
  <div>
    <eventListItem v-for="(event, eidx) in eventList" :key="eidx" :event="event" :eidx="eidx"/>
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
}
</script>

<style>

</style>