<template>
  <div id="like">
    <div class="d-flex mb-3">
      <img src="@/assets/heart.png" alt="" style="width: 32px; height: 32px;">
      <h5 class="mx-1 mt-1 fw-bold">{{ countLikeList }}</h5>
      <h5 class="mt-1 text-muted">개 상품을 좋아합니다.</h5>
    </div>
    <likeList/>
    <h2 class="text-center text-muted" style="margin-top: 30vh;" v-if="countLikeList == 0">좋아요 한 상품이 없습니다.</h2>
  </div>
</template>

<script>
import likeList from '@/components/like/likeList'

export default {
  name: 'Like',
  components: {
    likeList,
  },
  computed: {
    countLikeList: function() {
      return this.$store.state.likes.length
    },
  },
}
</script>

<style scoped>
#like {
  overflow-x: hidden;
}
</style>