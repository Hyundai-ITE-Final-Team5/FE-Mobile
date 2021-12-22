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
    // 방문자 수 플래그
    visitorFlag: 1,
    // 홈 UI 정보
    homeInfo: [],
    // 이벤트 목록
    eventList: [],
    // 베스트 상품 목록
    bestList: [],
    // 신상품 목록
    newList: [],
    // 좋아요 목록
    likes: [],
    // 상품 목록
    products: [],
    // 상품목록 부르는 키
    brandCallKey: null,
    // 카테고리목록 부르는 키
    categoryCallKey: null,
    // 상품 상세
    productDetail: [],
    // 쇼핑백
    shoppingbag: [],
    // 쇼핑백 상품 개수
    shoppingbagCount: null,
    // 쇼핑백 가격 합계
    shoppingbagTotal: 0,
    // 주문정보 임시보관
    tempOrderInfo: [],
    // 주문상품정보 임시보관
    tempOrderListInfo: [],
    // 주문상품정보 임시보관
    tempOrderListTotal: 0,
    // 결제정보 임시보관
    tempOrderCompleteInfo: [],
    // 주문번호
    orderNumber: '',
    // 주문내역 목록
    orderHistoryList: [],
    // 보유 쿠폰 목록
    couponList: [],
    // 로딩상태 표시
    loading: false,
    // 상품 목록 로딩상태 표시
    productListLoading: false,
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
      if (state.userInfo.mtel == null) state.userInfo.mtel = ''
      if (state.userInfo.maddress1 == null) state.userInfo.maddress1 = ''
      if (state.userInfo.maddress2 == null) state.userInfo.maddress2 = ''
      if (state.userInfo.mzipcode == null) state.userInfo.mzipcode = ''
    },
    RESET_PRODUCT_LIST: function(state) {
      state.products = []
    },
    VISITOR_COUNT: function(state) {
      state.visitorFlag = 0
    },
    GET_BRAND_INDEX: function(state, data) {
      state.brandIndex = data
    },
    GET_BRAND_LIST: function(state, data) {
      for (let i = 0; i < data.length; i++) {
        state.products.push(data[i])
      }
    },
    CHANGE_BRAND_CALL_KEY: function(state, key) {
      state.categoryCallKey = null
      state.brandCallKey = key
    },
    CHANGE_CATEGORY_CALL_KEY: function(state, key) {
      state.brandCallKey = null
      state.categoryCallKey = key
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
    GET_CATEGORY_LIST: function(state, data) {
      for (let i = 0; i < data.length; i++) {
        state.products.push(data[i])
      }
    },
    ADD_LIKE: function(state, productId) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].pid == productId) {
          state.products[i].like = true
          break;
        }
      }
      for (let i = 0; i < state.bestList.length; i++) {
        if (state.bestList[i].pid == productId) {
          state.bestList[i].like = true
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
      for (let i = 0; i < state.bestList.length; i++) {
        if (state.bestList[i].pid == productId) {
          state.bestList[i].like = false
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
      state.shoppingbagCount = state.shoppingbag.length
    },
    GET_PRODUCT_DETAIL: function(state, productDetail) {
      state.productDetail = productDetail
    },
    // 쇼핑백 상품 추가
    ADD_SHOPPINGBAG: function(state) {
      state.shoppingbagCount++
    },
    // 쇼핑백 상품 삭제
    DELETE_SHOPPINGBAG: function(state, psid) {
      state.shoppingbagCount--
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
    // 아이디 중복확인
    DUPLICATED_MID_CHECK: function(state, data) {
      state.midCheck = data.result
    },
    // 주문하기
    MAKE_ORDER: function(state, orderInfo) {
      state.tempOrderInfo = orderInfo
    },
    MAKE_TEMP_ORDER: function(state, orderListInfo) {
      state.tempOrderListTotal = 0
      state.tempOrderListInfo = orderListInfo
      for (let i = 0; i < state.tempOrderListInfo.length; i++) {
        state.tempOrderListTotal += state.tempOrderListInfo[i].pcprice * state.tempOrderListInfo[i].pquantity
      }
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
      // state.shoppingbag = []
      // state.shoppingbagTotal = 0
      // state.tempOrderInfo = []
    },
    GET_ORDER_HISTORY: function(state, orderHistory) {
      state.orderHistoryList = orderHistory
    },
    GET_EVENT_LIST: function(state, eventList) {
      state.eventList = eventList
    },
    GET_BEST_PRODUCT: function(state, bestList) {
      state.bestList = bestList
    },
    GET_NEW_PRODUCT: function(state, newList) {
      state.newList = newList
    },
    GET_HOME_IMAGE: function(state, uiInfo) {
      state.homeInfo = uiInfo
    },
  },
  actions: {
    // 로그인
    async getJWT(context, credential) {
      await axios({
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
      // 쇼핑백 상품 개수
      await axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50215/member/cart/cartlist',
        headers: {
          Authorization: `Bearer ${context.state.userToken}`
        },
      })
        .then((res) => {
          context.commit('GET_SHOPPINGBAG_LIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
      await axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50215/member/mypage',
        headers: {
          Authorization: `Bearer ${context.state.userToken}`
        },
      })
        .then((res) => {
          context.commit('GET_USER_INFO', res.data)
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
    // 방문자 수 체크
    visitorCount: function(context) {
      if (this.state.visitorFlag == 0) return
      axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50215/visit',
      })
      .then((res) => {
        context.commit('VISITOR_COUNT')
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
    // 브랜드 키 전달
    changeBrandCallKey: function(context, key) {
      context.commit('CHANGE_BRAND_CALL_KEY', key)
    },
    // 브랜드 키 전달
    changeCategoryCallKey: function(context, key) {
      context.commit('CHANGE_CATEGORY_CALL_KEY', key)
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
    resetProductList: function(context) {
      context.commit('RESET_PRODUCT_LIST')
    },
    // 선택한 브랜드 상품리스트 가져오기
    getBrandList: function(context, url) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      // 로딩중 중복요청 제한
      if (this.state.productListLoading) {
        return
      }
      this.state.productListLoading = true

      axios({
        method: 'get',
        url: `http://kosa1.iptime.org:50222/list/brand/${url}`,
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
          setTimeout(function () {
            this.state.productListLoading = false
          }.bind(this), 1200);
        })
      

      
    },
    // 선택한 카테고리 소속의 상품 리스트 가져오기
    getCategoryList: function(context, str) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }      
      // 로딩중 중복요청 제한
      if (this.state.productListLoading) {
        return
      }
      this.state.productListLoading = true

      axios({
        method: 'get',
        url: `http://kosa1.iptime.org:50222/list/category${str}`,
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('GET_CATEGORY_LIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setTimeout(function () {
            this.state.productListLoading = false
          }.bind(this), 1200);
        })
    },
    // 좋아요 추가
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
    // 좋아요 삭제
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
    // 좋아요 목록 가져오기
    getLikeList: function(context) {
      // 로딩중 중복요청 제한
      if (this.state.loading) {
        return
      }
      this.state.loading = true

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
        .finally(() => {
          this.state.loading = false
        })
    },
    // 쇼핑백 목록 가져오기
    getShoppingbagList: function(context) {
      // 로딩중 중복요청 제한
      if (this.state.loading) {
        return
      }
      this.state.loading = true

      axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50215/member/cart/cartlist',
        headers: {
          Authorization: `Bearer ${context.state.userToken}`
        },
      })
        .then((res) => {
          context.commit('GET_SHOPPINGBAG_LIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.state.loading = false
        })
    },
    // 선택 상품 상세정보 가져오기
    getProductDetail: function(context, productColorId) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }  
      // 로딩중 중복요청 제한
      if (this.state.productListLoading) {
        return
      }
      this.state.productListLoading = true      
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
        .finally(() => {
          setTimeout(function () {
            this.state.productListLoading = false
          }.bind(this), 50);
        })        
        
    },
    // 선택상품 빠져나가기
    detailExit: function(context, pcid) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      axios({
        method: 'get',
        url: `http://kosa1.iptime.org:50222/product/exit/${pcid}`,
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          console.log(res.data)
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
          context.commit('ADD_SHOPPINGBAG', res.data)
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
    getUserInfo(context) {
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
    // 마이페이지 정보 수정
    async sendModifyUserInfo(context, modifiedInfo) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      await axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50215/member/modifyinfo',
        data: modifiedInfo,
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          //context.commit('GET_USER_INFO', modifiedInfo)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
      await axios({
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
    // 마이페이지 주문내역 가져오기
    getOrderHistory: function(context) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50315/order/orderlist',
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('GET_ORDER_HISTORY', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 쇼핑백의 상품정보를 주문페이지로 가져가기위한 임시 저장
    makeOrder: function(context, orderInfo) {
      context.commit('MAKE_ORDER', orderInfo)
    },
    // 쇼핑백의 상품목록들을 주문페이지로 가져가기위한 임시 저장
    makeTempOrder: function(context, orderListInfo) {
      context.commit('MAKE_TEMP_ORDER', orderListInfo)
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
        url: 'http://kosa1.iptime.org:50315/order/paymethodList',
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
    async pay(context , orderpayInfo) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      await axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50315/order/carttoorder',
        data: orderpayInfo,
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('PAY', orderpayInfo)
          this.state.orderNumber = res.data.oid
        })
        .catch((err) => {
          console.log(err)
        })

      await axios({
        method: 'post',
        url: 'http://kosa1.iptime.org:50215/member/cart/cartlist',
        headers: {
          Authorization: `Bearer ${context.state.userToken}`
        },
      })
        .then((res) => {
          context.commit('GET_SHOPPINGBAG_LIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 주문 취소하기
    cancelOrder: function(context, oid) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      axios({
        method: 'get',
        url: `http://kosa1.iptime.org:50315/order/cancelorder/${oid}`,
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          //context.commit('PAY', orderpayInfo)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 이벤트 리스트 가져오기
    getEventList: function(context) {
      axios({
        method: 'get',
        url: 'http://kosa1.iptime.org:50215/event/eventlist?pageNo=1',
      })
        .then((res) => {
          context.commit('GET_EVENT_LIST', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 베스트상품 리스트 가져오기
    getBestproduct: function(context) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      axios({
        method: 'get',
        url: 'http://kosa1.iptime.org:50222/bestproduct',
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('GET_BEST_PRODUCT', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 신상품 리스트 가져오기
    getNewproduct: function(context) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      axios({
        method: 'get',
        url: 'http://kosa1.iptime.org:50222/newproduct',
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          context.commit('GET_NEW_PRODUCT', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 홈UI정보 가져오기
    getHomeImage: function(context) {
      axios({
        method: 'get',
        url: 'http://kosa1.iptime.org:50215/gethomeorderimg/homeorderimg',
      })
        .then((res) => {
          context.commit('GET_HOME_IMAGE', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 쿠폰다운로드
    downloadCoupon: function(context, eno) {
      let hasToken = ''
      if (context.state.userToken != null) {
        hasToken = 'Bearer ' + context.state.userToken
      }
      axios({
        method: 'get',
        url: `http://kosa1.iptime.org:50215/member/coupon/download?eno=${eno}`,
        headers: {
          Authorization: hasToken
        },
      })
        .then((res) => {
          //context.commit('GET_EVENT_LIST', res.data)
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
