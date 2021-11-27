<template>
  <div class="px-2">
    <h1 class="text-center my-5">로그인</h1>
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
      <router-link to="/join" class="text-decoration-none text-dark"><h6>회원가입</h6></router-link>
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
    moveMenuStatusBarHome: function() {
      const menuStatusBarId = document.getElementById('menuStatusBar')
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveHome")
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