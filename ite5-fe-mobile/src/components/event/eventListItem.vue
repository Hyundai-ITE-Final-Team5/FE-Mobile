<template>
  <div class="mb-5">
    <h2 class="text-muted ms-2 mt-4">{{ event.etitle }}</h2>
    <img :src="event.eimg" style="width: 100vw;" alt="" class="mt-2">
    <img :src="event.edetailimg" style="width: 100vw;" alt="" class="mb-3">
    <div class="d-flex">
      <h5 class="my-2 me-2">•이벤트 시작</h5>
      <h6 class="mt-2">{{ event.eissuedate }}</h6>
    </div>
    <div class="d-flex">
      <h5 class="my-2 me-2">•이벤트 종료</h5>
      <h6 class="mt-2">{{ event.eexpiredate }}</h6>
    </div>
    <div class="d-flex justify-content-center my-4">
      <button v-if="decodedJWT != null" class="btn btn-lg btn-dark col-10" @click="downloadCoupon">쿠폰 발급받기</button>
      <button v-if="decodedJWT == null" class="btn btn-lg btn-dark col-10" @click="needLogin">쿠폰 발급받기</button>
    </div>
    <hr class="my-5">
  </div>
</template>

<script>

export default {
  name: 'eventListItem',
  props: {
    event: {
      type: Object
    },
    eidx: {
      type: Number
    },
  },
  methods: {
    downloadCoupon: function() {
      this.$store.dispatch('downloadCoupon', this.event.eno)
    },
    needLogin: function() {
      this.$router.push('/login')
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

</style>