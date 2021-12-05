<template>
  <div>
    <div class="mb-5 fixed-top" id="nav">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <img src="@/assets/back.png" style="opacity: 0.6;" alt="">
          <h3 class="" @click="moveMenuStatusBarHome">
            <div>HANDSOME</div>
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
    <h1 class="mb-4" style="margin-top: 61px;">주문 완료</h1>
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
        <h6>{{ completeOrderOid.odate }}</h6>
      </div>
    </div>
    <hr>
    <h3 class="fw-bold my-3">상품 정보</h3>
    <orderCompleteListItem v-for="(orderitem, oidx) in getShoppingbag" :key="oidx" :oidx="oidx" :orderitem="orderitem"/>
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
    <div class="d-flex justify-content-center mt-5">
      <button class="btn btn-lg btn-dark col-10" @click="routeIndex">쇼핑 계속하기</button>
    </div>
    <div class="d-flex justify-content-center my-2">
      <button class="btn btn-lg btn-outline-dark col-10" @click="routeMypage">쇼핑 내역보기</button>
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
    getShoppingbag: function() {
      return this.$store.state.shoppingbag
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
  },
  methods: {
    routeIndex: function() {
      this.$router.replace('/index')
    },
    routeMypage: function() {
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

<style>

</style>