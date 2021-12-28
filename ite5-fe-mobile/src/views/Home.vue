<template>
  <div class="home">
    <div class="mb-5 fixed-top" id="nav-home">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <img src="@/assets/menu_negative.png" alt="" @click="showFooterNavBar" />
          <h3 class="pt-2" @click="moveMenuStatusBarHome">
            <router-link to="/" class="text-decoration-none" id="handsome">HANDSOME</router-link>
          </h3>
          <div class="d-flex">
            <router-link to="/login" v-if="decodedJWT == null">
              <img
                src="@/assets/login_negative.png"
                alt=""
                style="height: 28px"
                @click="moveMenuStatusBarMyPage"
              />
            </router-link>
            <div>
              <router-link to="/shoppingbag" v-if="decodedJWT != null" class="me-1">
                <img src="@/assets/shop-bag_negative.png" alt="" style="height: 28px" />
                <span
                  class="
                    position-absolute
                    start-89
                    translate-middle
                    badge
                    rounded-pill
                    bg-dark
                    ps-2
                  "
                  style="top: 44px; height: 21px"
                  >{{ shoppingbagCount }}</span
                >
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="homeRemoteControllUp" style="">
      <img src="@/assets/up-white.png" style="width: 16px" alt="" @click="homeScrollUp" />
    </div>
    <div
      class="mb-2"
      id="homePageBar1"
      style="transform: scale(2, 2); width: 3px; height: 18px; margin-top: 39vh; opacity: 1"
    ></div>
    <div
      class="mb-2"
      id="homePageBar2"
      style="transform: scale(1, 1); width: 3px; height: 18px; margin-top: 43vh; opacity: 0.5"
    ></div>
    <div
      class="mb-2"
      id="homePageBar3"
      style="transform: scale(1, 1); width: 3px; height: 18px; margin-top: 46vh; opacity: 0.5"
    ></div>
    <div class="homeRemoteControllDown" style="">
      <img src="@/assets/down-white.png" style="width: 16px" alt="" @click="homeScrollDown" />
    </div>
    <div v-if="uiInfo.length > 0" class="ms-2" :class="{ bgcontent1: uiInfo[0].honame == 'goshopevent', bgcontent2: uiInfo[1].honame == 'goshopevent', bgcontent3: uiInfo[2].honame == 'goshopevent' }">
      <h1>CREATOR</h1>
      <h1>LEADER</h1>
      <h1>MOTIVATOR</h1>
      <h5 class="mt-5">THE HANDSOME is expanding its business beyond fashion to lifestyle.</h5>
      <h5 class="mb-5">
        We will not settle for the present, but lead the global fashion, beauty, and lifestyle.
      </h5>
      <div class="d-flex justify-content-center">
        <button
          class="btn btn-outline-light"
          style="width: 43vw; border: 2px solid; border-radius: 0rem"
          @click="goIndex"
        >
          GO SHOP
        </button>
        <button
          class="btn btn-outline-light mx-2"
          style="width: 43vw; border: 2px solid; border-radius: 0rem"
          @click="goEvent"
        >
          EVENT
        </button>
      </div>
    </div>
    <div v-if="uiInfo.length > 0" class="ms-2" :class="{ bgcontent1: uiInfo[0].honame == 'bestnew', bgcontent2: uiInfo[1].honame == 'bestnew', bgcontent3: uiInfo[2].honame == 'bestnew' }">
      <h1>AT A GLANCE</h1>
      <h5 class="mt-5">Brands | Category</h5>
      <h5>Find your style,</h5>
      <h5 class="mb-3">Click here to search index.</h5>
      <div class="me-2 mb-5 px-2 d-flex justify-content-between">
        <form class="d-flex my-3">
          <input
            class="
              form-control
              me-2
              form-control
              border-3 border-top-0 border-start-0 border-end-0
              text-light
            "
            style="background-color: transparent"
          />
          <button
            class="btn btn-outline-light border-3 border-top-0 border-start-0 border-end-0"
            style="width: 35vw; border: 2px solid; border-radius: 0rem"
          >
            SEARCH
          </button>
        </form>
      </div>
      <div class="d-flex justify-content-center">
        <button
          class="btn btn-outline-light"
          style="width: 43vw; border: 2px solid; border-radius: 0rem"
          @click="goRecommended"
        >
          BEST
        </button>
        <button
          class="btn btn-outline-light mx-2"
          style="width: 43vw; border: 2px solid; border-radius: 0rem"
          @click="goRecommended"
        >
          NEW
        </button>
      </div>
    </div>
    <div v-if="uiInfo.length > 0" class="ms-2" :class="{ bgcontent1: uiInfo[0].honame == 'membership', bgcontent2: uiInfo[1].honame == 'membership', bgcontent3: uiInfo[2].honame == 'membership' }">
      <h1>Membership</h1>
      <h1>Benefit</h1>
      <div class="mx-3 my-5 d-flex justify-content-between">
        <div class="col-3 text-center">
          <img src="@/assets/diamond_negative.png" alt="" />
          <h6 class="mt-3" style="color: #fafafa">10,0000</h6>
          <h6>Point</h6>
        </div>
        <div class="col-3 text-center">
          <img src="@/assets/sale-tag_negative.png" alt="" />
          <h6 class="mt-3">Coupon</h6>
        </div>
        <div class="col-3 text-center">
          <img src="@/assets/envelope_negative.png" alt="" />
          <h6 class="mt-3">News Letter</h6>
        </div>
        <div class="col-3 text-center">
          <img src="@/assets/gift-box_negative.png" alt="" />
          <h6 class="mt-3">Gift</h6>
        </div>
      </div>
      <div v-if="decodedJWT == null" class="d-flex justify-content-center">
        <button
          class="btn btn-outline-light"
          style="width: 43vw; border: 2px solid; border-radius: 0rem"
          @click="goSignup"
        >
          SIGNUP
        </button>
        <button
          class="btn btn-outline-light mx-2"
          style="width: 43vw; border: 2px solid; border-radius: 0rem"
          @click="goLogin"
        >
          LOGIN
        </button>
      </div>
      <div v-if="decodedJWT != null" class="d-flex justify-content-center">
        <button
          class="btn btn-outline-light"
          style="width: 43vw; border: 2px solid; border-radius: 0rem"
          @click="goLike"
        >
          LIKE
        </button>
        <button
          class="btn btn-outline-light mx-2"
          style="width: 43vw; border: 2px solid; border-radius: 0rem"
          @click="goMypage"
        >
          MY PAGE
        </button>
      </div>
    </div>
    <div v-if="uiInfo.length > 0" id="bg-img1"  v-bind:style="{ backgroundImage: 'url(' + uiInfo[0].hiimg+ ')' }"></div>
    <div v-if="uiInfo.length > 0" id="bg-img2"  v-bind:style="{ backgroundImage: 'url(' + uiInfo[1].hiimg+ ')' }"></div>
    <div v-if="uiInfo.length > 0" id="bg-img3"  v-bind:style="{ backgroundImage: 'url(' + uiInfo[2].hiimg+ ')' }"></div>
  </div>
