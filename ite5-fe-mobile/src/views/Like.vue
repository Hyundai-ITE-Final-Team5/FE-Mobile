<template>
  <div id="like">
    <div class="mb-5 fixed-top" id="nav">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <img src="@/assets/back.png" style="opacity: 0.6;" alt="" @click="goBack">
          <h3 class="pt-2" @click="moveMenuStatusBarHome">
            <router-link to="/" class="text-decoration-none" id="handsome">HANDSOME</router-link>
          </h3>
          <div class="d-flex">
            <router-link to="/login" v-if="decodedJWT == null">
              <img src="@/assets/user.png" alt="" style=" height: 28px;" @click="moveMenuStatusBarMyPage">
            </router-link>
            <router-link to="/shoppingbag" v-if="decodedJWT != null" class="me-1">
              <img src="@/assets/shop-bag.png" alt="" style="opacity: 0.8; height: 28px;">
              <span class="position-absolute start-89 translate-middle badge rounded-pill bg-dark ps-2" style="top: 44px; height: 21px;">{{ shoppingbagCount }}</span>
            </router-link> 
          </div>
        </div>
      </nav>
    </div>
    <div class="d-flex ms-2 mb-3" style="margin-top: 71px;">
      <img src="@/assets/heart.png" alt="" style="width: 32px; height: 32px;">
      <h5 class="mx-1 mt-1 fw-bold">{{ countLikeList }}</h5>
      <h5 class="mt-1 text-muted">개 상품을 좋아합니다.</h5>
    </div>
    <div class="d-flex justify-content-center">
      <div v-if="loading" class="spinner-border my-2" style="color: gray; margin-top: 60vh;"></div>
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
    loading: function() {
      return this.$store.state.loading
    },
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
    shoppingbagCount: function() {
     return this.$store.state.shoppingbagCount
    },
  },
  methods: {
    moveMenuStatusBarHome: function() {
      const menuStatusBarId = document.getElementById('menuStatusBar')
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveHome")
    },
    moveMenuStatusBarMyPage: function() {
      const menuStatusBarId = document.getElementById('menuStatusBar')
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveMyPage")
    },
    goBack: function() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
#like {
  overflow-x: hidden;
  font-family: GowunBatang-Bold;
}
</style>