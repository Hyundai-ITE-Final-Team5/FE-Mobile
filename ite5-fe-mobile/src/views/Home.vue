<template>
  <div class="home">
    <div class="mb-5 fixed-top" id="nav-home">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <img src="@/assets/menu_negative.png" alt="" @click="showFooterNavBar">
          <h3 class="pt-2" @click="moveMenuStatusBarHome">
            <router-link to="/" class="text-decoration-none" id="handsome">HANDSOME</router-link>
          </h3>
          <div class="d-flex">
            <router-link to="/login" v-if="decodedJWT == null">
              <img src="@/assets/login_negative.png" alt="" style=" height: 28px;" @click="moveMenuStatusBarMyPage">
            </router-link>
            <div>
              <router-link to="/shoppingbag" v-if="decodedJWT != null" class="me-1">
                <img src="@/assets/shop-bag_negative.png" alt="" style="height: 28px;">
                <span class="position-absolute start-89 translate-middle badge rounded-pill bg-dark ps-2" style="top: 44px; height: 21px;">{{ shoppingbagCount }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="homeRemoteControllUp" style="">
      <img src="@/assets/up-white.png" style="width: 16px;" alt="" @click="homeScrollUp">
    </div>
    <div class="mb-2" id="homePageBar1" style="transform: scale(2.0, 2.0); width: 3px; height: 18px; margin-top: 39vh; opacity: 1.0;"></div>
    <div class="mb-2" id="homePageBar2" style="transform: scale(1.0, 1.0); width: 3px; height: 18px; margin-top: 43vh; opacity: 0.5;"></div>
    <div class="mb-2" id="homePageBar3" style="transform: scale(1.0, 1.0); width: 3px; height: 18px; margin-top: 46vh; opacity: 0.5;"></div>
    <div class="homeRemoteControllDown" style="">
      <img src="@/assets/down-white.png" style="width: 16px;" alt="" @click="homeScrollDown">
    </div>
    <div class="bg-content1 ms-2">
      <h1>CREATOR</h1>
      <h1>LEADER</h1>
      <h1>MOTIVATOR</h1>
      <h5 class="mt-5">THE HANDSOME is expanding its business beyond fashion to lifestyle.</h5>
      <h5 class="mb-5">We will not settle for the present, but lead the global fashion, beauty, and lifestyle.</h5>
      <div class="d-flex justify-content-center">
        <button class="btn btn-outline-light" style="width: 43vw; border: 2px solid; border-radius: 0rem;" 
                @click="goIndex">GO SHOP</button>
        <button class="btn btn-outline-light mx-2" style="width: 43vw; border: 2px solid; border-radius: 0rem;" 
                @click="goEvent">EVENT</button>
      </div>
    </div>
    <div class="bg-content2 ms-2">
      <h1>AT A GLANCE</h1>
      <!-- <div class="mx-5 my-5 d-flex justify-content-between">
        <div class="col-3 text-center">
          <img src="@/assets/office-building_negative.png" alt="">
          <h6 class="mt-3" style="color: #FAFAFA;">Established</h6>
          <h6>1987</h6>
        </div>
        <div class="col-3 text-center">
          <img src="@/assets/store_negative.png" style="opacity: 0.8;" alt="">
          <h6 class="mt-3">Stores</h6>
          <h6>1389</h6>
        </div>
        <div class="col-3 text-center">
          <img src="@/assets/mannequin_negative.png" alt="">
          <h6 class="mt-3">Brands</h6>
          <h6>29</h6>
        </div>
      </div> -->
      <h5 class="mt-5">Brands | Category</h5>
      <h5>Find your style,</h5>
      <h5 class="mb-3">Click here to search index.</h5>
      <div class="me-2 mb-5 d-flex justify-content-between">
        <form class="d-flex my-3 ">
          <input class="form-control me-2 form-control border-3 border-top-0 border-start-0 border-end-0 text-light" style="background-color: transparent;">
          <button class="btn btn-outline-light border-3 border-top-0 border-start-0 border-end-0" style="width: 35vw; border: 2px solid; border-radius: 0rem;" 
                  >SEARCH</button>
        </form>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-outline-light" style="width: 43vw; border: 2px solid; border-radius: 0rem;" 
                >BEST</button>
        <button class="btn btn-outline-light mx-2" style="width: 43vw; border: 2px solid; border-radius: 0rem;" 
                >NEW</button>
      </div>
    </div>
    <div class="bg-content3 ms-2">
      <h1>Membership</h1>
      <h1>Benefit</h1>
      <div class="mx-3 my-5 d-flex justify-content-between">
        <div class="col-3 text-center">
          <img src="@/assets/diamond_negative.png" alt="">
          <h6 class="mt-3" style="color: #FAFAFA;">10,0000</h6>
          <h6>Point</h6>
        </div>
        <div class="col-3 text-center">
          <img src="@/assets/sale-tag_negative.png" alt="">
          <h6 class="mt-3">Coupon</h6>
        </div>
        <div class="col-3 text-center">
          <img src="@/assets/envelope_negative.png" alt="">
          <h6 class="mt-3">News Letter</h6>
        </div>
        <div class="col-3 text-center">
          <img src="@/assets/gift-box_negative.png" alt="">
          <h6 class="mt-3">Gift</h6>
        </div>
      </div>
      <div v-if="decodedJWT == null" class="d-flex justify-content-center">
        <button class="btn btn-outline-light" style="width: 43vw; border: 2px solid; border-radius: 0rem;" 
                @click="goSignup">SIGNUP</button>
        <button class="btn btn-outline-light mx-2" style="width: 43vw; border: 2px solid; border-radius: 0rem;" 
                @click="goLogin">LOGIN</button>
      </div>
      <div v-if="decodedJWT != null" class="d-flex justify-content-center">
        <button class="btn btn-outline-light" style="width: 43vw; border: 2px solid; border-radius: 0rem;" 
                @click="goLike">LIKE</button>
        <button class="btn btn-outline-light mx-2" style="width: 43vw; border: 2px solid; border-radius: 0rem;" 
                @click="goMypage">MY PAGE</button>
      </div>
    </div>
    <div class="bg-img1"></div>
    <div class="bg-img2"></div>
    <div class="bg-img3"></div>
    <div>
      <h1 class="mt-4 ms-2">EVENT</h1>
      <button type="button" class="btn btn-primary position-relative">
        Inbox
        <span class="position-absolute top-100 start-100 translate-middle badge rounded-pill bg-dark">
          {{ shoppingbagCount }}
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>
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
    <h1 class="mt-5 ms-2">BEST</h1>
    <bestList/>
  </div>
</template>
<script>
import bestList from '@/components/best/bestList'

export default {
  name: 'Home',
  components: {
    bestList,
  },
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
    shoppingbagCount: function() {
     return this.$store.state.shoppingbagCount
    },
  },
  methods: {
    homeScrollUp: function() {
      let position = document.documentElement.scrollTop
      position -= 812
      window.scrollTo(0, position)
      const homePageBar1Id = document.getElementById('homePageBar1')
      const homePageBar2Id = document.getElementById('homePageBar2')
      const homePageBar3Id = document.getElementById('homePageBar3')
      if (homePageBar2Id.style.transform == 'scale(2, 2)') {
        homePageBar1Id.style.transform = 'scale(2.0, 2.0)'
        homePageBar1Id.style.marginTop = '39vh'
        homePageBar1Id.style.opacity = '1.0'
        homePageBar2Id.style.transform = 'scale(1.0, 1.0)'
        homePageBar2Id.style.marginTop = '43vh'
        homePageBar2Id.style.opacity = '0.5'
        homePageBar3Id.style.transform = 'scale(1.0, 1.0)'
      } else if (homePageBar3Id.style.transform == 'scale(2, 2)') {
        homePageBar1Id.style.transform = 'scale(1.0, 1.0)'
        homePageBar2Id.style.transform = 'scale(2.0, 2.0)'
        homePageBar2Id.style.marginTop = '42vh'
        homePageBar2Id.style.opacity = '1.0'
        homePageBar3Id.style.transform = 'scale(1.0, 1.0)'
        homePageBar3Id.style.marginTop = '46vh'
        homePageBar3Id.style.opacity = '0.5'
      }
    },
    homeScrollDown: function() {
      let position = document.documentElement.scrollTop
      position += 812
      window.scrollTo(0, position)
      const homePageBar1Id = document.getElementById('homePageBar1')
      const homePageBar2Id = document.getElementById('homePageBar2')
      const homePageBar3Id = document.getElementById('homePageBar3')
      if (homePageBar1Id.style.transform == 'scale(2, 2)') {
        homePageBar1Id.style.transform = 'scale(1.0, 1.0)'
        homePageBar1Id.style.marginTop = '38vh'
        homePageBar1Id.style.opacity = '0.5'
        homePageBar2Id.style.transform = 'scale(2.0, 2.0)'
        homePageBar2Id.style.marginTop = '42vh'
        homePageBar2Id.style.opacity = '1.0'
        homePageBar3Id.style.transform = 'scale(1.0, 1.0)'
      } else if (homePageBar2Id.style.transform == 'scale(2, 2)') {
        homePageBar1Id.style.transform = 'scale(1.0, 1.0)'
        homePageBar2Id.style.transform = 'scale(1.0, 1.0)'
        homePageBar2Id.style.marginTop = '41vh'
        homePageBar2Id.style.opacity = '0.5'
        homePageBar3Id.style.transform = 'scale(2.0, 2.0)'
        homePageBar3Id.style.marginTop = '45vh'
        homePageBar3Id.style.opacity = '1.0'
      }
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
    getEventDetail: function() {
      this.$router.push('/event')
    },
    goBack: function() {
      this.$router.go(-1)
    },
    goIndex: function() {
      this.$router.push('/index')
      this.moveMenuStatusBarIndex()
    },
    goEvent: function() {
      this.$router.push('/event')
    },
    goLogin: function() {
      this.$router.push('/login')
      this.moveMenuStatusBarIndex()
    },
    goSignup: function() {
      this.$router.push('/join')
    },
    goLike: function() {
      this.$router.push('/like')
      this.moveMenuStatusBarLike()
    },
    goMypage: function() {
      this.$router.push('/mypage')
      this.moveMenuStatusBarMyPage()
    },
  },
}
</script>

<style scoped>
#nav-home {
  padding: 0px;
  background-color: transparent;
}
/* #11181d */
#nav-home a {
  color: white;
}
.bg-img1 {
  height: 812px;
  position: relative;
  background-image: url("../assets/brand/brand-pop-2.jpg");
  filter: brightness(60%);
  z-index: 10;
}
.bg-img2 {
  height: 812px;
  position: relative;
  background-image: url("../assets/brand/brand-pop-1.jpg");
  filter: brightness(55%);
  z-index: 10;
}
.bg-img3 {
  height: 812px;
  position: relative;
  background-image: url("../assets/brand/brand-pop-6.jpg");
  filter: brightness(60%);
  z-index: 10;
}
.bg-content1 {
  position: absolute;
  top: 300px;
  left: 3vw;
  z-index: 100;
  color: #e9e9e9;
}
.bg-content2 {
  position: absolute;
  top: 1120px;
  left: 3vw;
  z-index: 100;
  color: #e9e9e9;
}
.bg-content3 {
  position: absolute;
  top: 1924px;
  left: 3vw;
  z-index: 100;
  color: #e9e9e9;
}
.homeRemoteControllUp {
  position: fixed;
  margin-top: 34vh;
  margin-left: 335px;
  width: 20px;
  z-index: 1000;
}
.homeRemoteControllDown {
  position: fixed;
  margin-top: 49vh;
  margin-left: 335px;
  width: 20px;
  z-index: 1000;
}
#homePageBar1 {
  position: fixed;
  border: 2px;
  border-color: white;
  background-color: white;
  margin-left: 91vw;
  z-index: 1000;
  filter: brightness(150%);
  transition: all 0.5s linear;
}
#homePageBar2 {
  position: fixed;
  border: 2px;
  border-color: white;
  background-color: white;
  margin-left: 91vw;
  z-index: 1000;
  transition: all 0.5s linear;
}
#homePageBar3 {
  position: fixed;
  border: 2px;
  border-color: white;
  background-color: white;
  margin-left: 91vw;
  z-index: 1000;
  transition: all 0.5s linear;
}
#nav {
  padding: 0px;
  background-color: #11181d;
}
#nav a {
  color: white;
}
</style>
