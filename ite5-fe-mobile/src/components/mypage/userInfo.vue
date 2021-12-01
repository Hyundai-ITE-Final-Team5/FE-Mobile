<template>
  <div class="ms-3 mt-4">
    <h3 class="fw-bold my-3">회원 정보</h3>
    <!-- ID -->
    <div class="d-flex">
      <div class="col-3">
        <h5>아이디</h5>
      </div>
      <div class="col-9">
        <h6 v-if="userInfo">{{ userInfo.mid }}</h6>
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
      <div class="btn btn-dark ms-2">수정</div>
    </div>
    <!-- NAME -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>이름</h5>
      </div>
      <div class="col-9">
        <h6>{{ userInfo.mname }}</h6>
      </div>
    </div>
    <!-- GENDER -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>성별</h5>
      </div>
      <div class="col-9">
        <h6 v-if="userInfo.mgender == 2">여</h6>
        <h6 v-if="userInfo.mgender == 1">남</h6>
      </div>
    </div>
    <!-- 생년월일 -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>생년월일</h5>
      </div>
      <div class="col-9">
        <h6 v-if="userInfo">{{ birth }}</h6>
      </div>
    </div>
    <!-- EMAIL -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>이메일</h5>
      </div>
      <div class="col-9">
        <h6>{{ userInfo.memail }}</h6>
      </div>
    </div>
    <!-- PHONE -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>휴대폰</h5>
      </div>
      <div class="col-9">
        <h6 v-if="userInfo">{{ phone }}</h6>
      </div>
    </div>
    <!-- TEL -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>전화번호</h5>
      </div>
      <div class="col-9">
        <h6 v-if="userInfo.mtel == null" class="ms-3">-</h6>
        <h6 v-if="userInfo.mtel != null">{{ userInfo.mtel }}</h6>
      </div>
    </div>
    <hr>
    <div class="d-flex justify-content-between">
      <h3 class="fw-bold my-3">기본 배송지</h3>
      <div class="d-flex mt-2">
        <button class="btn btn-outline-dark me-1" style="height: 40px;" @click="modifyUserInfo">수정</button>
        <button class="btn btn-dark me-2" style="height: 40px;" @click="sendModifyUserInfo">등록</button>
      </div>      
    </div>
    <div id="defaultInfo" style="display: block;">
      <!-- ZIPCODE -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>우편번호</h5>
        </div>
        <div class="col-9">
          <h6>{{ userInfo.mzipcode }}</h6>
        </div>
      </div>
      <!-- 주소1 -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>주소</h5>
        </div>
        <div class="col-9">
          <h6>{{ userInfo.maddress1 }}</h6>
        </div>
      </div>
      <!-- 주소2 -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>상세주소</h5>
        </div>
        <div class="col-9">
          <h6>{{ userInfo.maddress2 }}</h6>
        </div>
      </div>
    </div>
    <div id="changeInfo" style="display: none;">
      <!-- ZIPCODE -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5 class="mt-3">우편번호</h5>
        </div>
        <div class="col-8">
          <input v-model="info.mzipcode" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
                 style="height: 5vh;">
        </div>
      </div>
      <!-- 주소1 -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5 class="mt-3">주소</h5>
        </div>
        <div class="col-8">
          <input v-model="info.maddress1" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
                 style="height: 5vh;">
        </div>
      </div>
      <!-- 주소2 -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5 class="mt-3">상세주소</h5>
        </div>
        <div class="col-8">
          <input v-model="info.maddress2" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
                 style="height: 5vh;">
        </div>
      </div>
    </div>
    <hr>
    <h5 class="fw-bold mt-4 mb-3">수신여부 동의</h5>
    <h6 class="text-muted">더한섬닷컴에서 제공되는 서비스에 대한 수신동의 여부를 확인해주세요.</h6>
    <h6 class="text-muted">선택 하시면 더한섬닷컴에서 진행하는 공지 및 이벤트 소식을 받아보실 수 있습니다.</h6>
    <div class="d-flex mt-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" style="width: 20px; height: 20px;" checked>
        <label class="form-check-label" for="agreement">
          <h6 class="ms-1 mt-1">EMAIL</h6>
        </label>
      </div>
      <div class="form-check mx-3">
        <input class="form-check-input" type="checkbox" value="" style="width: 20px; height: 20px;">
        <label class="form-check-label" for="agreement">
          <h6 class="ms-1 mt-1">SMS</h6>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'userInfo',
 data: function() {
   return {
     info: {
       "mzipcode": '',
       "maddress1": '',
       "maddress2": '',
     }
   }
 },
 computed: {
   userInfo: function() {
     return this.$store.state.userInfo
   },
   birth: function() {
    const birthDate = this.userInfo.mbirth
    return birthDate
   },
   phone: function() {
     const temp = this.userInfo.mphone
     //let phoneNumber = temp.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3")
     return temp
   },
 },
 methods: {
  modifyUserInfo: function() {
    const defaultInfoId = document.getElementById('defaultInfo')
    const changeInfoId = document.getElementById('changeInfo')
    defaultInfoId.style.display = 'none'
    changeInfoId.style.display = 'block'
},
  sendModifyUserInfo: function() {
    this.$store.dispatch('sendModifyUserInfo', this.info)

    const defaultInfoId = document.getElementById('defaultInfo')
    const changeInfoId = document.getElementById('changeInfo')
    defaultInfoId.style.display = 'block'
    changeInfoId.style.display = 'none'
  },
 },
}
</script>

<style>

</style>