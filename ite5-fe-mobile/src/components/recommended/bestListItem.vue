<template>
  <div class="mx-3">
    <img :src="best.colorinfo[0].pcimg1" style="width: 250px;" alt="" @click="getProductDetail">
    <div class="d-flex justify-content-between mt-2">
      <h5 class="ms-1 mt-1 fw-bold">{{ best.bname }}</h5>
      <div class="d-flex">
        <div v-if="decodedJWT == null">
          <img src="@/assets/heart_1.png" @click="goLogin" alt="" style=" height: 20px;" class="me-3" id="likeBtn">
        </div>
        <div v-if="decodedJWT != null">
          <img v-if="bestInfo.like == false" src="@/assets/heart_1.png" @click="addLike" alt="" style=" height: 20px;" class="me-3" :id="'likeBtn1_' + bidx">
          <img v-if="bestInfo.like == true" src="@/assets/heart.png"  @click="deleteLike" alt="" style=" height: 20px;" class="me-3" :id="'likeBtn2_' + bidx">
        </div>
      </div>
    </div>
    <h6 class="ms-1 mb-2">{{ best.pname }}</h6>
    <h6 @click="getProductDetail" class="ms-1 mt-3" style="text-decoration: underline; text-underline-position: under">Shop Now →</h6>
  </div>
</template>

<script>
export default {
  name: 'bestListItem',
  props: {
    best: {
      type: Object
    },
    bidx: {
      type: Number
    },
  },
  methods: {
    addLike: function() {
      this.$store.dispatch('addLike', this.best.pid)
    },
    deleteLike: function() {
      this.$store.dispatch('deleteLike', this.best.pid)
    },
    goLogin: function() {
      this.$router.push('/login')
    },
    getProductDetail: function() {
      this.$store.dispatch('getProductDetail', this.best.colorinfo[0].pcid)
      this.$router.push('/productdetail')
    },
  },
  computed: {
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
    bestInfo: function() {
      return this.best
    },
  },
}
</script>

<style>

</style>