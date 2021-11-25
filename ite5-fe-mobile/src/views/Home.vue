<template>
  <div class="home">
    <h1>Home</h1>
    <h2 v-if="decodedToken != null">{{ decodedToken.mid }}</h2>
    <button v-if="decodedToken != null" @click="deleteJWT" class="btn btn-dark">로그아웃</button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  methods: {
    deleteJWT() {
      this.$store.dispatch('deleteJWT')
    },
  },
  computed: {
    decodedToken() {
      return this.$store.getters.decodedToken
    },
  },
}
</script>
