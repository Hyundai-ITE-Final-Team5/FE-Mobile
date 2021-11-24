import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 로딩상태 표시
    loading: false,
    brandIndex: [],
    categoryWOMEN: {},
    categoryWOMENKeys: [],
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
    // 카테고리 목록 가져오기
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
    // 선택한 브랜드 상품리스트 가져오기
    getBrandList: function(context, bno) {
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
  },
  modules: {
  }
})
