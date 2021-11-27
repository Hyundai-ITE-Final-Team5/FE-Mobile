<template>
  <div>
    <likeListItem v-for="(like, idx) in likeList" :key="idx" :like="like" :idx="idx"/>
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