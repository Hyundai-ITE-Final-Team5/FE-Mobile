<template>
  <div class="ms-3 mt-3">
    <h3 class="mb-3">User Info</h3>
    <hr>
    <!-- ID -->
    <div class="d-flex">
      <div class="col-3">
        <h5>아이디</h5>
      </div>
      <div class="col-9">
        <h5>username</h5>
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
        <h5>조영신</h5>
      </div>
    </div>
    <!-- EMAIL -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>이메일</h5>
      </div>
      <div class="col-9">
        <h5>cho8213456@gmail.com</h5>
      </div>
    </div>
    <!-- PHONE -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>휴대폰</h5>
      </div>
      <div class="col-9">
        <h5>01035288213</h5>
      </div>
    </div>
    <!-- TEL -->
    <div class="d-flex my-2">
      <div class="col-3">
        <h5>전화번호</h5>
      </div>
      <div class="col-9">
        <h5>023458234</h5>
      </div>
    </div>
    <hr>
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
}
</script>

<style>

</style>