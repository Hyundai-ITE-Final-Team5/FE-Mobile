<template>
  <div>
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
  mounted: function() {
    this.closeFooterNavBar()
  },
}
</script>

<style>

</style>