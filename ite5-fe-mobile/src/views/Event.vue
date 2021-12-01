<template>
  <div>
    <h1 class="ms-2 mb-3">이벤트</h1>
    <eventList/>
  </div>
</template>

<script>
import eventList from '@/components/event/eventList'

export default {
  name: 'Event',
  components: {
    eventList,
  },
}
</script>

<style>

</style>