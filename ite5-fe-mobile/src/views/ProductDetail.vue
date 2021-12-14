<template>
  <div id="productdetail">
    <div class="mb-5 fixed-top" id="nav" style="z-index: 100000;">
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
    <h1 class="mb-4" style="margin-top: 81px;"></h1>
    <div class="notification-container d-flex justify-content-center my-3" id="notification-container">
      <img src="@/assets/love.png" alt="">
      <h5 class="ms-3">현재 <span class="fw-bold">{{ productDetail.visitor }}</span> 명이 함께 보고 있습니다.</h5>
    </div>
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
      <button class="carousel-control-prev" style="opacity: 1.0;" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" style="opacity: 1.0;" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="card-body">
      <h5 class="fw-bold my-2" v-if="getProductDetail">{{ getProductCommon.bname }}</h5>
      <h6 class="my-2" v-if="getProductDetail">{{ getProductCommon.pname }}</h6>
      <h6 class="" v-if="getProductDetail">{{ detailprice }} 원</h6>
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
                  style="font-size: 20px; width: 60vw;" :value="detailpriceTotal">
          </div>
          <h5 class="mt-2">원</h5>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button v-if="decodedJWT == null" data-bs-toggle="modal" data-bs-target="#loginAlert"
                class="btn btn-lg btn-dark mt-4 mb-2 col-12">쇼핑백 담기</button>
        <button v-else-if="decodedJWT != null && this.addProduct.psid == ''" 
                class="btn btn-lg btn-dark mt-4 mb-2 col-12" data-bs-toggle="modal" data-bs-target="#optionAlert">쇼핑백 담기</button>
        <button v-else @click="addShoppingbag" 
                class="btn btn-lg btn-dark mt-4 mb-2 col-12" data-bs-toggle="modal" data-bs-target="#shoppingbagAlert">쇼핑백 담기</button>
      </div>
      <div class="d-flex justify-content-center">
        <button v-if="decodedJWT == null" data-bs-toggle="modal" data-bs-target="#loginAlert"
                class="btn btn-lg btn-outline-dark mb-4 col-12">바로 주문</button>
        <button v-else-if="decodedJWT != null && this.addProduct.psid == ''" 
                class="btn btn-lg btn-outline-dark mb-4 col-12" data-bs-toggle="modal" data-bs-target="#optionAlert">바로 주문</button>
        <button v-else class="btn btn-lg btn-outline-dark mb-4 col-12" @click="makeOrder">바로 주문</button>
      </div>
      <!-- 로그인 요청 Modal -->
      <div class="modal fade" style="margin-top: 30vh;" id="loginAlert" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title d-flex" id="exampleModalLabel">
                <img src="@/assets/problem.png" style="height: 24px;" alt="">
                <h4 class="mx-2 fw-bold">알림</h4>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h5 class="modal-body">
              로그인이 필요한 서비스입니다.
            </h5>
            <div class="modal-footer">
              <button type="button" class="btn btn-sm btn-outline-dark col-3" data-bs-dismiss="modal">닫기</button>
              <button type="button" class="btn btn-sm btn-dark col-3" @click="goLogin" data-bs-dismiss="modal">로그인</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 옵션 선택 요청 Modal -->
      <div class="modal fade" style="margin-top: 30vh;" id="optionAlert" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title d-flex" id="exampleModalLabel">
                <img src="@/assets/problem.png" style="height: 24px;" alt="">
                <h4 class="mx-2 fw-bold">알림</h4>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h5 class="modal-body">
              색상과 사이즈를 모두 선택해주세요.
            </h5>
            <div class="modal-footer">
              <button type="button" class="btn btn-sm btn-outline-dark col-3" data-bs-dismiss="modal">닫기</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 상품담기 Modal -->
      <!-- Modal -->
      <div class="modal fade" style="margin-top: 30vh;" id="shoppingbagAlert" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title d-flex" id="exampleModalLabel">
                <img src="@/assets/problem.png" style="height: 24px;" alt="">
                <h4 class="mx-2 fw-bold">알림</h4>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h5 class="modal-body">
              쇼핑백에 상품이 추가되었습니다.
            </h5>
            <div class="modal-footer">
              <button type="button" class="btn btn-sm btn-outline-dark col-2" data-bs-dismiss="modal">닫기</button>
              <button type="button" class="btn btn-sm btn-dark col-2" @click="goShoppingbag" data-bs-dismiss="modal">확인</button>
            </div>
          </div>
        </div>
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
    // 바로주문 요청
    makeOrder: function() {
      const tempList = []
      let tempObject = {
        "psid": '',
        "oid": '',
        "oicount": 0,
        "oitotalprice": 0,
      }
      const tempOrderList = []
      let tempOrderObject = {
        "bname": '',
        "pcchipimg": '',
        "pccolorcode": '',
        "pcprice": '',
        "pid": '',
        "pname": '',
        "psid": '',
        "psize": '',
        "pquantity": null,
        "pcimg1": '',
      }
      tempObject.psid = this.addProduct.psid
      tempObject.oicount = this.addProduct.pquantity
      tempObject.oitotalprice = this.addProduct.pquantity * this.getProductDetail[0].pcprice
      tempList.push(tempObject)
      tempOrderObject.bname = this.getProductCommon.bname
      tempOrderObject.pname = this.getProductCommon.pname
      tempOrderObject.psid = this.addProduct.psid
      tempOrderObject.pquantity = this.addProduct.pquantity
      const tempSize = this.addProduct.psid.split("_")[2]
      tempOrderObject.psize = tempSize
      for (let i = 0; i < this.getProductDetail.length; i++) {
        if (this.addProduct.psid.split("_")[1] == this.getProductDetail[i].pccolorcode) {
          tempOrderObject.pcimg1 = this.getProductDetail[i].pcimg1
          tempOrderObject.pcchipimg = this.getProductDetail[i].pcchipimg
          tempOrderObject.pccolorcode = this.getProductDetail[i].pccolorcode
          tempOrderObject.pcprice = this.getProductDetail[i].pcprice
          tempOrderObject.pid = this.getProductDetail[i].pid
        }
      }
      tempOrderList.push(tempOrderObject)
      this.$store.dispatch('makeOrder', tempList)
      this.$store.dispatch('makeTempOrder', tempOrderList)
      this.$router.push('/order')
    },
    getpsid: function(psid) {
      this.addProduct.psid = psid
    },
    changeImgColor: function(pcimg1, pcimg2, pcimg3) {
      this.carousel1 = pcimg1
      this.carousel2 = pcimg2
      this.carousel3 = pcimg3
    },
    goShoppingbag: function() {
      this.$router.push('/shoppingbag')
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
    goLogin: function() {
      this.$router.push('/login')
      this.moveMenuStatusBarMyPage()
    },
  },
  computed: {
    productDetail: function() {
      return this.$store.state.productDetail
    },
    getProductCommon: function() {
      return this.$store.getters.getProductCommon
    },
    getProductDetail: function() {
      return this.$store.getters.getProductDetail
    },
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
    shoppingbagCount: function() {
     return this.$store.state.shoppingbagCount
    },
    getShoppingbag: function() {
      return this.$store.state.shoppingbag
    },
    detailprice: function() {
      return this.$store.getters.getProductDetail[0].pcprice.toLocaleString("ko-KR")
    },
    detailpriceTotal: function() {
      return (this.$store.getters.getProductDetail[0].pcprice * this.addProduct.pquantity).toLocaleString("ko-KR")
    },
  },
  mounted: function() {
    window.scrollTo(0,0)
    const notification = document.getElementById('notification-container')
    const showNotification = () => {
      notification.classList.add('show')
      setTimeout(() => {
        notification.classList.remove('show')
      }, 2000)
    }
    showNotification()    
  },
  destroyed: function() {
    this.$store.dispatch('detailExit', this.getProductDetail[0].pcid)
  },
}
</script>

<style scoped>
#productdetail {
  font-family: GowunBatang-Bold;
}
.notification-container {
  background-color: white;
  padding: 15px 20px;
  position: absolute;
  width: 375px;
  top: -100px;
  z-index: 10000;
  transition: transform 0.2s ease-in-out;
}

.notification-container.show {
  transform: translateY(150px);
}
</style>