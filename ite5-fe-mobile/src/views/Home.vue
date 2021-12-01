<template>
  <div class="home">
    <div class="mb-5 fixed-top" id="nav1">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <img src="@/assets/back-white.png" alt="" @click="goBack">
          <h4 class="pt-1" @click="moveMenuStatusBarHome">
            <router-link to="/" class="text-decoration-none" id="handsome">HANDSOME</router-link>
          </h4>
          <div class="d-flex">
            <router-link to="/login" v-if="decodedJWT == null">
              <img src="@/assets/login_negative.png" alt="" style="height: 26px;" @click="moveMenuStatusBarMyPage">
            </router-link>
            <router-link to="/shoppingbag" v-if="decodedJWT != null"><img src="@/assets/shoppingbag.png" alt="" style="opacity: 0.9; height: 28px;"></router-link>
          </div>
        </div>
      </nav>
    </div>
    <div class="brand" style="margin-top: -70px;">
      <img src="@/assets/brand/sjsj.jpg" alt="" style="width: 375px; height: 375px; filter: brightness(65%); position: absolute;">
      <img src="@/assets/brand/time.jpg" alt="" style="width: 375px; height: 375px;">
      <img src="@/assets/brand/time.jpg" alt="" style="width: 375px; height: 375px; filter: brightness(65%);">
    </div>
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img v-if="eventList.length > 0" :src="eventList[0].eimg" class="d-block w-100" alt="..." @click="getEventDetail">
          </div>
          <div class="carousel-item">
            <img v-if="eventList.length > 0" :src="eventList[1].eimg" class="d-block w-100" alt="..." @click="getEventDetail">
          </div>
          <div class="carousel-item">
            <img v-if="eventList.length > 0" :src="eventList[2].eimg" class="d-block w-100" alt="..." @click="getEventDetail">
          </div>
          <div class="carousel-item">
            <img v-if="eventList.length > 0" :src="eventList[3].eimg" class="d-block w-100" alt="..." @click="getEventDetail">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created: function() {
    this.$store.dispatch('getEventList')
    this.$store.dispatch('getBestproduct')
  },
  computed: {
    eventList: function() {
      return this.$store.state.eventList
    },
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
  },
  methods: {
    getEventDetail: function() {
      this.$router.push('/event')
    },
      showFooterNavBar: function() {
        const footerNavBarId = document.getElementById('footerNavBar')
        const footerNavBarBtnId = document.getElementById('footerNavBarBtn')
        const footerNavBarBtnImgId = document.getElementById('footerNavBarBtnImg')
        if (footerNavBarId.classList.contains("showFooterNavBar") == true) {
          footerNavBarId.classList.remove("showFooterNavBar")
          footerNavBarId.classList.add("closeFooterNavBar")
          footerNavBarBtnId.classList.remove("showFooterNavBar")
          footerNavBarBtnId.classList.add("closeFooterNavBar")
          footerNavBarBtnImgId.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABoSURBVEiJ7c4xCsJQEEXRM+5AcAvBTgR7V2Tv+uwkpLB0Dx/SWZslpHoQwj8w7X1Dt6LwxC3UnwoNp9BAKwy4hgY+oW63NSP+oXsf8As+n2x3W1G44BzqfwszjqGBufDAPTTwCnX3ZAGCWyJ5FGiNNAAAAABJRU5ErkJggg=='
        } else {
          footerNavBarId.classList.remove("closeFooterNavBar")
          footerNavBarId.classList.add("showFooterNavBar")
          footerNavBarBtnId.classList.remove("closeFooterNavBar")
          footerNavBarBtnId.classList.add("showFooterNavBar")
          footerNavBarBtnImgId.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAA3NCSVQICAjb4U/gAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkUExURf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMcmPmUAAAALdFJOUwAGISQ/f6KxudjjxauaGAAAAAlwSFlzAAAAvAAAALwBzx0kHgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABeSURBVCjPY6AYeATCWKItDLO3C0DYjNU7Gbp3F0I44rt3MFjthkgxVu9ezMC8GiIlvnuXAQNUCizBAJWCSECkoBIQKZgEWAomAZaCS4Ck4BIgKYQEA4NaEgMVAAMDAOogJ5Va++q/AAAAAElFTkSuQmCC'
        }
      },
      closeMenuHome: function() {
        this.$router.push('/')
        const menuStatusBarId = document.getElementById('menuStatusBar')
        menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
        menuStatusBarId.classList.add("moveHome")
      },
      closeMenuIndex: function() {
        this.$router.push('/index')
        const menuStatusBarId = document.getElementById('menuStatusBar')
        menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
        menuStatusBarId.classList.add("moveIndex")
      },
      closeMenuMyPage: function() {
        this.$router.push('/mypage')
        const menuStatusBarId = document.getElementById('menuStatusBar')
        menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
        menuStatusBarId.classList.add("moveMyPage")
      },
      moveMenuStatusBarHome: function() {
        const menuStatusBarId = document.getElementById('menuStatusBar')
        menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
        menuStatusBarId.classList.add("moveHome")
      },
      moveMenuStatusBarIndex: function() {
        const menuStatusBarId = document.getElementById('menuStatusBar')
        menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
        menuStatusBarId.classList.add("moveIndex")
      },
      moveMenuStatusBarLike: function() {
        const menuStatusBarId = document.getElementById('menuStatusBar')
        menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
        menuStatusBarId.classList.add("moveLike")
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
#nav1 {
  padding: 0px;
  background-color: transparent;
}
#nav1 a {
  color: white;
}
</style>
