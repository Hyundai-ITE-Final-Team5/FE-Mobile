<template>
  <div>
    <div class="ps-0 mb-5">
      <router-link to="/productdetail"><img :src="productInfo.colorinfo[0].pcimg1" 
            class="card-img-top upper-image" alt="item"></router-link>
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h5 class="fw-bold">{{ productInfo.bname }}</h5>
          <div class="d-flex">
            <div v-for="(color, idx) in productInfo.colorinfo" :key="idx">
              <img :src="color.pcchipimg" alt="" class="ms-2" style="height: 24px;">
            </div>
          </div>
        </div>
        <h6 class="card-text my-2">{{ productInfo.pname }}</h6>
        <h6 class="card-text">{{ productInfo.colorinfo[0].pcprice }} 원</h6>
        <div class="d-flex justify-content-between">
          <div class="mt-3 d-flex">
            <div v-if="decodedJWT != null">
              <img v-if="productInfo.like == false" src="@/assets/heart_1.png" @click="addLike" alt="" style=" height: 26px;" class="me-3" id="likeBtn">
              <img v-if="productInfo.like == true" src="@/assets/heart.png"  @click="deleteLike" alt="" style=" height: 26px;" class="me-3" id="likeBtn">
            </div>
            <div v-if="decodedJWT == null">
              <img src="@/assets/heart_1.png" alt="" style=" height: 26px;" class="me-3">
            </div>
            <img src="@/assets/shoppingbag.png" alt="" style="opacity: 0.8; height: 22px;">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: {
    product: {
      type: Object,
    },
    idx: {
      type: Number,
    },
  },
  methods: {
    addLike: function() {
      return this.$store.dispatch('addLike', this.product.pid)
    },
    deleteLike: function() {
      return this.$store.dispatch('deleteLike', this.product.pid)
    },
  },
  computed: {
    productInfo: function() {
      return this.product
    },
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
  }
}
</script>

<style scoped>

</style>