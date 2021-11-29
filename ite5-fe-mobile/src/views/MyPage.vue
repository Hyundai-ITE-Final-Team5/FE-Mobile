<template>
  <div>
    <div class="d-flex ms-3 justify-content-between">
      <div class="d-flex">
        <h3 v-if="userInfo.mgrade == 0">🎀</h3>
        <h3 v-if="userInfo.mgrade == 1">💍</h3>
        <h3 v-if="userInfo.mgrade >= 2">💎</h3>
        <h3>&nbsp;</h3>
        <h3 v-if="decodedJWT" class="fw-bold">{{ decodedJWT.mid }}</h3>
        <h3>&nbsp; 님</h3>
      </div>
      <img src="@/assets/question.png" alt="" @click="showRateInfo" class="me-3" style="width: 28px; height:26px; opacity: 0.3;">
    </div>
    <div id="rateInfo" class="mt-4" style="display: none;">
      <h5 class="ms-2 my-3">등급 안내</h5>
      <h5 class=" ms-3">🎀 1등급: 월 이용금액 0 ~ 100 만원</h5>
      <h5 style="margin-left: 20px;">💍 2등급: 월 이용금액 100 ~ 200 만원</h5>
      <h5 class="ms-3">💎 3등급: 월 이용금액 200 만원 이상</h5>
      <h6 class="mt-4 ms-4 text-muted">* 해당 등급은 매월 초 갱신됩니다.</h6>
    </div>
    <div class="d-flex justify-content-center">
      <hr class="col-10">
    </div>
    <div class="d-flex  mt-3">
      <h5 class="ms-5">• POINT :&nbsp;&nbsp;</h5>
      <h5>{{ userInfo.mmileage }}</h5>
      <h5>&nbsp;P</h5>
    </div>
    <div class="d-flex  mt-3">
      <h5 class="ms-5">• 이용금액 :&nbsp;&nbsp;</h5>
      <h5>{{ userInfo.totalorderprice }}</h5>
      <h5>&nbsp;원</h5>
    </div>
    <div class="d-flex justify-content-center">
      <hr class="col-10">
    </div>
    <div class="d-flex justify-content-center mt-4 text-center">
      <h5 class="col-3" @click="showOrderHistory">주문내역</h5>
      <h5 class="col-3" @click="showUserInfo">내 정보</h5>
      <h5 class="col-3" @click="showCoupon">쿠폰함</h5>
    </div>
    <div class="mb-2 col-3" style="border: solid; border-color: #d3d3d3;" id="mypageStatusBar"></div>
    <orderHistory style="display: block;" id="orderHistoryId"/>
    <userInfo style="display: none;" id="userInfoId"/>
    <coupon style="display: none;" id="couponId"/>
  </div>
</template>

<script>
import orderHistory from '@/components/mypage/orderHistory.vue'
import userInfo from '@/components/mypage/userInfo.vue'
import coupon from '@/components/mypage/coupon.vue'

export default {
  name: 'MyPage',
  components: {
    orderHistory,
    userInfo,
    coupon,
  },
  computed: {
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
   userInfo: function() {
     return this.$store.state.userInfo
   },
  },
  methods: {
    showOrderHistory: function() {
      const orderHistoryId = document.getElementById('orderHistoryId')
      const userInfoId = document.getElementById('userInfoId')
      const couponId = document.getElementById('couponId')
      const mypageStatusBarId = document.getElementById('mypageStatusBar')
      if (orderHistoryId.style.display == 'none') {
        orderHistoryId.style.display = 'block'
        userInfoId.style.display = 'none'
        couponId.style.display = 'none'
        mypageStatusBarId.classList.remove("moveOrderHistory", "moveUserInfo", "moveCoupon")
        mypageStatusBarId.classList.add("moveOrderHistory")
      }
    },
    showUserInfo: function() {
      const orderHistoryId = document.getElementById('orderHistoryId')
      const userInfoId = document.getElementById('userInfoId')
      const couponId = document.getElementById('couponId')
      const mypageStatusBarId = document.getElementById('mypageStatusBar')
      if (userInfoId.style.display == 'none') {
        orderHistoryId.style.display = 'none'
        userInfoId.style.display = 'block'
        couponId.style.display = 'none'
        mypageStatusBarId.classList.remove("moveOrderHistory", "moveUserInfo", "moveCoupon")
        mypageStatusBarId.classList.add("moveUserInfo")
      }
    },
    showCoupon: function() {
      const orderHistoryId = document.getElementById('orderHistoryId')
      const userInfoId = document.getElementById('userInfoId')
      const couponId = document.getElementById('couponId')
      const mypageStatusBarId = document.getElementById('mypageStatusBar')
      if (couponId.style.display == 'none') {
        orderHistoryId.style.display = 'none'
        userInfoId.style.display = 'none'
        couponId.style.display = 'block'
        mypageStatusBarId.classList.remove("moveOrderHistory", "moveUserInfo", "moveCoupon")
        mypageStatusBarId.classList.add("moveCoupon")
      }
    },
    showRateInfo: function() {
      const rateInfoId = document.getElementById('rateInfo')
      if (rateInfoId.style.display == 'none') rateInfoId.style.display = 'block'
      else rateInfoId.style.display = 'none'
    },
  },
  mounted: function() {
    this.$store.dispatch('getCouponList')
  },

}
</script>

<style scoped>
  #mypageStatusBar {
    position: relative;
    left: 12vw;
  }
  .moveOrderHistory {
    transform: translate(0vw, 0vw);
    transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .moveUserInfo {
    transform: translate(24vw, 0vw);
    transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .moveCoupon {
    transform: translate(49vw, 0vw);
    transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>