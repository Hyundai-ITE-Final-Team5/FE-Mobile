<template>
  <div>
    <div class="ps-0 mb-5">
      <img :src="productImg" class="card-img-top upper-image" alt="item" :id="'productImg_' + idx" @click="getProductDetail">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h5 class="fw-bold">{{ productInfo.bname }}</h5>
          <div class="d-flex">
            <ProductListItemColor v-for="(color, idx) in productInfo.colorinfo" 
                                  :key="idx" :color="color" :idx="idx" @changeImg="changeColor" @changeProductColorId="changePcid"/>
          </div>
        </div>
        <h6 class="card-text my-2">{{ productInfo.pname }}</h6>
        <h6 class="card-text" v-if="productInfo.colorinfo">{{ productInfo.colorinfo[0].pcprice }} 원</h6>
        <div class="d-flex justify-content-between">
          <div class="mt-2 d-flex">
            <div v-if="decodedJWT != null">
              <img v-if="productInfo.like == false" src="@/assets/heart_1.png" @click="addLike" alt="" style=" height: 26px;" class="me-3" id="likeBtn">
              <img v-if="productInfo.like == true" src="@/assets/heart.png"  @click="deleteLike" alt="" style=" height: 26px;" class="me-3" id="likeBtn">
            </div>
            <div v-if="decodedJWT == null">
              <img src="@/assets/heart_1.png" alt="" style=" height: 26px;" class="me-3">
            </div>
            <img src="@/assets/shoppingbag.png" alt="" style="height: 24px;">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductListItemColor from '@/components/product/ProductListItemColor'

export default {
  name: 'ProductListItem',
  components: {
    ProductListItemColor,
  },
  data: function() {
    return {
      pcid: this.product.colorinfo[0].pcid
    }
  },
  props: {
    product: {
      type: Object,
    },
    idx: {
      type: Number,
    },
  },
  methods: {
    addLike: function() {
      this.$store.dispatch('addLike', this.product.pid)
    },
    deleteLike: function() {
      this.$store.dispatch('deleteLike', this.product.pid)
    },
    changeColor: function(color) {
      const productImgId = document.getElementById('productImg_' + this.idx)
      productImgId.src = color
    },
    changePcid: function(pcid) {
      this.pcid = pcid
    },
    getProductDetail: function() {
      this.$store.dispatch('getProductDetail', this.pcid)
      this.$router.push('/productdetail')
    },
  },
  computed: {
    productInfo: function() {
      return this.product
    },
    productImg: function() {
      return this.productInfo.colorinfo[0].pcimg1
    },
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
  },
}
</script>

<style scoped>

</style>