<template>
  <div>
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
    <div class="d-flex justify-content-center" style="margin-top: 71px;">
      <div v-if="loading" class="spinner-border my-2" style="color: gray; margin-top: 60vh;"></div>
    </div>
    <shoppingbagList/>
  </div>
</template>

<script>
import shoppingbagList from '@/components/shoppingbag/shoppingbagList'
export default {
  name: 'ShoppingBag',
  components: {
    shoppingbagList,
  },
  computed: {
    loading: function() {
      return this.$store.state.loading
    },
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
  },
  methods: {
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
    this.closeFooterNavBar()
  },
}
</script>

<style>

</style>