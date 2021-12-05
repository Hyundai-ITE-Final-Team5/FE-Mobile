<template>
  <div>
    <likeListItem v-for="(like, lidx) in likeList" :key="lidx" :like="like" :lidx="lidx"/>
  </div>
</template>

<script>
import likeListItem from '@/components/like/likeListItem'

export default {
  name: 'likeList',
  components: {
    likeListItem,
  },
  created: function() {
    this.$store.dispatch('getLikeList')
  },
  computed: {
    likeList: function() {
      return this.$store.getters.likeList
    },
  },
}
</script>

<style>

</style>