<template>
  <div class="home">
    <div class="mb-5 fixed-top" id="nav-home">
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
            <router-link to="/shoppingbag" v-if="decodedJWT != null"><img src="@/assets/shoppingbag_negative.png" alt="" style="height: 28px;"></router-link>
          </div>
        </div>
      </nav>
    </div>
    <div class="homeRemoteControllUp" style="opacity: 0.7; height: 0;">
      <img src="@/assets/up-white.png" style="width: 16px;" alt="" @click="homeScrollUp">
    </div>
    <div class="homeRemoteControllDown" style="opacity: 0.7; height: 0;">
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
      <h5 class="mt-4">Brands | Category</h5>
      <h5 class="mb-2">Click here to search index.</h5>
      <div class="mx-3 mb-5 d-flex justify-content-between">
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
      <h1>Memebership</h1>
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
  },
  methods: {
    homeScrollUp: function() {
      let position = document.documentElement.scrollTop
      position -= 812
      window.scrollTo(0, position)
    },
    homeScrollDown: function() {
      let position = document.documentElement.scrollTop
      position += 812
      window.scrollTo(0, position)
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
  filter: brightness(65%);
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
  top: 1100px;
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
  margin-top: 37vh;
  margin-left: 89vw;
  width: 20px;
  z-index: 1000;
}
.homeRemoteControllDown {
  position: fixed;
  margin-top: 47vh;
  margin-left: 89vw;
  width: 20px;
  z-index: 1000;
}
#nav {
  padding: 0px;
  background-color: #11181d;
}
#nav a {
  color: white;
}
</style>
