<template>
  <div id="app">
    <!-- <div class="mb-5 fixed-top" id="nav">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <img src="@/assets/back-white.png" alt="" @click="goBack">
          <h3 class="" @click="moveMenuStatusBarHome">
            <router-link to="/" class="text-decoration-none" id="handsome">HANDSOME</router-link>
          </h3>
          <div class="d-flex">
            <router-link to="/login" v-if="decodedJWT == null">
              <img src="@/assets/login_negative.png" alt="" style=" height: 28px;" @click="moveMenuStatusBarMyPage">
            </router-link>
            <router-link to="/shoppingbag" v-if="decodedJWT != null"><img src="@/assets/shoppingbag.png" alt="" style="opacity: 0.9; height: 28px;"></router-link>
          </div>
        </div>
      </nav>
    </div> -->
    <router-view/>
    <div style="height: 110px;">&nbsp;</div>
    <div class="fixed-bottom" id="footerNav">
      <button class="btn mb-3" style="color: white;" @click="showFooterNavBar" id="footerNavBarBtn">
        <img src="@/assets/menu.png" alt="" id="footerNavBarBtnImg" style="opacity: 0.7;">
      </button>
      <div id="footerNavBar" class="">
        <div class="d-flex justify-content-between pt-1" id="footernav">
            <router-link to="/" class="col-3 text-center text-decoration-none">
              <img src="@/assets/home.png" alt="" style="width: 24px;" @click="moveMenuStatusBarHome">
              <h6 class="mt-1" @click="moveMenuStatusBarHome">Home</h6>
            </router-link>
            <router-link to="/index" class="col-3 text-center text-decoration-none">
              <img src="@/assets/index.png" alt="" style="width: 24px;" @click="moveMenuStatusBarIndex">
              <h6 class="mt-1" @click="moveMenuStatusBarIndex">Index</h6>
            </router-link>
            <!-- 비로그인 -->
            <router-link to="/join" v-if="decodedJWT == null" class="col-3 text-center text-decoration-none">
              <img src="@/assets/enter.png" alt="" style="width: 24px;" @click="moveMenuStatusBarLike">
              <h6 class="mt-1" @click="moveMenuStatusBarLike">Sign Up</h6>
            </router-link>
            <!-- 로그인 -->
            <router-link to="/like" v-if="decodedJWT != null" class="col-3 text-center text-decoration-none">
              <img src="@/assets/heart.png" alt="" style="width: 24px;" @click="moveMenuStatusBarLike">
              <h6 class="mt-1" @click="moveMenuStatusBarLike">Like</h6>
            </router-link>
            <!-- 비로그인 -->
            <router-link to="/login" v-if="decodedJWT == null" class="col-3 text-center text-decoration-none">
              <img src="@/assets/user.png" alt="" style="width: 24px;" @click="moveMenuStatusBarMyPage">
              <h6 class="mt-1" @click="moveMenuStatusBarMyPage">Login</h6>
            </router-link>
            <!-- 로그인 -->
            <router-link to="/mypage" v-if="decodedJWT != null" class="col-3 text-center text-decoration-none">
              <img src="@/assets/user.png" alt="" style="width: 24px;" @click="moveMenuStatusBarMyPage">
              <h6 class="mt-1" @click="moveMenuStatusBarMyPage">My Page</h6>
            </router-link>
        </div>
        <div class="mb-2 col-3" style="border: solid; border-color: #d3d3d3;" id="menuStatusBar"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
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
    computed: {
      decodedJWT: function() {
        return this.$store.getters.decodedToken
      },
    },
  }
</script>

<style>
hr {
  opacity: 0.2;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
/* 스크롤바 숨기기 구현할 예정 */
#app::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}
#nav {
  padding: 0px;
  background-color: white;
}
/* #11181d */
#nav a {
  color: black;
}
.btn {
  border-radius: 0rem;
}
.btn:focus {   
  box-shadow: 0px 0px 0px transparent;
  border-color: #a0a0a0;
}
.form-check-input[type=checkbox] {
  border-radius: 0rem;
}
.form-check-input[type=checkbox]:focus {
  box-shadow: 0px 0px 0px transparent;
  border-color: #a0a0a0;
}
#navbarSupportedContent {
  padding: 6px;
}
#footerNav {
  bottom: -10vh;
}
#footerNavBar {
  padding-top: 8px;
  position: relative;
  background-color: white;
  height: 75px;
}
#footerNavBarBtn {
  position: relative;
}
#footerNavBarBtn:focus {
  position: relative;
  box-shadow: 0px 0px 0px transparent;
  border-color: #a0a0a0;
  border: 0;
}
#footerNav {
  padding: 0px;
  background-color: transparent;
  /* background-color: skyblue; */
}
#footerNav a {
  color: #2c3e50;
  opacity: 0.5;
}
#footerNav a.router-link-exact-active {
  font-weight: bolder;
  opacity: 1;
}
.moveHome {
  transform: translate(0vw, 0vw);
  transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.moveIndex {
  transform: translate(25vw, 0vw);
  transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.moveLike {
  transform: translate(50vw, 0vw);
  transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.moveMyPage {
  transform: translate(74vw, 0vw);
  transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.showFooterNavBar {
  transform: translate(0vw, -21vw);
  transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.closeFooterNavBar {
  transform: translate(0vw, 0vw);
  transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
