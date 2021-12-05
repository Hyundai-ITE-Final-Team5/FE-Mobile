<template>
  <div style="margin-top: 5vh;">
    <div class="mb-5 fixed-top" id="nav">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <img src="@/assets/back.png" style="opacity: 0.6;" alt="" @click="goBack">
          <h3 class="" @click="moveMenuStatusBarHome">
            <router-link to="/" class="text-decoration-none" id="handsome">HANDSOME</router-link>
          </h3>
          <div class="d-flex">
            <router-link to="/login" v-if="decodedJWT == null">
              <img src="@/assets/user.png" alt="" style=" height: 28px;" @click="moveMenuStatusBarMyPage">
            </router-link>
            <router-link to="/shoppingbag" v-if="decodedJWT != null"><img src="@/assets/shoppingbag.png" alt="" style="opacity: 0.9; height: 28px;"></router-link>
          </div>
        </div>
      </nav>
    </div>
    <div class="" style="opacity: 0.2; height: 0; margin-top: 51px;">
      <img src="@/assets/up.png" alt="" class="remoteControllUp" @click="scrollUp">
      <br>
      <img src="@/assets/down.png" alt="" class="remoteControllDown" @click="scrollDown">
    </div>
    <div class="d-flex justify-content-center">
      <div v-if="loading" class="spinner-border my-2" style="color: gray; margin-top: 60vh;"></div>
    </div>
    <ProductList/>
  </div>
</template>

<script>
import ProductList from '@/components/product/ProductList.vue'

export default {
  name: 'Product',
  data: function() {
    return {
      no: 2,
    }
  },
  components: {
    ProductList,
  },
  computed: {
    loading: function() {
      return this.$store.state.loading
    },
    getProducts: function() {
      return this.$store.state.products
    },
    brandCallKey: function() {
      return this.$store.state.brandCallKey
    },
    categoryCallKey: function() {
      return this.$store.state.categoryCallKey
    },
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
  },
  methods: {
    scrollUp: function() {
      let position = document.documentElement.scrollTop
      position -= 777.5
      window.scrollTo(0, position)
    },
    scrollDown: function() {
      let position = document.documentElement.scrollTop
      let temp = ''
      if (this.categoryCallKey == null) {
        temp += this.brandCallKey
        temp += '?pageNo='
        temp += this.no
        position += 775.5
        window.scrollTo(0, position)
        if (document.documentElement.scrollHeight - position <= 1000) {
          this.no++
          this.$store.dispatch('getBrandList', temp)
        }
      } else if (this.brandCallKey == null) {
        temp += this.categoryCallKey
        temp += '&pageNo='
        temp += this.no
        position += 775.5
        window.scrollTo(0, position)
        if (document.documentElement.scrollHeight - position <= 1000) {
          this.no++
          this.$store.dispatch('getCategoryList', temp)
        }
      }
    },
    closeFooterNavBar: function() {
      const footerNavBarId = document.getElementById('footerNavBar')
      const footerNavBarBtnId = document.getElementById('footerNavBarBtn')
      const footerNavBarBtnImgId = document.getElementById('footerNavBarBtnImg')
      if (footerNavBarId.classList.contains("showFooterNavBar") == true) {
        footerNavBarId.classList.remove("showFooterNavBar")
        footerNavBarId.classList.add("closeFooterNavBar")
        footerNavBarBtnId.classList.remove("showFooterNavBar")
        footerNavBarBtnId.classList.add("closeFooterNavBar")
        footerNavBarBtnImgId.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABoSURBVEiJ7c4xCsJQEEXRM+5AcAvBTgR7V2Tv+uwkpLB0Dx/SWZslpHoQwj8w7X1Dt6LwxC3UnwoNp9BAKwy4hgY+oW63NSP+oXsf8As+n2x3W1G44BzqfwszjqGBufDAPTTwCnX3ZAGCWyJ5FGiNNAAAAABJRU5ErkJggg=='
      }
    },
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
  mounted: function() {
    // 상품리스트 이동 리모컨 스크롤이벤트
    document.addEventListener('scroll', function() {
    })
    // 새로운 상품리스트를 볼 때마다 맨 위로 스크롤 초기화
    window.scrollTo(0,0)
    // 상품리스트에 들어오면 메뉴바 닫음
    this.closeFooterNavBar()
  },
  // destroyed: function() {
  //   this.$store.state.products = []
  // }
}
</script>

<style scoped>
.remoteControllUp {
  position: fixed;
  margin-top: 77vh;
  margin-left: 89vw;
  width: 20px;
}
.remoteControllDown {
  position: fixed;
  margin-top: 80vh;
  margin-left: 89vw;
  width: 20px;
}
</style>