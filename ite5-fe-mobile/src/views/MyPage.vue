<template>
  <div>
    <h1>My Page</h1>
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
      console.log("asdf")
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
      if (orderHistoryId.style.display == 'none') {
        orderHistoryId.style.display = 'none'
        userInfoId.style.display = 'none'
        couponId.style.display = 'block'
        mypageStatusBarId.classList.remove("moveOrderHistory", "moveUserInfo", "moveCoupon")
        mypageStatusBarId.classList.add("moveCoupon")
      }
    },
  }

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