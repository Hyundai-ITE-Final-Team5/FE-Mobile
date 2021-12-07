<template>
  <div class="px-3">
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
    <h1 class="text-center" style="margin-top: 10vh;">로그인</h1>
    <div class="form mb-3">
      <input v-model="credential.mid" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
             style="height: 7vh;" placeholder="아이디">
    </div>
    <div class="form mb-3">
      <input @keyup.enter="getJWT" v-model="credential.mpassword" type="password" class="form-control border-2 border-top-0 border-start-0 border-end-0"
             style="height: 7vh;" id="floatingPassword" placeholder="비밀번호">
    </div>
    <h6 v-if="false" class="my-3" style="color: #e4beb3;">X 아이디와 비밀번호를 확인해주세요.</h6>
    <div class="form-check my-2">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
      <label class="form-check-label" for="flexCheckChecked">
        아이디 저장
      </label>
    </div>
    <div class="d-flex justify-content-center">
      <button @click="getJWT" type="submit" class="btn btn-lg btn-dark my-4 col-12">로그인</button>
    </div>
    <div class="d-flex justify-content-between px-1">
      <router-link to="/join" class="text-decoration-none text-dark"><h6 @click="moveMenuStatusBarLike">회원가입</h6></router-link>
      <h6>아이디 • 비밀번호찾기</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function() {
    return {
      credential: {
        mid: '',
        mpassword: '',
      },
    }
  },
  methods: {
    getJWT: function() {
      if (this.credential.mid != '' && this.credential.mpassword != '') {
        this.$store.dispatch('getJWT', this.credential)
        this.$router.push('/')
        this.moveMenuStatusBarHome()
      }
    },
    moveMenuStatusBarLike: function() {
      const menuStatusBarId = document.getElementById('menuStatusBar')
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveLike")
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
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
  },

}
</script>

<style>
.form-check-input:checked {
  background-color: black;
  border-color: black;
}
.form-control:focus {   
  box-shadow: 0px 0px 0px transparent;
  border-color: #a0a0a0;
}
</style>