<template>
  <div class="ms-2 me-4 orderComplete">
    <div class="mb-5 fixed-top me-2" id="nav">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <img src="@/assets/diamond_negative.png" style="opacity: 0.6;" alt="">
          <h3 class="pt-2" @click="moveMenuStatusBarHome">
            <div>HANDSOME</div>
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
    <div class="d-flex justify-content-center mb-5" style="margin-top: 91px;">
      <img src="@/assets/checked.png" class="me-2" style="height: 32px;" alt="">
      <h1>주문이 완료되었습니다.</h1>
    </div>
    <hr>
    <h3 class="fw-bold my-3">주문 정보</h3>
    <div class="d-flex">
      <div class="col-3">
        <h5>•주문번호</h5>
      </div>
      <div class="col-9 ms-2">
        <h6>{{ orderNumber }}</h6>
      </div>
    </div>
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>•결제수단</h5>
      </div>
      <div class="col-9 ms-2">
        <h6 v-if="completeOrderOid.pmcode == '0hyundai'">신용카드</h6>
        <h6 v-if="completeOrderOid.pmcode == '1hyundai'">계좌이체</h6>
        <h6 v-if="completeOrderOid.pmcode == '2hyundai'">무통장입금</h6>
      </div>
    </div>
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>•주문시간</h5>
      </div>
      <div class="col-9 ms-2">
        <h6>{{ orderTime }}</h6>
      </div>
    </div>
    <hr>
    <h3 class="fw-bold my-3">상품 정보</h3>
    <orderCompleteListItem v-for="(orderitem, oidx) in tempOrderListInfo" :key="oidx" :oidx="oidx" :orderitem="orderitem"/>
    <h3 class="fw-bold my-3">배송 정보</h3>
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>•수령인</h5>
      </div>
      <div class="col-9 ms-3">
        <h6>{{ completeOrderOid.oreceiver }}</h6>
      </div>
    </div>
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>•휴대폰</h5>
      </div>
      <div class="col-9 ms-3">
        <h6>{{ completeOrderOid.ophone }}</h6>
      </div>
    </div>
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>•이메일</h5>
      </div>
      <div class="col-9 ms-3">
        <h6>{{ completeOrderOid.oemail }}</h6>
      </div>
    </div>
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>•배송메모</h5>
      </div>
      <div class="col-9 ms-3">
        <h6>{{ completeOrderOid.omemo }}</h6>
      </div>
    </div>
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>•우편번호</h5>
      </div>
      <div class="col-9 ms-3">
        <h6>{{ completeOrderOid.ozipcode }}</h6>
      </div>
    </div>
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>•주소</h5>
      </div>
      <div class="col-9 ms-3">
        <h6>{{ completeOrderOid.oaddress1 }}</h6>
      </div>
    </div>
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>•상세주소</h5>
      </div>
      <div class="col-9 ms-3">
        <h6>{{ completeOrderOid.oaddress2}}</h6>
      </div>
    </div>
    <hr>
    <div class="d-flex justify-content-center ms-3 mt-5">
      <button class="btn btn-lg btn-dark col-12" @click="routeIndex">쇼핑 계속하기</button>
    </div>
    <div class="d-flex justify-content-center ms-3 my-2">
      <button class="btn btn-lg btn-outline-dark col-12" @click="routeMypage">쇼핑 내역보기</button>
    </div>
  </div>
</template>

<script>
import orderCompleteListItem from '@/components/order/orderCompleteListItem'
export default {
  name: 'OrderComplete',
  components: {
    orderCompleteListItem,
  },
  computed: {
    tempOrderListInfo: function() {
      return this.$store.state.tempOrderListInfo
    },
    completeOrderOid: function() {
      return this.$store.state.tempOrderCompleteInfo
    },
    orderNumber: function() {
      return this.$store.state.orderNumber
    },
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
    shoppingbagCount: function() {
     return this.$store.state.shoppingbagCount
    },
    orderTime: function() {
      const temp = this.$store.state.tempOrderCompleteInfo.odate
      return temp
    },
  },
  methods: {
    routeIndex: function() {
      this.$store.state.tempOrderListInfo = []
      this.$router.replace('/index')
    },
    routeMypage: function() {
      this.$store.state.tempOrderListInfo = []
      this.$router.replace('/mypage')
    },
    moveMenuStatusBarHome: function() {
      const menuStatusBarId = document.getElementById('menuStatusBar')
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveHome")
      this.$router.replace('/')
    },
  },
}
</script>

<style scoped>
.orderComplete {
  overflow-x: hidden;
}
</style>