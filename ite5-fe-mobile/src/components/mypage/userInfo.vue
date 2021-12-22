<template>
  <div class="mt-4 mb-4" style="background-color: #e9e9e9; padding-top: 1px;">
    <div class="d-flex justify-content-between ps-2 p-1" style="background-color: #fff;">
      <h3 class="fw-bold my-3">회원 정보</h3>
      <div class="d-flex mt-2">
        <button class="btn btn-outline-dark me-1" style="height: 40px;" @click="modifyUserInfo1">수정</button>
        <button class="btn btn-dark me-2" style="height: 40px;" @click="sendModifyUserInfo1">등록</button>
      </div>      
    </div>
    <div id="defaultInfo1" class="ps-3 pe-1 py-3" style="display: block; background-color: #fff;">
      <!-- ID -->
      <div class="d-flex">
        <div class="col-3">
          <h5>•아이디</h5>
        </div>
        <div class="col-9 ms-2">
          <h6 v-if="userInfo">|&nbsp;&nbsp;&nbsp;{{ userInfo.mid }}</h6>
        </div>
      </div>
      <!-- NAME -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>•이름</h5>
        </div>
        <div class="col-9 ms-2">
          <h6>|&nbsp;&nbsp;&nbsp;{{ userInfo.mname }}</h6>
        </div>
      </div>
      <!-- GENDER -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>•성별</h5>
        </div>
        <div class="col-9 ms-2">
          <h6 v-if="userInfo.mgender == 2">|&nbsp;&nbsp;&nbsp;여</h6>
          <h6 v-if="userInfo.mgender == 1">|&nbsp;&nbsp;&nbsp;남</h6>
        </div>
      </div>
      <!-- 생년월일 -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>•생년월일</h5>
        </div>
        <div class="col-9 ms-2">
          <h6 v-if="userInfo">|&nbsp;&nbsp;&nbsp;{{ birth }}</h6>
        </div>
      </div>
      <!-- PHONE -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>•휴대폰</h5>
        </div>
        <div class="col-9 ms-2">
          <h6 v-if="userInfo">|&nbsp;&nbsp;&nbsp;{{ phone }}</h6>
        </div>
      </div>
      <!-- EMAIL -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>•이메일</h5>
        </div>
        <div class="col-9 ms-2">
          <h6>|&nbsp;&nbsp;&nbsp;{{ userInfo.memail }}</h6>
        </div>
      </div>
      <!-- TEL -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>•전화번호</h5>
        </div>
        <div class="col-9 ms-2">
          <h6 v-if="userInfo.mtel == null" class="ms-4">|&nbsp;&nbsp;&nbsp;-</h6>
          <h6 v-if="userInfo.mtel != null">|&nbsp;&nbsp;&nbsp;{{ userInfo.mtel }}</h6>
        </div>
      </div>
    </div>
    <div id="changeInfo1" class="ps-3 pe-1 py-3" style="display: none; background-color: #fff;" >
      <!-- ID -->
      <div class="d-flex">
        <div class="col-3">
          <h5>•아이디</h5>
        </div>
        <div class="col-9 ms-2">
          <h6 v-if="userInfo">|&nbsp;&nbsp;&nbsp;{{ userInfo.mid }}</h6>
        </div>
      </div>
      <!-- NAME -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>•이름</h5>
        </div>
        <div class="col-9 ms-2">
          <h6>|&nbsp;&nbsp;&nbsp;{{ userInfo.mname }}</h6>
        </div>
      </div>
      <!-- GENDER -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>•성별</h5>
        </div>
        <div class="col-9 ms-2">
          <h6 v-if="userInfo.mgender == 2">|&nbsp;&nbsp;&nbsp;여</h6>
          <h6 v-if="userInfo.mgender == 1">|&nbsp;&nbsp;&nbsp;남</h6>
        </div>
      </div>
      <!-- 생년월일 -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>•생년월일</h5>
        </div>
        <div class="col-9 ms-2">
          <h6 v-if="userInfo">|&nbsp;&nbsp;&nbsp;{{ birth }}</h6>
        </div>
      </div>
      <!-- PHONE -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>•휴대폰</h5>
        </div>
        <div class="col-8">
          <input v-model="info.mphone" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
                 style="height: 5vh;">
        </div>
      </div>
      <!-- EMAIL -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>•이메일</h5>
        </div>
        <div class="col-8">
          <input v-model="info.memail" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
                 style="height: 5vh;">
        </div>
      </div>
      <!-- TEL -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>•전화번호</h5>
        </div>
        <div class="col-8">
          <input v-model="info.mtel" type="text" class=" mb-3 form-control border-2 border-top-0 border-start-0 border-end-0" 
                  style="height: 5vh;">
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between mt-3 ps-2 pt-3 pb-1" style="background-color: #fff;">
      <h3 class="fw-bold my-3">기본 배송지</h3>
      <div class="d-flex mt-2">
        <button class="btn btn-outline-dark me-1" style="height: 40px;" @click="modifyUserInfo2">수정</button>
        <button class="btn btn-dark me-2" style="height: 40px;" @click="sendModifyUserInfo2">등록</button>
      </div>      
    </div>
    <div id="defaultInfo2" class="ps-3 pe-1 p-1" style="display: block; background-color: #fff;">
      <!-- ZIPCODE -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>•우편번호</h5>
        </div>
        <div class="col-9 ms-2">
          <h6 v-if="userInfo.mzipcode == null" class="ms-4">|&nbsp;&nbsp;&nbsp;-</h6>
          <h6 v-if="userInfo.mzipcode != null">|&nbsp;&nbsp;&nbsp;{{ userInfo.mzipcode }}</h6>
        </div>
      </div>
      <!-- 주소1 -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>•주소</h5>
        </div>
        <div class="col-9 ms-2">
          <h6 v-if="userInfo.maddress1 == null" class="ms-4">|&nbsp;&nbsp;&nbsp;-</h6>
          <h6 v-if="userInfo.maddress1 != null">|&nbsp;&nbsp;&nbsp;{{ userInfo.maddress1 }}</h6>
        </div>
      </div>
      <!-- 주소2 -->
      <div class="d-flex my-2">
        <div class="col-3">
          <h5>•상세주소</h5>
        </div>
        <div class="col-9 ms-2">
          <h6 v-if="userInfo.maddress2 == null" class="ms-4">|&nbsp;&nbsp;&nbsp;-</h6>
          <h6 v-if="userInfo.maddress2 != null">|&nbsp;&nbsp;&nbsp;{{ userInfo.maddress2 }}</h6>
        </div>
      </div>
    </div>
    <div id="changeInfo2" style="display: none; background-color: #fff;">
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
    <div class="mt-3 px-3 py-1" style="background-color: #fff;">
      <h3 class="fw-bold mt-3 mb-3">수신여부 동의</h3>
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
  </div>