</template>
<script>
export default {
  name: "Home",
  // data: function() {
  //   return {
      
  //   }
  // },
  created: function () {
    this.$store.dispatch("getEventList")
    this.$store.dispatch("getBestproduct")
    this.$store.dispatch("getNewproduct")
    this.$store.dispatch("getHomeImage")
    this.$store.dispatch("visitorCount")
  },
  computed: {
    eventList: function () {
      return this.$store.state.eventList
    },
    decodedJWT: function () {
      return this.$store.getters.decodedToken
    },
    shoppingbagCount: function () {
      return this.$store.state.shoppingbagCount
    },
    uiInfo: function() {
      return this.$store.state.homeInfo
    },
  },
  methods: {
    homeScrollUp: function () {
      let position = document.documentElement.scrollTop
      let h = screen.height
      position -= h
      window.scrollTo(0, position)
      const homePageBar1Id = document.getElementById("homePageBar1")
      const homePageBar2Id = document.getElementById("homePageBar2")
      const homePageBar3Id = document.getElementById("homePageBar3")
      if (homePageBar2Id.style.transform == "scale(2, 2)") {
        homePageBar1Id.style.transform = "scale(2.0, 2.0)"
        homePageBar1Id.style.marginTop = "39vh"
        homePageBar1Id.style.opacity = "1.0"
        homePageBar2Id.style.transform = "scale(1.0, 1.0)"
        homePageBar2Id.style.marginTop = "43vh"
        homePageBar2Id.style.opacity = "0.5"
        homePageBar3Id.style.transform = "scale(1.0, 1.0)"
      } else if (homePageBar3Id.style.transform == "scale(2, 2)") {
        homePageBar1Id.style.transform = "scale(1.0, 1.0)"
        homePageBar2Id.style.transform = "scale(2.0, 2.0)"
        homePageBar2Id.style.marginTop = "42vh"
        homePageBar2Id.style.opacity = "1.0"
        homePageBar3Id.style.transform = "scale(1.0, 1.0)"
        homePageBar3Id.style.marginTop = "46vh"
        homePageBar3Id.style.opacity = "0.5"
      }
    },
    homeScrollDown: function () {
      let position = document.documentElement.scrollTop
      let h = screen.height
      position += h
      window.scrollTo(0, position)
      const homePageBar1Id = document.getElementById("homePageBar1")
      const homePageBar2Id = document.getElementById("homePageBar2")
      const homePageBar3Id = document.getElementById("homePageBar3")
      if (homePageBar1Id.style.transform == "scale(2, 2)") {
        homePageBar1Id.style.transform = "scale(1.0, 1.0)"
        homePageBar1Id.style.marginTop = "38vh"
        homePageBar1Id.style.opacity = "0.5"
        homePageBar2Id.style.transform = "scale(2.0, 2.0)"
        homePageBar2Id.style.marginTop = "42vh"
        homePageBar2Id.style.opacity = "1.0"
        homePageBar3Id.style.transform = "scale(1.0, 1.0)"
      } else if (homePageBar2Id.style.transform == "scale(2, 2)") {
        homePageBar1Id.style.transform = "scale(1.0, 1.0)"
        homePageBar2Id.style.transform = "scale(1.0, 1.0)"
        homePageBar2Id.style.marginTop = "41vh"
        homePageBar2Id.style.opacity = "0.5"
        homePageBar3Id.style.transform = "scale(2.0, 2.0)"
        homePageBar3Id.style.marginTop = "45vh"
        homePageBar3Id.style.opacity = "1.0"
      }
    },
    showFooterNavBar: function () {
      const footerNavBarId = document.getElementById("footerNavBar")
      const footerNavBarBtnId = document.getElementById("footerNavBarBtn")
      const footerNavBarBtnImgId = document.getElementById("footerNavBarBtnImg")
      if (footerNavBarId.classList.contains("showFooterNavBar") == true) {
        footerNavBarId.classList.remove("showFooterNavBar")
        footerNavBarId.classList.add("closeFooterNavBar")
        footerNavBarBtnId.classList.remove("showFooterNavBar")
        footerNavBarBtnId.classList.add("closeFooterNavBar")
        footerNavBarBtnImgId.src =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABoSURBVEiJ7c4xCsJQEEXRM+5AcAvBTgR7V2Tv+uwkpLB0Dx/SWZslpHoQwj8w7X1Dt6LwxC3UnwoNp9BAKwy4hgY+oW63NSP+oXsf8As+n2x3W1G44BzqfwszjqGBufDAPTTwCnX3ZAGCWyJ5FGiNNAAAAABJRU5ErkJggg=="
      } else {
        footerNavBarId.classList.remove("closeFooterNavBar")
        footerNavBarId.classList.add("showFooterNavBar")
        footerNavBarBtnId.classList.remove("closeFooterNavBar")
        footerNavBarBtnId.classList.add("showFooterNavBar")
        footerNavBarBtnImgId.src =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAA3NCSVQICAjb4U/gAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkUExURf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMcmPmUAAAALdFJOUwAGISQ/f6KxudjjxauaGAAAAAlwSFlzAAAAvAAAALwBzx0kHgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABeSURBVCjPY6AYeATCWKItDLO3C0DYjNU7Gbp3F0I44rt3MFjthkgxVu9ezMC8GiIlvnuXAQNUCizBAJWCSECkoBIQKZgEWAomAZaCS4Ck4BIgKYQEA4NaEgMVAAMDAOogJ5Va++q/AAAAAElFTkSuQmCC"
      }
    },
    closeMenuHome: function () {
      this.$router.push("/")
      const menuStatusBarId = document.getElementById("menuStatusBar")
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveHome")
    },
    closeMenuIndex: function () {
      this.$router.push("/index")
      const menuStatusBarId = document.getElementById("menuStatusBar")
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveIndex")
    },
    closeMenuMyPage: function () {
      this.$router.push("/mypage")
      const menuStatusBarId = document.getElementById("menuStatusBar")
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveMyPage")
    },
    moveMenuStatusBarHome: function () {
      const menuStatusBarId = document.getElementById("menuStatusBar")
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveHome")
    },
    moveMenuStatusBarIndex: function () {
      const menuStatusBarId = document.getElementById("menuStatusBar")
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveIndex")
    },
    moveMenuStatusBarLike: function () {
      const menuStatusBarId = document.getElementById("menuStatusBar")
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveLike")
    },
    moveMenuStatusBarMyPage: function () {
      const menuStatusBarId = document.getElementById("menuStatusBar")
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveMyPage")
    },
    getEventDetail: function () {
      this.$router.push("/event")
    },
    goBack: function () {
      this.$router.go(-1)
    },
    goRecommended: function () {
      this.$router.push("/recommended")
    },
    goIndex: function () {
      this.$router.push("/index")
      this.moveMenuStatusBarIndex()
    },
    goEvent: function () {
      this.$router.push("/event")
    },
    goLogin: function () {
      this.$router.push("/login")
      this.moveMenuStatusBarIndex()
    },
    goSignup: function () {
      this.$router.push("/join")
    },
    goLike: function () {
      this.$router.push("/like")
      this.moveMenuStatusBarLike()
    },
    goMypage: function () {
      this.$router.push("/mypage")
      this.moveMenuStatusBarMyPage()
    },
  },
}
</script>

