<template>
  <div class="px-3" id="join">
    <div class="mb-5 fixed-top" id="nav">
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
            <router-link to="/shoppingbag" v-if="decodedJWT != null"><img src="@/assets/shoppingbag.png" alt="" style="opacity: 0.9; height: 28px;"></router-link>
          </div>
        </div>
      </nav>
    </div>
    <h1 class="text-center mb-4" style="margin-top: 10vh;">회원가입</h1>
    <!-- 아이디 -->
    <div class="d-flex">
      <div class="form mb-3">
        <input v-model="joinCredential.mid" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 71vw;" placeholder="아이디">
      </div>
      <button @click="duplicatedMidCheck" class="btn btn-dark mt-3 ms-3" style="height: 5vh;">확인</button>
    </div>
    <h6 v-if="midCheck == 'possible'" class="ms-2" style="color: #7fb7a0;">V 사용가능한 아이디 입니다.</h6>
    <h6 v-if="midCheck == 'duplicate'" class="ms-2" style="color:#b97687;">X 사용중인 아이디 입니다.</h6>
    <!-- 비밀번호 -->
    <div class="form mb-3">
      <input v-model="joinCredential.mpassword" type="password" class="form-control border-2 border-top-0 border-start-0 border-end-0"
             style="height: 7vh;" placeholder="비밀번호">
    </div>
    <!-- 비밀번호 확인 -->
    <div class="form mb-3">
      <input v-model="mpasswordCheck" type="password" class="form-control border-2 border-top-0 border-start-0 border-end-0"
             style="height: 7vh;" placeholder="비밀번호 확인">
    </div>
    <div v-if="joinCredential.mpassword != '' && mpasswordCheck != ''">
      <h6 v-if="joinCredential.mpassword != mpasswordCheck" class="ms-2" style="color: #b97687;">X 비밀번호가 일치하지 않습니다.</h6>
      <h6 v-if="joinCredential.mpassword == mpasswordCheck" class="ms-2" style="color: #7fb7a0;">V 비밀번호가 일치합니다.</h6>
    </div>
    <div class="d-flex">
      <!-- 이름 -->
      <div class="form mb-3 col-8">
        <input v-model="joinCredential.mname" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh;" placeholder="이름">
      </div>
      <!-- 성별 -->
      <div class="form-check ms-2" style=" margin-top: 2.5vh;">
        <input @click="checkFemale" class="form-check-input" style="height: 3vh; width: 6vw;" type="checkbox" value="2" id="mgenderFemale">
        <h6 class="mt-1 mx-2">여</h6>
      </div>
      <div class="form-check ms-2" style=" margin-top: 2.5vh;">
        <input @click="checkMale" class="form-check-input" style="height: 3vh; width: 6vw;" type="checkbox" value="1" id="mgenderMale">
        <h6 class="mt-1 mx-2">남</h6>
      </div>
    </div>
    <!-- 생년월일 -->
    <div class="form mb-3">
      <input v-model="joinCredential.mbirth" type="date" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
            style="height: 7vh;">
    </div>
    <!-- 이메일 -->
    <div class="form mb-3">
      <input v-model="joinCredential.memail" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
            style="height: 7vh;" placeholder="이메일">
    </div>
    <!-- 휴대폰 -->
    <div class="form mb-3">
      <input v-model="joinCredential.mphone" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
            style="height: 7vh;" placeholder="휴대폰 ('-'제외)">
    </div>
    <div class="d-flex justify-content-center">
      <button @click="signup" type="submit" class="btn btn-lg btn-dark my-3 col-12">가입하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Join',
  data: function() {
    return {
      joinCredential: {
        mid: '',
        mpassword: '',
        mname: '',
        memail: '',
        mphone: '',
        mbirth: Date,
        mgender: 0,
      },
      mpasswordCheck: '',
    }
  },
  methods: {
    duplicatedMidCheck: function() {
      this.$store.dispatch('duplicatedMidCheck', this.joinCredential.mid)
    },
    checkFemale: function() {
      this.joinCredential.mgender = 2
    },
    checkMale: function() {
      this.joinCredential.mgender = 1
    },
    signup: function() {
      if (this.joinCredential.mid != '' && this.joinCredential.mpassword != '' && this.joinCredential.mname != '' &&
          this.joinCredential.memail != '' && this.joinCredential.mphone != '' && this.joinCredential.mgender != 0) {
        this.$store.dispatch('signup', this.joinCredential)
        this.$router.push('/login')
      }
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
  },
  computed: {
    midCheck: function() {
      return this.$store.state.midCheck
    },
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
  },
}
</script>

<style scoped>
#join {
  font-family: 'GowunBatang-Bold';
}
</style>