</template>

<script>
export default {
  name: 'userInfo',
  data: function() {
    return {
      info: {
        "mphone": this.userInfo.mphone,
        "memail": this.userInfo.memail,
        "mtel": this.userInfo.mtel,
        "mzipcode": this.userInfo.mzipcode,
        "maddress1": this.userInfo.maddress1,
        "maddress2": this.userInfo.maddress2,
      }
    }
  },
 props: {
   userInfo: {
     type: Object
   },
 },
 computed: {
    birth: function() {
      const birthDate = this.userInfo.mbirth
      return birthDate.substring(0, 10)
    },
    phone: function() {
      const temp = this.userInfo.mphone
      return temp.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3")
    },
 },
  methods: {
    modifyUserInfo1: function() {
      const defaultInfoId = document.getElementById('defaultInfo1')
      const changeInfoId = document.getElementById('changeInfo1')
      defaultInfoId.style.display = 'none'
      changeInfoId.style.display = 'block'
    },
    modifyUserInfo2: function() {
      const defaultInfoId = document.getElementById('defaultInfo2')
      const changeInfoId = document.getElementById('changeInfo2')
      defaultInfoId.style.display = 'none'
      changeInfoId.style.display = 'block'
    },
    sendModifyUserInfo1: function() {
      this.$store.dispatch('sendModifyUserInfo', this.info)
      const defaultInfoId = document.getElementById('defaultInfo1')
      const changeInfoId = document.getElementById('changeInfo1')
      defaultInfoId.style.display = 'block'
      changeInfoId.style.display = 'none'
    },
    sendModifyUserInfo2: function() {
      this.$store.dispatch('sendModifyUserInfo', this.info)
      const defaultInfoId = document.getElementById('defaultInfo2')
      const changeInfoId = document.getElementById('changeInfo2')
      defaultInfoId.style.display = 'block'
      changeInfoId.style.display = 'none'
    },
  },
}
</script>

<style>

</style>