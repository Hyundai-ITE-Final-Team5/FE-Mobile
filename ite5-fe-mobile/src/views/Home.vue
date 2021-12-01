<template>
  <div class="home">
    <div class="brand">
      <img src="@/assets/brand/sjsj.jpg" alt="" style="filter: brightness(65%); position: absolute;">
      <div class="">
        <button class="btn btn-outline-light col-4" style="margin-top: 300px; margin-left: 55px; margin-bottom: 77px; z-index: 10; position: absolute;" 
                @click="goIndex">GO SHOP</button>
        <button class="btn btn-outline-light col-4" style="margin-top: 300px; margin-left: 200px; margin-bottom: 77px; z-index: 10; position: absolute;" 
                @click="goEvent">EVENT</button>
      </div>
      <img src="@/assets/brand/time.jpg" alt="">
      <img src="@/assets/brand/time.jpg" style="filter: brightness(65%);" alt="">
    </div>
    <div>
      <h1 class="fw-bold mt-4 ms-2">EVENT</h1>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img v-if="eventList.length > 0" :src="eventList[0].eimg" class="d-block w-100" alt="..." @click="getEventDetail">
          </div>
          <div class="carousel-item">
            <img v-if="eventList.length > 0" :src="eventList[1].eimg" class="d-block w-100" alt="..." @click="getEventDetail">
          </div>
          <div class="carousel-item">
            <img v-if="eventList.length > 0" :src="eventList[2].eimg" class="d-block w-100" alt="..." @click="getEventDetail">
          </div>
          <div class="carousel-item">
            <img v-if="eventList.length > 0" :src="eventList[3].eimg" class="d-block w-100" alt="..." @click="getEventDetail">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <h1 class="fw-bold mt-5 ms-2">BEST</h1>
    <bestList/>
  </div>
</template>

<script>
import bestList from '@/components/best/bestList'
export default {
  name: 'Home',
  components: {
    bestList,
  },
  created: function() {
    this.$store.dispatch('getEventList')
    this.$store.dispatch('getBestproduct')
  },
  computed: {
    eventList: function() {
      return this.$store.state.eventList
    },
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
  },
  methods: {
    moveMenuStatusBarIndex: function() {
      const menuStatusBarId = document.getElementById('menuStatusBar')
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveIndex")
    },
    moveMenuStatusBarLike: function() {
      const menuStatusBarId = document.getElementById('menuStatusBar')
      menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
      menuStatusBarId.classList.add("moveLike")
    },
    getEventDetail: function() {
      this.$router.push('/event')
    },
    goBack: function() {
      this.$router.go(-1)
    },
    goIndex: function() {
      this.$router.push('/index')
      this.moveMenuStatusBarIndex()
    },
    goEvent: function() {
      this.$router.push('/event')
    },
  },
}
</script>

<style scoped>
</style>
