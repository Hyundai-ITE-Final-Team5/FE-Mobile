<template>
  <div id="orderList">
    <orderListItem v-for="(orderitem, oidx) in getTempOrderListInfo" :key="oidx" :oidx="oidx" :orderitem="orderitem"/>
    <hr class="mb-5">
    <h3 class="my-4 fw-bold">주문자 정보</h3>
    <!-- 아이디 -->
    <div class="d-flex ms-2 my-3">
      <div class="col-3">
        <h5>•아이디</h5>
      </div>
      <h6 class="ms-2">|&nbsp;&nbsp;{{ userInfo[0].mid }}</h6>
    </div>
    <!-- 주문자 이름 -->
    <div class="d-flex ms-2 my-3">
      <div class="col-3">
        <h5>•이름</h5>
      </div>
      <h6 class="ms-2">|&nbsp;&nbsp;{{ userInfo[0].mname }}</h6>
    </div>
    <!-- 주문자 휴대폰 -->
    <div class="d-flex ms-2 my-3">
      <div class="col-3">
        <h5>•휴대폰</h5>
      </div>
      <h6 class="ms-2">|&nbsp;&nbsp;{{ userInfo[0].mphone }}</h6>
    </div>
    <!-- 주문자 전화번호 -->
    <div class="d-flex ms-2 my-3">
      <div class="col-3">
        <h5>•전화번호</h5>
      </div>
      <h6 class="ms-2">|&nbsp;&nbsp;{{ userInfo[0].mtel }}</h6>
    </div>
    <!-- 주문자 이메일 -->
    <div class="d-flex ms-2 my-3">
      <div class="col-3">
        <h5>•이메일</h5>
      </div>
      <h6 class="ms-2">|&nbsp;&nbsp;{{ userInfo[0].memail }}</h6>
    </div>
    <hr class="my-5">
    <div class="d-flex justify-content-between me-1">
      <h3 class="mt-2 fw-bold">수령인 정보</h3>
      <div class="form-check mt-2">
        <input class="form-check-input" type="checkbox" value="" id="checkReceiverInfo" @click="putReceiverInfo">
        <label class="form-check-label" for="flexCheckDefault">
          주문자정보와 동일
        </label>
      </div>
    </div>
    <!-- 수령인 이름 -->
    <div class="d-flex ms-2">
      <div class="col-3">
        <h5 class="mt-4">이름</h5>
      </div>
      <div class="form mb-3">
        <input v-model="orderUserInfo.oreceiver" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;">
      </div>
    </div>
    <!-- 수령인 휴대폰 -->
    <div class="d-flex ms-2">
      <div class="col-3">
        <h5 class="mt-4">휴대폰</h5>
      </div>
      <div class="form mb-3">
        <input v-model="orderUserInfo.ophone" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;" value="">
      </div>
    </div>
    <!-- 수령인 전화번호 -->
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
    <hr class="my-5">
    <div class="d-flex justify-content-between">
      <h3 class="my-3 fw-bold">배송지 정보</h3>
      <div class="form-check my-3 me-1">
        <input class="form-check-input" type="checkbox" value="" id="checkDeliveryInfo" @click="putDeliveryInfo">
        <label class="form-check-label" for="flexCheckDefault">
          기본배송지 선택
        </label>
      </div>
    </div>
    <!-- 수령인 우편번호 -->
    <div class="d-flex ms-2">
      <div class="col-3">
        <h5 class="mt-4">우편번호</h5>
      </div>
      <div class="form mb-3">
        <input v-model="orderUserInfo.ozipcode" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 25vw;" value="">
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
        <input v-model="orderUserInfo.oaddress1" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;" value="">
      </div>
    </div>
    <!-- 수령인 주소2 -->
    <div class="d-flex ms-2">
      <div class="col-3">
        <h5 class="mt-4">상세주소</h5>
      </div>
      <div class="form mb-3">
        <input v-model="orderUserInfo.oaddress2" type="text" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;" value="">
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
    <hr class="my-5">
    <h3 class="mt-4 fw-bold">Point</h3>
    <div class="d-flex ms-2">
      <div class="form mb-3">
        <input v-model="orderUserInfo.ousedmileage" type="number" class="form-control border-2 border-top-0 border-start-0 border-end-0" 
              style="height: 7vh; width: 65vw;">
      </div>
      <div>
        <button class="btn btn-dark ms-2 mt-3" @click="useMileageAll">전액사용</button>
      </div>
    </div>
    <div class="d-flex">
      <h6 class="ms-2">보유 마일리지</h6>
      <h6 class="ms-2 fw-bold">{{ userInfo[0].mmileage }}</h6>
      <h6 class="ms-2">Point</h6>
    </div>
    <hr class="my-5">
    <h3 class="my-4 fw-bold">Coupon</h3>
    <div class="d-flex mb-4">
      <select v-model="orderUserInfo.cpid" class="select form-select border-2 border-top-0 border-start-0 border-end-0" aria-label="Default select example" style="width: 250px;">
        <option value="">-</option>
        <option v-for="(coupon, cpidx) in availableCouponList" :key="cpidx" :coupon="coupon" :cpidx="cpidx">{{ coupon.cpid }}</option>
      </select>
      <div>
        <h5 class="mt-2 ms-3">쿠폰목록</h5>
      </div>
    </div>
    <h6 v-if="getUsedCouponName != 0" class="ms-2 fw-bold">{{ getUsedCouponName }} - {{ getUsedCoupon }} %</h6>
    <h6 class="ms-2 mt-3 text-muted">* 쿠폰은 중복으로 사용하실 수 없습니다.</h6>
    <hr class="my-5">
    <h3 class="my-4 fw-bold">최종 결제금액</h3>
    <div class="ms-4">
      <div class="d-flex justify-content-end me-3 mt-4">
        <div class="d-flex col-5">
          <h3>총</h3>
        </div>
        <div class="d-flex col-7 justify-content-end">
          <h3 class="mx-2 fw-bold">{{ getTempOrderListInfoCount }}</h3>
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
      <div class="mb-3 me-3 text-end">
        <h6 v-if="orderUserInfo.ousedmileage != 0" style="color: #e4beb3;">{{ orderUserInfo.ousedmileage }}  Point 적용</h6>
        <h6 v-if="getUsedCoupon > 0" style="color: #e4beb3;">{{ orderUserInfo.cpid  }} - {{ getUsedCoupon }} % 쿠폰할인</h6>
      </div>
      <div class="d-flex me-3">
        <div class="d-flex col-5">
          <h5>합계</h5>
        </div>
        <div class="d-flex col-7 justify-content-end">
          <h5 class="mx-2 fw-bold">{{ finalPrice }}</h5>
          <h5>원</h5>
        </div>
      </div>
      <div class="me-3 my-2 d-flex justify-content-end text-muted">
        <h6 class="fw-bold me-2">{{ (getTempOrderListTotal * (1 - getUsedCoupon / 100) - orderUserInfo.ousedmileage) * 0.05 }}</h6>
        <h6>Point 적립 (5%)</h6>
      </div>
    </div>
    <hr>
    <h3 class="my-4 fw-bold">결제 수단</h3>
    <div class="d-flex justify-content-center">
      <paymentListItem v-for="(pm, pmidx) in paymentList" :key="`pm + ${pmidx}`" :pm="pm" :pmidx="pmidx" @selectpm="selectpm"/>
    </div>
    <div class="d-flex ms-5 my-4">
      <img src="@/assets/creditcard.png" style="width: 250px;" alt="">
    </div>
    <hr class="my-5">
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
      <button v-if="!agreement" class="btn btn-lg btn-dark col-12 mt-3" disabled>결제하기</button>
      <button v-else-if="orderUserInfo.ozipcode == '' || orderUserInfo.address1 == '' || orderUserInfo.address2 == ''" 
              class="btn btn-lg btn-dark col-12 mt-3" data-bs-toggle="modal" data-bs-target="#addressAlert">결제하기</button>
      <button v-else-if="orderUserInfo.pmcode == ''"
              class="btn btn-lg btn-dark col-12 mt-3" data-bs-toggle="modal" data-bs-target="#pmcodeAlert">결제하기</button>
      <button v-else
              class="btn btn-lg btn-dark col-12 mt-3" @click="pay">결제하기</button>
    </div>
    <!-- 배송정보 입력요청 Modal -->
    <div class="modal fade" style="margin-top: 30vh;" id="addressAlert" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title d-flex" id="exampleModalLabel">
              <img src="@/assets/problem.png" style="height: 24px;" alt="">
              <h5 class="mx-2">알림</h5>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            배송지 정보를 입력해주세요.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-outline-dark col-3" data-bs-dismiss="modal">닫기</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 결제수단 입력요청 Modal -->
    <div class="modal fade" style="margin-top: 30vh;" id="pmcodeAlert" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title d-flex" id="exampleModalLabel">
              <img src="@/assets/problem.png" style="height: 24px;" alt="">
              <h5 class="mx-2">알림</h5>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            결제수단을 선택해주세요.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-outline-dark col-3" data-bs-dismiss="modal">닫기</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import orderListItem from '@/components/order/orderListItem'
