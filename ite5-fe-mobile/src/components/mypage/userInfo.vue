<template>
  <div class="ms-3 mt-4">
    <!-- ID -->
    <div class="d-flex">
      <div class="col-3">
        <h5>아이디</h5>
      </div>
      <div class="col-9">
        <h5 v-if="userInfo">{{ userInfo.mid }}</h5>
      </div>
    </div>
    <!-- PASSWORD -->
    <div class="d-flex my-3">
      <div class="col-3">
        <h5 class="mt-1">비밀번호</h5>
      </div>
      <div class="col-6">
        <input type="password" class="form-control" value="******">
      </div>
      <div class="btn btn-outline-secondary">수정</div>
    </div>
    <!-- NAME -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>이름</h5>
      </div>
      <div class="col-9">
        <h5>{{ userInfo.mname }}</h5>
      </div>
    </div>
    <!-- GENDER -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>성별</h5>
      </div>
      <div class="col-9">
        <h5 v-if="userInfo.mgender == 2">여</h5>
        <h5 v-if="userInfo.mgender == 1">남</h5>
      </div>
    </div>
    <!-- 생년월일 -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>생년월일</h5>
      </div>
      <div class="col-9">
        <h5 v-if="userInfo">{{ birth }}</h5>
      </div>
    </div>
    <!-- EMAIL -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>이메일</h5>
      </div>
      <div class="col-9">
        <h5>{{ userInfo.memail }}</h5>
      </div>
    </div>
    <!-- PHONE -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>휴대폰</h5>
      </div>
      <div class="col-9">
        <h5 v-if="userInfo">{{ phone }}</h5>
      </div>
    </div>
    <!-- TEL -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>전화번호</h5>
      </div>
      <div class="col-9">
        <h5 v-if="userInfo.mtel == null" class="ms-3">-</h5>
        <h5 v-if="userInfo.mtel != null">{{ userInfo.mtel }}</h5>
      </div>
    </div>
    <hr>
    <h3>기본 배송지</h3>
    <!-- ZIPCODE -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>우편번호</h5>
      </div>
      <div class="col-9">
        <h5>12111</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'userInfo',
 created: function() {
   this.$store.dispatch('getUserInfo')
 },
 computed: {
   userInfo: function() {
     return this.$store.state.userInfo
   },
   birth: function() {
    const birthDate = this.userInfo.mbirth.substring(0, 10)
    return birthDate
   },
   phone: function() {
     const temp = this.userInfo.mphone
     let phoneNumber = temp.slice(0, 3) + ' - ' + temp.slice(3, 7) + ' - ' + temp.slice(7, 11)
     return phoneNumber
   }
 },
}
</script>

<style>

</style>