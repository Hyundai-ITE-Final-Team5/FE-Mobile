<template>
  <div>
    <orderListItem v-for="(orderitem, oidx) in getShoppingbag" :key="oidx" :oidx="oidx" :orderitem="orderitem"/>
    <h3 class="mt-4 fw-bold">주문자 정보</h3>
    <!-- 아이디 -->
    <div class="d-flex ms-2">
      <div class="col-3">
        <h5 class="mt-4">아이디</h5>
      </div>
      <div class="form mb-3">
        <input v-model="orderUserInfo.mid" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;" value="">
      </div>
    </div>
    <!-- 주문자 이름 -->
    <div class="d-flex ms-2">
      <div class="col-3">
        <h5 class="mt-4">이름</h5>
      </div>
      <div class="form mb-3">
        <input type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;" :value="userInfo[0].mname">
      </div>
    </div>
    <!-- 주문자 휴대폰 -->
    <div class="d-flex ms-2">
      <div class="col-3">
        <h5 class="mt-4">휴대폰</h5>
      </div>
      <div class="form mb-3">
        <input v-model="orderUserInfo.ophone" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;" value="">
      </div>
    </div>
    <!-- 주문자 전화번호 -->
    <div class="d-flex ms-2">
      <div class="col-3">
        <h5 class="mt-4">전화번호</h5>
      </div>
      <div class="form mb-3">
        <input v-model="orderUserInfo.otel" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;" value="">
      </div>
    </div>
    <!-- 주문자 이메일 -->
    <div class="d-flex ms-2">
      <div class="col-3">
        <h5 class="mt-4">이메일</h5>
      </div>
      <div class="form mb-3">
        <input v-model="orderUserInfo.oemail" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;" value="">
      </div>
    </div>
    <hr>
    <h3 class="mt-4 fw-bold">배송 정보</h3>
    <!-- 수령인 이름 -->
    <div class="d-flex ms-2">
      <div class="col-3">
        <h5 class="mt-4">이름</h5>
      </div>
      <div class="form mb-3">
        <input type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;" :value="userInfo[0].mname">
      </div>
    </div>
    <!-- 수령인 휴대폰 -->
    <div class="d-flex ms-2">
      <div class="col-3">
        <h5 class="mt-4">휴대폰</h5>
      </div>
      <div class="form mb-3">
        <input v-model="orderUserInfo.orphone" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;" value="">
      </div>
    </div>
    <!-- 수령인 우편번호 -->
    <div class="d-flex ms-2">
      <div class="col-3">
        <h5 class="mt-4">우편번호</h5>
      </div>
      <div class="form mb-3">
        <input v-model="orderUserInfo.ozipcode" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 20vw;" value="">
      </div>
      <div>
        <button class="btn btn-dark ms-4 mt-3">주소찾기</button>
      </div>
    </div>
    <!-- 수령인 주소1 -->
    <div class="d-flex ms-2">
      <div class="col-3">
        <h5 class="mt-4">주소</h5>
      </div>
      <div class="form mb-3">
        <input type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;" :value="this.userInfo[0].maddress1">
      </div>
    </div>
    <!-- 수령인 주소2 -->
    <div class="d-flex ms-2">
      <div class="col-3">
        <h5 class="mt-4">상세주소</h5>
      </div>
      <div class="form mb-3">
        <input type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;" :value="this.userInfo[0].maddress2">
      </div>
    </div>
    <!-- 메모 -->
    <div class="d-flex ms-2">
      <div class="col-3">
        <h5 class="mt-4">배송메모</h5>
      </div>
      <div class="form mb-3">
        <input v-model="orderUserInfo.omemo" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;">
      </div>
    </div>
    <hr>
    <h3 class="mt-4 fw-bold">Point</h3>
    <div class="d-flex ms-2">
      <div class="form mb-3">
        <input v-model="orderUserInfo.ousedmileage" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;">
      </div>
      <div>
        <button class="btn btn-dark ms-2 mt-3">전액사용</button>
      </div>
    </div>
    <div class="d-flex">
      <h6 class="ms-2">보유 마일리지</h6>
      <h6 class="ms-2 fw-bold">{{ userInfo[0].mmileage }}</h6>
      <h6 class="ms-2">Point</h6>
    </div>
    <hr>
    <h3 class="my-4 fw-bold">Coupon</h3>
    <div class="d-flex mb-4">
      <select class="select form-select border-2 border-top-0 border-start-0 border-end-0" aria-label="Default select example" style="width: 250px;">
        <option>
          <couponListItem v-for="(coupon, cpidx) in couponList" :key="cpidx" :coupon="coupon" :cpidx="cpidx"/>
        </option>
      </select>
      <div>
        <h5 class="mt-2 ms-3">쿠폰목록</h5>
      </div>
    </div>
    <hr>
    <h3 class="my-4 fw-bold">최종 결제금액</h3>
    <div class="ms-4">
      <div class="d-flex justify-content-end me-3 mt-4">
        <div class="d-flex col-5">
          <h3>총</h3>
        </div>
        <div class="d-flex col-7 justify-content-end">
          <h3 class="mx-2 fw-bold">{{ shoppingbagCount }}</h3>
          <h3>개 상품</h3>
        </div>
      </div>
      <div class="d-flex justify-content-end me-3">
        <div class="d-flex col-5">
          <h5>배송비</h5>
        </div>
        <div class="d-flex col-7 justify-content-end">
          <h5 class="mx-2 fw-bold">0</h5>
          <h5>원</h5>
        </div>
      </div>
      <div class="d-flex me-3">
        <div class="d-flex col-5">
          <h5>합계</h5>
        </div>
        <div class="d-flex col-7 justify-content-end">
          <h5 class="mx-2 fw-bold">{{ shoppingbagTotal }}</h5>
          <h5>원</h5>
        </div>
      </div>
      <div class="me-3 my-2 d-flex justify-content-end text-muted">
        <h6 class="fw-bold me-2">{{ shoppingbagTotal * 0.05 }}</h6>
        <h6>Point 적립</h6>
      </div>
    </div>
    <hr>
    <h3 class="my-4 fw-bold">결제 수단</h3>
    <div class="d-flex">
      <paymentListItem v-for="(pm, pmidx) in paymentList" :key="`pm + ${pmidx}`" :pm="pm" :pmidx="pmidx"/>
    </div>
    <div class="d-flex ms-5 my-4">
      <img src="@/assets/creditcard.png" style="width: 250px;" alt="">
    </div>
    <hr>
    <div class="form-check">
      <input class="form-check-input" @click="checkAgreement" type="checkbox" value="" id="agreement" style="width: 20px; height: 20px;">
      <label class="form-check-label" for="agreement">
        <h5 class="ms-1 mt-1 fw-bold">구매자 동의</h5>
      </label>
    </div>
    <div class="text-muted my-2 ms-2">
      <h6>주문할 상품의 상품명, 가격 배송정보 등</h6>
      <h6>판매조건을 확인하였으며, 구매진행에 동의합니다.</h6>
      <h6>(전자상거래법 제8조 2항)</h6>
    </div>
    <div class="d-flex justify-content-center my-4">
      <button v-if="agreement" class="btn btn-dark col-10 mt-3">결제하기</button>
      <button v-if="!agreement" class="btn btn-dark col-10 mt-3" disabled>결제하기</button>
    </div>

  </div>
