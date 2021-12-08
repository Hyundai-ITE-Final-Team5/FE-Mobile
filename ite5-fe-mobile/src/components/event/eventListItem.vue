<template>
  <div class="mb-5">
    <h2 class="fw-bold ms-2 mt-4">{{ event.etitle }}</h2>
    <h6 v-if="issuedate != ''" class="text-muted ms-3">• {{ issuedate }} ~ {{ expiredate }}</h6>
    <img :src="event.eimg" style="width: 100vw;" alt="" class="mt-2">
    <img :src="event.edetailimg" style="width: 100vw;" alt="" class="mb-3">
    <div class="d-flex justify-content-center mx-3 my-4">
      <button v-if="decodedJWT != null" class="btn btn-lg btn-dark col-12" data-bs-toggle="modal" data-bs-target="#couponAlert" @click="downloadCoupon">쿠폰 발급받기</button>
      <button v-if="decodedJWT == null" class="btn btn-lg btn-dark col-12" data-bs-toggle="modal" data-bs-target="#loginAlert">쿠폰 발급받기</button>
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
    <!-- 쿠폴 알람 Modal -->
    <div class="modal fade" style="margin-top: 30vh;" id="couponAlert" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title d-flex" id="exampleModalLabel">
              <img src="@/assets/congratulation.png" style="height: 24px;" alt="">
              <h4 class="mx-2 fw-bold">쿠폰 발급</h4>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <h5 class="modal-body">
            쿠폰이 성공적으로 발급되었습니다.
          </h5>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-outline-dark col-2" data-bs-dismiss="modal">닫기</button>
            <button type="button" class="btn btn-sm btn-dark col-2" data-bs-dismiss="modal" @click="goMypage">확인</button>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-5" style="border: 10px;">
  </div>
</template>

<script>

export default {
  name: 'eventListItem',
  props: {
    event: {
      type: Object
    },
    eidx: {
      type: Number
    },
  },
  methods: {
    downloadCoupon: function() {
      this.$store.dispatch('downloadCoupon', this.event.eno)
    },
    needLogin: function() {
      this.$router.push('/login')
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
    goMypage: function() {
      this.$router.push('/mypage')
      this.moveMenuStatusBarMyPage()
    },
  },
  computed: {
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
    issuedate: function() {
      return this.event.eissuedate.substring(0, 10)
    },
    expiredate: function() {
      return this.event.eexpiredate.substring(0, 10)
    },
  },
}
</script>

<style>

</style>