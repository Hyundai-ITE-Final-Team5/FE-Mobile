<template>
  <div>
    <likeListItem/>
  </div>
</template>

<script>
import likeListItem from '@/components/like/likeListItem'

export default {
  name: 'likeList',
  components: {
    likeListItem,
  },
  computed: {
    getLikes: function() {
      return this.$store.state.likes
    },
  },
}
</script>

<style>

</style>