<template>
  <div class="my-3">
    <div class="d-flex">
      <div class="col-4 ps-2">
        <img :src="like.pcimg1" alt="" style="width: 105px;">
      </div>
      <div class="col-8 mt-2 ms-2">
        <h5 class="fw-bold">{{ like.bname }}</h5>
        <h6>{{ like.pname }}</h6>
        <h6>{{ like.pcprice }}<span> 원</span></h6>
        <div class="d-flex mt-4">
          <button class="btn btn-sm" style="color: #b97687; border-color: #b97687;" data-bs-toggle="modal" :data-bs-target="'#likeDeleteAlert_' + this.lidx">삭제</button>
          <button class="btn btn-sm mx-2" style="color: gray; border-color: gray;" @click="getProductDetail">쇼핑백 담기</button>
        </div>
        <!-- 삭제확인 Modal -->
        <div class="modal fade" style="margin-top: 30vh;" :id="'likeDeleteAlert_' + lidx" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                좋아요 목록에서 삭제하시겠습니까?
              </h5>
              <div class="modal-footer">
                <button type="button" class="btn btn-sm btn-outline-dark col-3" data-bs-dismiss="modal">닫기</button>
                <button type="button" class="btn btn-sm btn-dark col-3" @click="deleteLike" data-bs-dismiss="modal">삭제</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'likeListItem',
  props: {
    like: {
      type: Object
    },
    lidx: {
      type: Number
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

<style>
.btn:focus {   
  box-shadow: 0px 0px 0px transparent;
  border-color: #a0a0a0;
}
</style>