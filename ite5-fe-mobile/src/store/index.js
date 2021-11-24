import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 로딩상태 표시
    loading: false,
    brandIndex: [],
    // WOMEN
    categoryWOMEN: {},
    categoryWOMENKeys: [],
    // MEN
    categoryMEN: {},
    categoryMENKeys: [],
    products: [],
  },
  mutations: {
    GET_BRAND_INDEX: function(state, data) {
      state.brandIndex = data
    },
    GET_BRAND_LIST: function(state, data) {
      state.products = data
    },
    GET_CATEGORY_WOMEN: function(state, data) {
      for (let key in Object.values(data)) {
        state.categoryWOMEN = Object.values(data)[key]
      }
      state.categoryWOMENKeys = Object.keys(state.categoryWOMEN)
    },
    GET_CATEGORY_MEN: function(state, data) {
      for (let key in Object.values(data)) {
        state.categoryMEN = Object.values(data)[key]
      }
      state.categoryMENKeys = Object.keys(state.categoryMEN)
    },
    GET_CATEGORY_WOMEN_LIST: function(state, data) {
      state.products = data
    },
    GET_CATEGORY_MEN_LIST: function(state, data) {
      state.products = data
    },
    CHANGE_LIKE_STATUS: function(state, product) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].pid == product.pid) {
          state.products[i].like = !product.like
          break
        }
      }
    },
  },
  actions: {
    // Index Page
    //브랜드 목록 가져오기
    getBrandIndex: function(context) {
      axios({
        method: 'get',
        url: 'http://localhost:8080/navbar/brandList'
      })
        .then((res) => {
          context.commit('GET_BRAND_INDEX', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // WOMEN카테고리 목록 가져오기
    getCategoryWOMEN: function(context) {
      axios({
        method: 'get',
        url: 'http://localhost:8080/navbar/categoryList?depth1=WOMEN'
      })
        .then((res) => {
          context.commit('GET_CATEGORY_WOMEN', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // MEN카테고리 목록 가져오기
    getCategoryMEN: function(context) {
      axios({
        method: 'get',
        url: 'http://localhost:8080/navbar/categoryList?depth1=MEN'
      })
        .then((res) => {
          context.commit('GET_CATEGORY_MEN', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 선택한 브랜드 상품리스트 가져오기
    getBrandList: function(context, bno) {
      // 로딩중 중복요청 제한
      if (this.state.loading) {
        return
      }
      this.state.loading = true

      axios({
        method: 'get',
        url: `http://localhost:8080/list/brand/${bno}`
      })
        .then((res) => {
          context.commit('GET_BRAND_LIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.state.loading = false
        })
    },
    // WOMEN대분류 소속의 상품 리스트 가져오기
    getCategoryWOMENList: function(context, str) {
      // 로딩중 중복요청 제한
      if (this.state.loading) {
        return
      }
      this.state.loading = true

      axios({
        method: 'get',
        url: `http://localhost:8080/list/category${str}`
      })
        .then((res) => {
          context.commit('GET_CATEGORY_WOMEN_LIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.state.loading = false
        })
    },
    // MEN대분류 소속의 상품 리스트 가져오기
    getCategoryMENList: function(context, str) {
      // 로딩중 중복요청 제한
      if (this.state.loading) {
        return
      }
      this.state.loading = true

      axios({
        method: 'get',
        url: `http://localhost:8080/list/category${str}`
      })
        .then((res) => {
          context.commit('GET_CATEGORY_MEN_LIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.state.loading = false
        })
    },
    changeLikeStatus: function(context, product) {
      context.commit('CHANGE_LIKE_STATUS', product)
    }
  },
  getters: {
    brandIndex: function(state) {
      return state.brandIndex
    },
    categoryWOMEN: function(state) {
      return state.categoryWOMEN
    },
    categoryWOMENKeys: function(state) {
      return state.categoryWOMENKeys
    },
    categoryMEN: function(state) {
      return state.categoryMEN
    },
    categoryMENKeys: function(state) {
      return state.categoryMENKeys
    },
  },
  modules: {
  }
})
