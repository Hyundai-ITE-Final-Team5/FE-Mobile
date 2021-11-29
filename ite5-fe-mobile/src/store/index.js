import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwt_decode from "jwt-decode"
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plugins: [createPersistedState()],
    // jwt
    userToken: null,
    // 사용자 정보
    userInfo: [],
    // 좋아요 목록
    likes: [],
    // 상품 목록
    products: [],
    // 상품 상세
    productDetail: [],
    // 쇼핑백
    shoppingbag: [],
    // 쇼핑백 가격 합계
    shoppingbagTotal: 0,
    // 주문상품 임시보관
    tempOrderInfo: [],
    // 결제정보 임시보관
    tempOrderCompleteInfo: [],
    // 보유 쿠폰 목록
    couponList: [],
    // 로딩상태 표시
    loading: false,
    brandIndex: [],
    // 카테고리 항목 관리
    // WOMEN
    categoryWOMEN: {},
    categoryWOMENKeys: [],
    // MEN
    categoryMEN: {},
    categoryMENKeys: [],
    // KIDS
    categoryKIDS: {},
    categoryKIDSKeys: [],
    // LIFE STYLE
    categoryLS: {},
    categoryLSKeys: [],
    // 아이디 중복확인
    midCheck: null,
    // 결제수단 목록
    paymentList: [],
  },
  mutations: {
    SAVE_JWT: function (state, token) {
      state.userToken = token
    },
    DELETE_JWT: function (state) {
      state.userToken = null
      state.userInfo = []
    },
    GET_USER_INFO: function(state, info) {
      state.userInfo = info
    }, 
    GET_BRAND_INDEX: function(state, data) {
      state.brandIndex = data
    },
    GET_BRAND_LIST: function(state, data) {
      state.products = data
    },
    // 카테고리
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
    GET_CATEGORY_KIDS: function(state, data) {
      for (let key in Object.values(data)) {
        state.categoryKIDS = Object.values(data)[key]
      }
      state.categoryKIDSKeys = Object.keys(state.categoryKIDS)
    },
    GET_CATEGORY_LS: function(state, data) {
      for (let key in Object.values(data)) {
        state.categoryLS = Object.values(data)[key]
      }
      state.categoryLSKeys = Object.keys(state.categoryLS)
    },
    GET_CATEGORY_WOMEN_LIST: function(state, data) {
      state.products = data
    },
    GET_CATEGORY_MEN_LIST: function(state, data) {
      state.products = data
    },
    GET_CATEGORY_KIDS_LIST: function(state, data) {
      state.products = data
    },
    GET_CATEGORY_LS_LIST: function(state, data) {
      state.products = data
    },
    ADD_LIKE: function(state, productId) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].pid == productId) {
          state.products[i].like = true
          break;
        }
      }
    },
    DELETE_LIKE: function(state, productId) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].pid == productId) {
          state.products[i].like = false
          break;
        }
      }
      for (let i = 0; i < state.likes.length; i++) {
        if (state.likes[i].pid == productId) {
          state.likes.splice(i, 1)
          break;
        }
      }
    },
    GET_LIKE_LIST: function(state, likes) {
      state.likes = likes
    },
    GET_SHOPPINGBAG_LIST: function(state, items) {
      state.shoppingbag = []
      state.shoppingbagTotal = 0
      state.shoppingbag = items
      for (let i = 0; i < state.shoppingbag.length; i++) {
        state.shoppingbagTotal += state.shoppingbag[i].pcprice * state.shoppingbag[i].pquantity
      }
    },
    GET_PRODUCT_DETAIL: function(state, productDetail) {
      state.productDetail = productDetail
    },
    DELETE_SHOPPINGBAG: function(state, psid) {
      for (let i = 0; i < state.shoppingbag.length; i++) {
        if (state.shoppingbag[i].psid == psid) {
          state.shoppingbag.splice(i, 1)
          break;
        }
      }
      state.shoppingbagTotal = 0
      for (let i = 0; i < state.shoppingbag.length; i++) {
        state.shoppingbagTotal += state.shoppingbag[i].pcprice * state.shoppingbag[i].pquantity
      }
    },
    SHOW_OPTION: function(state, colorsizeInfo) {
      state.productColorSize = colorsizeInfo
    },
    DUPLICATED_MID_CHECK: function(state, data) {
      state.midCheck = data.result
    },
    MAKE_ORDER: function(state, orderInfo) {
      state.tempOrderInfo = orderInfo
    },
    // 쿠폰목록 가져오기
    GET_COUPONLIST: function(state, coupon) {
      state.couponList = coupon
    },
    // 결제수단 목록 가져오기
    GET_PAYMENTLIST: function(state, methods) {
      state.paymentList = methods
    },
    // 결제완료
    PAY: function(state, pmInfo) {
      state.tempOrderCompleteInfo = pmInfo
      state.shoppingbag = []
      state.shoppingbagTotal = 0
      state.tempOrderInfo = []
      console.log(state.tempOrderCompleteInfo)
    },
  },
  actions: {
    // 로그인
    getJWT: function(context, credential) {
      axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50215/login',
        data: credential
      })
      .then((res) => {
        context.commit('SAVE_JWT', res.data.jwt)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    // 로그아웃
    deleteJWT: function (context) {
      context.commit('DELETE_JWT')
    },
    // 회원가입
    signup: function(context, joinCredential) {
      axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50215/join',
        data: joinCredential
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    // Index Page
    //브랜드 목록 가져오기
    getBrandIndex: function(context) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      axios({
        method: 'get',
        url: 'http://kosa1.iptime.org:50222/navbar/brandList',
        headers: {
          Authorization: hasToken
        },
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
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }      
      axios({
        method: 'get',
        url: 'http://kosa1.iptime.org:50222/navbar/categoryList?depth1=WOMEN',
        headers: {
          Authorization: hasToken
        },
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
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }      
      axios({
        method: 'get',
        url: 'http://kosa1.iptime.org:50222/navbar/categoryList?depth1=MEN',
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('GET_CATEGORY_MEN', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // KIDS카테고리 목록 가져오기
    getCategoryKIDS: function(context) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }      
      axios({
        method: 'get',
        url: 'http://kosa1.iptime.org:50222/navbar/categoryList?depth1=KIDS',
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('GET_CATEGORY_KIDS', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // LIFE STYLE카테고리 목록 가져오기
    getCategoryLS: function(context) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }      
      axios({
        method: 'get',
        url: 'http://kosa1.iptime.org:50222/navbar/categoryList?depth1=LIFESTYLE',
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('GET_CATEGORY_LS', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 선택한 브랜드 상품리스트 가져오기
    getBrandList: function(context, bno) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      // 로딩중 중복요청 제한
      if (this.state.loading) {
        return
      }
      this.state.loading = true

      axios({
        method: 'get',
        url: `http://kosa1.iptime.org:50222/list/brand/${bno}`,
        headers: {
          Authorization: hasToken
        },
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
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }      
      // 로딩중 중복요청 제한
      if (this.state.loading) {
        return
      }
      this.state.loading = true

      axios({
        method: 'get',
        url: `http://kosa1.iptime.org:50222/list/category${str}`,
        headers: {
          Authorization: hasToken
        },
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
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }      
      // 로딩중 중복요청 제한
      if (this.state.loading) {
        return
      }
      this.state.loading = true

      axios({
        method: 'get',
        url: `http://kosa1.iptime.org:50222/list/category${str}`,
        headers: {
          Authorization: hasToken
        },
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
    // KIDS대분류 소속의 상품 리스트 가져오기
    getCategoryKIDSList: function(context, str) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }      
      // 로딩중 중복요청 제한
      if (this.state.loading) {
        return
      }
      this.state.loading = true
      axios({
        method: 'get',
        url: `http://kosa1.iptime.org:50222/list/category${str}`,
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('GET_CATEGORY_KIDS_LIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.state.loading = false
        })
    },
    // LIFE STYLE대분류 소속의 상품 리스트 가져오기
    getCategoryLSList: function(context, str) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }         
      // 로딩중 중복요청 제한
      if (this.state.loading) {
        return
      }
      this.state.loading = true
      axios({
        method: 'get',
        url: `http://kosa1.iptime.org:50222/list/category${str}`,
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('GET_CATEGORY_LS_LIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.state.loading = false
        })
    },
    addLike: function(context, productId) {
      axios({
        method: 'get',
        url: `http://kosa1.iptime.org:50222/list/addlike/${productId}`,
        headers: {
          Authorization: `Bearer ${context.state.userToken}`
        },
      })
        .then((res) => {
          context.commit('ADD_LIKE', productId)
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteLike: function(context, productId) {
      context.commit('DELETE_LIKE', productId)
      axios({
        method: 'delete',
        url: `http://kosa1.iptime.org:50222/list/dellike/${productId}`,
        headers: {
          Authorization: `Bearer ${context.state.userToken}`
        },
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getLikeList: function(context) {
      axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50215/member/likes/likelist',
        headers: {
          Authorization: `Bearer ${context.state.userToken}`
        },
      })
        .then((res) => {
          context.commit('GET_LIKE_LIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 쇼핑백 목록 가져오기
    getShoppingbagList: function(context) {
      axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50215/member/cart/cartlist',
        headers: {
          Authorization: `Bearer ${context.state.userToken}`
        },
      })
        .then((res) => {
          context.commit('GET_SHOPPINGBAG_LIST', res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 선택 상품 상세정보 가져오기
    getProductDetail: function(context, productColorId) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }  
      axios({
        method: 'get',
        url: `http://kosa1.iptime.org:50222/product/detail/${productColorId}`,
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('GET_PRODUCT_DETAIL', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 쇼핑백에 상품 추가
    addShoppingbag: function(context, shoppingbag) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50215/member/cart/addcart',
        data: shoppingbag,
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          //context.commit('GET_PRODUCT_DETAIL', res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 쇼핑백에 상품 삭제
    deleteShoppingbag: function(context, psid) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      axios({
        method: 'delete',
        url: 'http://kosa1.iptime.org:50215/member/cart/deletecart',
        data: {
          "psid": psid,
        },
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('DELETE_SHOPPINGBAG', psid)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 쇼핑백에 상품 옵션 변경하기
    changeOption: function(context, changeInfo) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50215/member/cart/changecart',
        data: changeInfo,
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('GET_SHOPPINGBAG_LIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 회원가입시 아이디 중복 체크
    duplicatedMidCheck: function(context, mid) {
      axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50215/idcheck',
        data: {
          "mid": mid,
        }
      })
        .then((res) => {
          context.commit('DUPLICATED_MID_CHECK', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 마이페이지 유저정보 가져오기
    getUserInfo: function(context) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50215/member/mypage',
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('GET_USER_INFO', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 쇼핑백의 상품을 주문페이지로 가져가기위한 임시 저장
    makeOrder: function(context, orderInfo) {
      context.commit('MAKE_ORDER', orderInfo)
    },
    // 쿠폰 목록 가져오기
    getCouponList: function(context) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      axios({
        method: 'get',
        url: 'http://kosa1.iptime.org:50215/member/coupon/couponlist',
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('GET_COUPONLIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 결제수단 목록 가져오기
    getPaymentList: function(context) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      axios({
        method: 'get',
        url: 'http://byeon.yonghyeok.site:8888/order/paymethodList',
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('GET_PAYMENTLIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 결제하기
    pay: function(context , orderpayInfo) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      console.log(orderpayInfo)
      axios({
        method: 'post',
        url: 'http://byeon.yonghyeok.site:8888/order/carttoorder ',
        data: orderpayInfo,
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('PAY', res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  getters: {
    decodedToken: function (state) {
      if (state.userToken) {
        return jwt_decode(state.userToken)
      } 
      else {
        return null
      }
    },
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
    categoryKIDS: function(state) {
      return state.categoryKIDS
    },
    categoryKIDSKeys: function(state) {
      return state.categoryKIDSKeys
    },
    categoryLS: function(state) {
      return state.categoryLS
    },
    categoryLSKeys: function(state) {
      return state.categoryLSKeys
    },
    likeList: function(state) {
      return state.likes
    },
    getProductCommon: function(state) {
      return state.productDetail.common
    },
    getProductDetail: function(state) {
      return state.productDetail.detail
    },
  },
  modules: {
  }
})
