<template>
  <div>
    <div class="d-flex mb-4 ms-2">
      <img src="@/assets/shoppingbag.png" alt="" class="me-1" style="width: 30px; height: 32px;">
      <h5 class="pt-2 mx-1 fw-bold">{{ shoppingbagCount }}</h5>
      <h5 class="pt-2 text-muted">개 상품이 있습니다.</h5>
    </div>
    <div v-if="shoppingbagCount > 0" class="form-check ms-2">
      <input class="form-check-input" type="checkbox" value="" id="checkAll" style="width: 18px; height: 18px;" checked>
      <h5>전체 선택</h5>
    </div>
    <h2 class="text-center text-muted" style="margin-top: 35vh;" v-if="shoppingbagCount == 0">쇼핑백에 상품이 없습니다.</h2>
    <shoppingbagListItem v-for="(item, idx) in getShoppingbag" :key="idx" :item="item" :idx="idx"/>
    <div class="mt-3" v-if="shoppingbagCount > 0">
      <div class="my-4" style="border: 0.5rem solid; border-color: #e9e9e9; width: 375px;"></div>
      <div class="ms-4">
        <div class="d-flex justify-content-end me-3 mt-4 mb-1">
          <div class="d-flex col-7">
            <h3>총</h3>
          </div>
          <div class="d-flex col-5 justify-content-end">
            <h3 class="mx-2 fw-bold" style="color: gray;">{{ shoppingbagCount }}</h3>
            <h3>개 상품</h3>
          </div>
        </div>
        <div class="d-flex justify-content-center me-3">
          <div class="d-flex col-7">
            <h5>배송비</h5>
          </div>
          <div class="d-flex col-5 justify-content-end">
            <h5 class="mx-2 fw-bold" style="color: gray;">0</h5>
            <h5>원</h5>
          </div>
        </div>
        <hr>
        <div class="d-flex me-3">
          <div class="d-flex col-7">
            <h5>합계</h5>
          </div>
          <div class="d-flex col-5 justify-content-end">
            <h5 class="mx-2 fw-bold" style="color: gray;">{{ shoppingbagTotal }}</h5>
            <h5>원</h5>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center ms-3 me-2 mt-5">
        <button @click="makeOrder" class="btn btn-lg btn-dark col-12">주문하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import shoppingbagListItem from '@/components/shoppingbag/shoppingbagListItem'

export default {
  name: 'shoppingbagList',
  data: function() {
    return {
      order: {
        "psid": '',
        "oid": '',
        "oicount": 0,
        "oitotalprice": 0,
      },
    }
  },
  components: {
    shoppingbagListItem,
  },
  created: function() {
    this.$store.dispatch('getShoppingbagList')
    this.$store.dispatch('getUserInfo')
  },
  computed: {
    getShoppingbag: function() {
      return this.$store.state.shoppingbag
    },
    shoppingbagCount: function() {
     return this.getShoppingbag.length
    },
    shoppingbagTotal: function() {
      return this.$store.state.shoppingbagTotal.toLocaleString("ko-KR")
    },
  },
  methods: {
    makeOrder: function() {
      const tempList = []
      for (let i = 0; i < this.shoppingbagCount; i++) {
        let tempObject = {
          "psid": '',
          "oid": '',
          "oicount": 0,
          "oitotalprice": 0,
        }
        tempObject.psid = this.getShoppingbag[i].psid
        tempObject.oicount = this.getShoppingbag[i].pquantity
        tempObject.oitotalprice = this.getShoppingbag[i].pquantity * this.getShoppingbag[i].pcprice
        tempList.push(tempObject)
      }
      this.$store.dispatch('makeOrder', tempList)
      this.$store.dispatch('makeTempOrder', this.getShoppingbag)
      this.$router.push('/order')
    },
  },
}
</script>

<style scoped>
hr {
  background-color: black;
}
</style>