</template>

<script>
import orderListItem from '@/components/order/orderListItem'
import couponListItem from '@/components/order/couponListItem'
import paymentListItem from '@/components/order/paymentListItem'

export default {
  name: 'orderList',
  components: {
    orderListItem,
    couponListItem,
    paymentListItem,
  },
  props: {
    userInfo: {
      type: Array
    },
    couponList: {
      type: Array
    },
    paymentList: {
      type: Array
    },
  },
  data: function() {
    return {
      orderUserInfo: {
        "oid": '',
        "ozipcode": this.userInfo[0].mzipcode,
        "oreceiver": '',
        "ophone": this.userInfo[0].mphone,
        "orphone": this.userInfo[0].mphone,
        "otel": '',
        "omemo": '문앞에 두고 가주세요 :)',
        "oemail": this.userInfo[0].memail,
        "ousedmileage": 0,
        "obeforeprice": 0,
        "oafterprice": 0,
        "ostatus": '',
        "mid": this.userInfo[0].mid,
        "pmcode": '',
        "odate": '',
        "oitems": {},
      },
      agreement: false,
    }
  },
  methods: {
    checkAgreement: function() {
      this.agreement = !this.agreement
    },
  },
  computed: {
    getTempOrderInfo: function() {
      return this.$store.state.tempOrderInfo
    },
    getShoppingbag: function() {
      return this.$store.state.shoppingbag
    },
    shoppingbagCount: function() {
     return this.getShoppingbag.length
    },
    shoppingbagTotal: function() {
      return this.$store.state.shoppingbagTotal
    },
  },
}
</script>

<style scoped>
.btn:focus {
  box-shadow: 0px 0px 0px transparent;
  border-color: #a0a0a0;
}
</style>