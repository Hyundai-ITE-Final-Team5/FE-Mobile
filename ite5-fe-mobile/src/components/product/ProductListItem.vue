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
              <img src="@/assets/heart_1.png" data-bs-toggle="modal" data-bs-target="#loginAlert" alt="" style=" height: 26px;" class="me-3">
            </div>
            <!-- 찜하기 로그인 요청 Modal -->
            <!-- Modal -->
            <div class="modal fade" style="margin-top: 30vh;" id="loginAlert" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <div class="modal-title d-flex" id="exampleModalLabel">
                      <img src="@/assets/problem.png" style="height: 24px;" alt="">
                      <h5 class="mx-2">알림</h5>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    로그인이 필요한 서비스입니다.
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-outline-dark col-2" data-bs-dismiss="modal">닫기</button>
                    <button type="button" class="btn btn-sm btn-dark col-2" @click="goLogin" data-bs-dismiss="modal">로그인</button>
                  </div>
                </div>
              </div>
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
    moveMenuStatusBarMyPage: function() {
      const menuStatusBarId = document.getElementById('menuStatusBar')
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveMyPage")
    },
    goLogin: function() {
      this.$router.push('/login')
      this.moveMenuStatusBarMyPage()
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