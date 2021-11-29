<template>
  <div>
    <div class="d-flex">
      <div class="col-4 ps-2">
        <img :src="like.pcimg1" alt="" style="width: 105px;">
      </div>
      <div class="col-8 mt-2 ms-2">
        <h5 class="fw-bold">{{ like.bname }}</h5>
        <h6>{{ like.pname }}</h6>
        <h6>{{ like.pcprice }}<span> 원</span></h6>
        <div class="d-flex mt-4">
          <button class="btn btn-sm" style="color: #e4beb3; border-color: #e4beb3;" @click="deleteLike">삭제</button>
          <button class="btn btn-sm mx-2" style="color: gray; border-color: gray;" @click="getProductDetail">쇼핑백 담기</button>
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'likeListItem',
  // data: function() {
  //   return {
  //     pcid: this.product.colorinfo[0].pcid
  //   }
  // },
  props: {
    like: {
      type: Object
    },
  },
  methods: {
    deleteLike: function() {
      this.$store.dispatch('deleteLike', this.like.pid)
    },
    getProductDetail: function() {
      this.$store.dispatch('getProductDetail', this.like.pcid)
      this.$router.push('/productdetail')
    },
  },
}
</script>

<style scoped>
.btn:focus {   
  box-shadow: 0px 0px 0px transparent;
  border-color: #a0a0a0;
}
</style>