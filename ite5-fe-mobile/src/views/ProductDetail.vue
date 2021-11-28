<template>
  <div>
    <div id="carouselExampleControls" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img v-if="getProductDetail && carousel1 == ''" :src="getProductDetail[0].pcimg1" class="d-block w-100" alt="...">
          <img v-else :src="carousel1" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-interval="false">
          <img v-if="getProductDetail && carousel2 == ''" :src="getProductDetail[0].pcimg2" class="d-block w-100" alt="...">
          <img v-else :src="carousel2" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-interval="false">
          <img v-if="getProductDetail && carousel3 == ''" :src="getProductDetail[0].pcimg3" class="d-block w-100" alt="...">
          <img v-else :src="carousel3" class="d-block w-100" alt="...">
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
    <div class="card-body">
      <h5 class="fw-bold my-2" v-if="getProductDetail">{{ getProductCommon.bname }}</h5>
      <h6 class="my-2" v-if="getProductDetail">{{ getProductCommon.pname }}</h6>
      <h6 class="" v-if="getProductDetail">{{ getProductDetail[0].pcprice }} 원</h6>
      <hr>
      <p class="my-3" v-if="getProductDetail">{{ getProductCommon.pnote }}</p>
      <hr>
      <h5 class="my-3">COLOR / SIZE</h5>
      <div class="d-flex">
        <detailColorListItem v-for="(colorChip, cpidx) in getProductDetail" 
                             :key="cpidx" :colorChip="colorChip" :cpidx="cpidx" @sendpsid="getpsid" @changeImgColor="changeImgColor"/>
      </div>
      <div class="d-flex justify-content-between">
        <h5 class="mt-2 me-3">수량</h5>
        <div class="d-flex me-3">
          <h2 class="mt-2" @click="minus">-</h2>
          <div class="form mb-3">
            <input v-model="addProduct.pquantity" type="text" class="mx-2 text-center form-control border-2 border-top-0 border-bottom-0 border-start-0 border-end-0" 
                  style="font-size: 20px; width: 15vw;">
          </div>
          <h2 class="mt-2" @click="plus">+</h2>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <h5 class="mt-2 me-3">합계</h5>
        <div class="d-flex me-3">
          <div class="form mb-3">
            <input v-if="getProductDetail" type="text" class="mx-2 text-end form-control border-2 border-top-0 border-bottom-0 border-start-0 border-end-0" 
                  style="font-size: 20px; width: 60vw;" :value="getProductDetail[0].pcprice * addProduct.pquantity">
          </div>
          <h5 class="mt-2">원</h5>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button v-if="decodedJWT != null" @click="addShoppingbag" 
                class="btn btn-lg btn-dark mt-4 mb-2 col-12">쇼핑백 담기</button>
        <button v-if="decodedJWT == null" class="btn btn-lg btn-dark mt-4 mb-2 col-12" disabled>쇼핑백 담기</button>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-lg btn-outline-dark mb-4 col-12">바로 주문</button>
      </div>
    </div>
  </div>
</template>

<script>
import detailColorListItem from '@/components/detail/detailColorListItem'

export default {
  name: 'ProductDetail',
  data: function() {
    return {
      addProduct: {
        psid: '',
        pquantity: 1,
      },
      carousel1: '',
      carousel2: '',
      carousel3: '',
    }
  },
  components: {
    detailColorListItem,
  },
  methods: {
    minus: function() {
      if (this.addProduct.pquantity > 1) this.addProduct.pquantity--
    },
    plus: function() {
      this.addProduct.pquantity++
    },
    addShoppingbag: function() {
      if (this.addProduct.psid != '') {
        this.$store.dispatch('addShoppingbag', this.addProduct)
      }
    },
    getpsid: function(psid) {
      this.addProduct.psid = psid
    },
    changeImgColor: function(pcimg1, pcimg2, pcimg3) {
      this.carousel1 = pcimg1
      this.carousel2 = pcimg2
      this.carousel3 = pcimg3
    },
  },
  computed: {
    getProductCommon: function() {
      return this.$store.getters.getProductCommon
    },
    getProductDetail: function() {
      return this.$store.getters.getProductDetail
    },
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
  },
  mounted: function() {
    window.scrollTo(0,0)
  },
  // destroyed: function() {
  //   this.$store.state.productDetail = []
  // },
}
</script>

<style>

</style>