<style scoped>
.home {
  font-family: 'ChosunSm';
}
#nav-home {
  padding: 0px;
  background-color: transparent;
}
/* #11181d */
#nav-home a {
  color: white;
}
#bg-img1 {
  height: 100vh;
  width: 100vw;
  background-size: 100vw 100vh;
  position: relative;
  background-image: url("../assets/brand/brand-pop-2.jpg");
  background-repeat: no-repeat;
  filter: brightness(65%);
  z-index: 10;
}
#bg-img2 {
  height: 100vh;
  width: 100vw;
  background-size: 100vw 100vh;
  position: relative;
  background-image: url("../assets/brand/brand-pop-1.jpg");
  background-repeat: no-repeat;
  filter: brightness(65%);
  z-index: 10;
}
#bg-img3 {
  height: 100vh;
  width: 100vw;
  background-size: 100vw 100vh;
  position: relative;
  background-image: url("../assets/brand/brand-pop-6.jpg");
  background-repeat: no-repeat;
  filter: brightness(60%);
  z-index: 10;
}
.bgcontent1 {
  position: absolute;
  top: 37vh;
  left: 3vw;
  z-index: 100;
  color: #e9e9e9;
}
.bgcontent2 {
  position: absolute;
  top: 137vh;
  left: 3vw;
  z-index: 100;
  color: #e9e9e9;
}
.bgcontent3 {
  position: absolute;
  top: 237vh;
  left: 3vw;
  z-index: 100;
  color: #e9e9e9;
}
.homeRemoteControllUp {
  position: fixed;
  margin-top: 34vh;
  margin-left: 89vw;
  width: 20px;
  z-index: 1000;
}
.homeRemoteControllDown {
  position: fixed;
  margin-top: 49vh;
  margin-left: 89vw;
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
