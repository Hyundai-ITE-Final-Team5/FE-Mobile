<template>
  <div style="margin-top: 5vh;" id="product">
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
    <div class="" style="opacity: 0.2; height: 0; margin-top: 51px;">
      <img src="@/assets/up.png" alt="" class="remoteControllUp" @click="scrollUp">
      <br>
      <img src="@/assets/down.png" alt="" class="remoteControllDown" @click="scrollDown">
    </div>
    <!-- skelleton UI -->
    <div v-if="productListLoading" class="productListSkelletonUI" style="opacity: 0.5;">
      <div class="mt-4 ms-3 border" style="width: 345px; height: 566px; background-color: #d3d3d3; border-radius: 0.5rem;"></div>
      <div class="d-flex justify-content-between">
        <div class="ms-3 mt-3 border" style="width: 150px; height: 20px; background-color: #d3d3d3; border-radius: 0.5rem;"></div>
        <div class="me-3 mt-3 border" style="width: 30px; height: 20px; background-color: #d3d3d3; border-radius: 0.5rem;"></div>
      </div>
      <div class="ms-3 mt-2 border" style="width: 100px; height: 20px; background-color: #d3d3d3; border-radius: 0.5rem;"></div>
      <div class="ms-3 mt-2 border" style="width: 100px; height: 20px; background-color: #d3d3d3; border-radius: 0.5rem;"></div>
      <div class="d-flex mb-5">
        <div class="ms-3 mt-3 border" style="width: 25px; height: 20px; background-color: #d3d3d3; border-radius: 0.5rem;"></div>
        <div class="ms-3 mt-3 border" style="width: 25px; height: 20px; background-color: #d3d3d3; border-radius: 0.5rem;"></div>
      </div>
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
    productListLoading: function() {
      return this.$store.state.productListLoading
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
    shoppingbagCount: function() {
     return this.$store.state.shoppingbagCount
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
#product {
  font-family: 'GowunBatang-Bold';
}
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
.productListSkelletonUI {
  animation: 0.4s infinite ease;
  animation-direction: alternate;
  animation-name: productListSkelletonUIname;
}
@keyframes productListSkelletonUIname {
    from{
        opacity: 0.5; /* 애니메이션 시작 색상 */
    }
    to{
        opacity: 1.0; /* 애니메이션 종료 색상 */
        transform: scale(1.0) translate(0px, 0px) rotate(0deg); /* 애니메이션 변형 */
    }
}
</style>