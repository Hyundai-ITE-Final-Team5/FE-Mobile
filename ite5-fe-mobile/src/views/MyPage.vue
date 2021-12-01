<template>
  <div id="mypage">
    <div class="d-flex ms-3 justify-content-between">
      <div class="d-flex">
        <img v-if="userInfo.mgrade == 1" src="https://static.solved.ac/tier_small/0.svg" style="width: 24px; heigth: 24px;" alt="">
        <img v-if="userInfo.mgrade == 2" src="https://static.solved.ac/tier_small/10.svg" style="width: 24px; heigth: 24px;" alt="">
        <img v-if="userInfo.mgrade == 3" src="https://static.solved.ac/tier_small/14.svg" style="width: 24px; heigth: 24px;" alt="">
        <img v-if="userInfo.mgrade == 4" src="https://static.solved.ac/tier_small/18.svg" style="width: 24px; heigth: 24px;" alt="">
        <img v-if="userInfo.mgrade == 5" src="https://static.solved.ac/tier_small/22.svg" style="width: 24px; heigth: 24px;" alt="">
        <img v-if="userInfo.mgrade == 6" src="https://static.solved.ac/tier_small/26.svg" style="width: 24px; heigth: 24px;" alt="">
        <h3>&nbsp;&nbsp;</h3>
        <h3 v-if="decodedJWT" class="fw-bold mt-1">{{ decodedJWT.mid }}</h3>
        <h3 class="mt-1">&nbsp; 님</h3>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-3">
      <div class="d-flex mt-1" @click="deleteJWT">
        <img src="@/assets/logout.png" style="width: 20px; height: 20px;" alt="">
        <h6 class="ms-2">로그아웃</h6>
      </div>
      <div class="d-flex ms-3" @click="showRateInfo">
        <img src="@/assets/question.png" alt="" class="" style="width: 25px; height:24px; opacity: 0.5;">
        <h6 class="mt-1">등급안내</h6>
      </div>
    </div>
    <div id="rateInfo" class="ms -3mt-4" style="display: none;">
      <h5 class="ms-2 my-3">등급 안내</h5>
      <div class="d-flex">
        <img class="ms-4" src="https://static.solved.ac/tier_small/0.svg" style="width: 22px; heigth: 22px;" alt="">
        <h5 class=" ms-3 mt-1">월 이용금액 0 원</h5>
      </div>
      <div class="d-flex">
        <img class="ms-4" src="https://static.solved.ac/tier_small/10.svg" style="width: 22px; heigth: 22px;" alt="">
        <h5 class="ms-3 mt-1">월 이용금액 0 ~ 100 만원</h5>
      </div>
      <div class="d-flex">
        <img class="ms-4" src="https://static.solved.ac/tier_small/14.svg" style="width: 22px; heigth: 22px;" alt="">
        <h5 class="ms-3 mt-1">월 이용금액 100 ~ 200 만원</h5>
      </div>
      <div class="d-flex">
        <img class="ms-4" src="https://static.solved.ac/tier_small/18.svg" style="width: 22px; heigth: 22px;" alt="">
        <h5 class="ms-3 mt-1">월 이용금액 200 ~ 300 만원</h5>
      </div>
      <div class="d-flex">
        <img class="ms-4" src="https://static.solved.ac/tier_small/22.svg" style="width: 22px; heigth: 22px;" alt="">
        <h5 class="ms-3 mt-1">월 이용금액 300 ~ 400 만원</h5>
      </div>
      <div class="d-flex">
        <img class="ms-4" src="https://static.solved.ac/tier_small/26.svg" style="width: 22px; heigth: 22px;" alt="">
        <h5 class="ms-3 mt-1">월 이용금액 400 ~ 500 만원</h5>
      </div>
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
    deleteJWT() {
      this.$store.dispatch('deleteJWT')
      this.$router.push('/login')
    },
  },
  mounted: function() {
    this.$store.dispatch('getCouponList')
    this.$store.dispatch('getUserInfo')
    this.$store.dispatch('getOrderHistory')
    window.scrollTo(0, 0)
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
  #mypage {
    overflow-x: hidden;
  }
</style>