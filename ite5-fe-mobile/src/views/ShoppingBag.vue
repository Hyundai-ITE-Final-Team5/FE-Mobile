<template>
  <div>
    <div class="d-flex mb-3">
      <img src="@/assets/shoppingbag.png" alt="" class="me-1" style="width: 30px; height: 32px;">
      <!-- <h5 class="pt-2 mx-1 fw-bold">{{ countShoppinbagList }}</h5> -->
      <h5 class="pt-2 text-muted">개 상품이 있습니다.</h5>
    </div>
    <!-- <h2 class="text-center text-muted" style="margin-top: 30vh;" v-if="countShoppinbagList == 0">쇼핑백에 상품이 없습니다.</h2> -->
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
  },
  computed: {
    // countShoppinbagList: function() {
    //   return this.$store.state.shoppingbag.length
    // },
  },
  mounted: function() {
    this.closeFooterNavBar()
  },
}
</script>

<style>

</style>