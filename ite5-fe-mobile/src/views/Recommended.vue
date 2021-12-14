<template>
  <div id="recommended">
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
    <h1 style="margin-top: 101px;"></h1>
    <div class="d-flex justify-content-center mt-4">
      <h2 @click="showbestList">BEST</h2>
      <h2 class="mx-3">|</h2>
      <h2 @click="showNewList">NEW</h2>
    </div>
    <div class="moveBest mb-4 col-2" style="border: solid; border-color: #d3d3d3;" id="recommendedStatusBar"></div>
    <bestList id="bestListId" style="display: block;"/>
    <newList id="newListId" style="display: none;"/>
  </div>
</template>

<script>
import bestList from '@/components/recommended/bestList'
import newList from '@/components/recommended/newList'

export default {
  name: 'Recommended',
  components: {
    bestList,
    newList,
  },
  computed: {
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
    showbestList: function() {
      const bestListId = document.getElementById('bestListId')
      const newListId = document.getElementById('newListId')
      const recommendedStatusBarId = document.getElementById('recommendedStatusBar')
      if (bestListId.style.display == 'none') {
        bestListId.style.display = 'block'
        newListId.style.display = 'none'
      }
      recommendedStatusBarId.classList.remove("moveBest", "moveNew")
      recommendedStatusBarId.classList.add("moveBest")
    },
    showNewList: function() {
      const bestListId = document.getElementById('bestListId')
      const newListId = document.getElementById('newListId')
      const recommendedStatusBarId = document.getElementById('recommendedStatusBar')
      if (newListId.style.display == 'none') {
        bestListId.style.display = 'none'
        newListId.style.display = 'block'
      }
      recommendedStatusBarId.classList.remove("moveBest", "moveNew")
      recommendedStatusBarId.classList.add("moveNew")
    },
  },
}
</script>

<style scoped>
#recommended {
  font-family: GowunBatang-Bold;
}
#recommendedStatusBar {
  position: relative;
  width: 17vw;
}
.moveBest {
  transform: translate(29vw, 0vw);
  transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.moveNew {
  transform: translate(55vw, 0vw);
  transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>