import paymentListItem from '@/components/order/paymentListItem'

export default {
  name: 'orderList',
  components: {
    orderListItem,
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
        // 비워서보낼 정보
        "oid": '',
        "ozipcode": '',
        "oaddress1": '',
        "oaddress2": '',
        "oreceiver": '',
        "ophone": '',
        "orphone": '',
        "otel": '',
        "omemo": '문앞에 두고 가주세요 :)',
        "oemail": '',
        "ousedmileage": 0,
        "obeforeprice": 0,
        "oafterprice": 0,
        // 비워서보낼 정보
        "ostatus": '',
        "mid": this.userInfo[0].mid,
        "pmcode": '',
        // 비워서보낼 정보
        "odate": '',
        "cpid": '',
        "items": [],
      },
      agreement: false,
    }
  },
  methods: {
    checkAgreement: function() {
      this.agreement = !this.agreement
    },
    pay: function() {
      // 결제시간 기록
      this.orderUserInfo.odate = this.getDateTime
      // 쿠폰적용
      if (this.orderUserInfo.cpid != '') this.orderUserInfo.oafterprice *= (1 - this.getUsedCoupon / 100)
      // 포인트적용
      this.orderUserInfo.oafterprice -= this.orderUserInfo.ousedmileage
      this.$store.dispatch('pay', this.orderUserInfo)
      this.$router.replace('/ordercomplete')
    },
    useMileageAll: function() {
      this.orderUserInfo.ousedmileage = this.userInfo[0].mmileage
    },
    selectpm: function(pmcode) {
      this.orderUserInfo.pmcode = pmcode
    },
    putReceiverInfo: function() {
      if (this.orderUserInfo.oreceiver == this.userInfo[0].mname) {
        this.orderUserInfo.oreceiver = ''
        this.orderUserInfo.ophone = ''
        this.orderUserInfo.otel = ''
        this.orderUserInfo.oemail = ''
      } else {
        this.orderUserInfo.oreceiver = this.userInfo[0].mname
        this.orderUserInfo.ophone = this.userInfo[0].mphone
        this.orderUserInfo.otel = this.userInfo[0].mtel
        this.orderUserInfo.oemail = this.userInfo[0].memail
      }
    },
    putDeliveryInfo: function() {
      if (this.orderUserInfo.ozipcode == this.userInfo[0].mzipcode &&
          this.orderUserInfo.oaddress1 == this.userInfo[0].maddress1 &&
          this.orderUserInfo.oaddress2 == this.userInfo[0].maddress2) {
        this.orderUserInfo.ozipcode = ''
        this.orderUserInfo.oaddress1 = ''
        this.orderUserInfo.oaddress2 = ''
      } else {
        this.orderUserInfo.ozipcode = this.userInfo[0].mzipcode
        this.orderUserInfo.oaddress1 = this.userInfo[0].maddress1
        this.orderUserInfo.oaddress2 = this.userInfo[0].maddress2
      }
    },
  },
  computed: {
    getTempOrderInfo: function() {
      return this.$store.state.tempOrderInfo
    },
    getTempOrderListInfo: function() {
      return this.$store.state.tempOrderListInfo
    },
    getTempOrderListTotal: function() {
      return this.$store.state.tempOrderListTotal
    },
    getTempOrderListInfoCount: function() {
      return this.$store.state.tempOrderListInfo.length
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
    getUsedCoupon: function() {
      let discount = 0
      for (let i = 0; i < this.couponList.length; i++) {
        if (this.couponList[i].cpid == this.orderUserInfo.cpid) {
          discount = this.couponList[i].ediscount
          return discount
        }
        
      }
      return 0
    },
    getUsedCouponName: function() {
      let name = ''
      for (let i = 0; i < this.couponList.length; i++) {
        if (this.couponList[i].cpid == this.orderUserInfo.cpid) {
          name = this.couponList[i].ecoupontitle
          return name
        }
      }
      return ''
    },
    getDateTime: function() {
      let time = new Date()
      return time
    },
    availableCouponList: function() {
      let temp = []
      for (let i = 0; i < this.couponList.length; i++) {
        if (this.couponList[i].cpstatus == 1)
        temp.push(this.couponList[i])
      }
      return temp
    },
    finalPrice: function() {
      return (this.getTempOrderListTotal * (1 - this.getUsedCoupon / 100) - this.orderUserInfo.ousedmileage).toLocaleString("ko-KR")
    },
  },
  mounted: function() {
    this.orderUserInfo.obeforeprice = this.shoppingbagTotal
    this.orderUserInfo.oafterprice = this.shoppingbagTotal
    this.orderUserInfo.items = this.getTempOrderInfo
  },
}
</script>

<style scoped>
.btn:focus {
  box-shadow: 0px 0px 0px transparent;
  border-color: #a0a0a0;
}
.form-select:focus {
  box-shadow: 0px 0px 0px transparent;
  border-color: #a0a0a0;
}
input:disabled {
  background-color: transparent;
}
/* #orderList {
  overflow-x: hidden;
} */
</style>