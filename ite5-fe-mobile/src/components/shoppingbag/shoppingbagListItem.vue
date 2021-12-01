<template>
  <div class="my-3">
    <div class="d-flex">
      <div class="col-4 ps-2">
        <img :src="itemInfo.pcimg1" alt="" style="width: 105px;">
      </div>
      <div v-if="itemInfo.psstock > 0" class="col-8 mt-2 ms-2">
        <h5 class="fw-bold">{{ itemInfo.bname }}</h5>
        <h6>{{ itemInfo.pname }}</h6>
        <h6>{{ itemInfo.pcprice }}<span> 원</span></h6>
        <div class="d-flex mt-3">
          <div class="d-flex col-5">
            <h6>COLOR</h6>
            <img :src="itemInfo.pcchipimg" alt="" class="mx-2" style="width: 20px; height: 20px;">
          </div>
          <div class="d-flex col-7">
            <h6>SIZE</h6>
            <h6 class="mx-2 fw-bold">{{ itemInfo.psize }}</h6>
          </div>
        </div>
        <div class="d-flex">
          <div class="d-flex col-5">
            <h6>수량</h6>
            <h6 class="mx-2 fw-bold">{{ itemInfo.pquantity }}</h6>
          </div>
          <div class="d-flex col-7">
            <h6>합계</h6>
            <h6 class="mx-2 fw-bold">{{ itemInfo.pquantity * itemInfo.pcprice }}</h6>
            <h6>원</h6>
          </div>
        </div>
      </div>
      <div v-if="itemInfo.psstock == 0" class="col-8 mt-5">
        <h5 class="text-center">해당 상품이 일시적으로</h5>
        <h5 class="text-center">품절되었습니다.</h5>
      </div>
    </div>
    <div :id="'option_' + idx" style="display: none;" class="mx-3">
      <h5 class="my-3">COLOR / SIZE</h5>
      <shoppingbagColorList :idx="idx" :item="item" @changepsid="getNewpsid"/>
      <div class="d-flex justify-content-between">
        <h5 class="mt-2 me-3">수량</h5>
        <div class="d-flex me-3">
          <h2 class="mt-2" @click="minus">-</h2>
          <div class="form mb-3">
            <input v-model="changeInfo.pquantity" type="text" class="mx-2 text-center form-control border-2 border-top-0 border-bottom-0 border-start-0 border-end-0" 
                  style="font-size: 20px; width: 15vw;">
          </div>
          <h2 class="mt-2" @click="plus">+</h2>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <h5 class="mt-2 me-3">합계</h5>
        <div class="d-flex me-3">
          <div class="form mb-3">
            <input type="text" class="mx-2 text-end form-control border-2 border-top-0 border-bottom-0 border-start-0 border-end-0" 
                  style="font-size: 20px; width: 60vw;" :value="this.changeInfo.pquantity* this.item.pcprice">
          </div>
          <h5 class="mt-2">원</h5>
        </div>
      </div>
      <div class="d-flex justify-content-center my-4">
        <button class="btn btn-dark col-8" @click="changeOption">변경하기</button>
      </div>
    </div>
    <div class="d-flex justify-content-end my-3">
      <button class="btn btn-sm" style="color: #e4beb3; border-color: #e4beb3;" @click="deleteShoppingbag">삭제</button>
      <button @click="showOption" class="btn btn-sm mx-2" style="color: gray; border-color: gray;">옵션</button>
    </div>
  </div>
</template>

<script>
import shoppingbagColorList from '@/components/shoppingbag/shoppingbagColorList'
export default {
  name: 'shoppingbagListItem',
  data: function() {
    return {
      changeInfo: {
        "oldpsid": this.item.psid,
        "newpsid": this.item.psid,
        "pquantity": this.item.pquantity,
      },
    }
  },
  components: {
    shoppingbagColorList,
  },
  props: {
    item: {
      type: Object
    },
    idx: {
      type: Number
    },
  },
  computed: {
    itemInfo: function() {
      return this.item
    },
    decodedJWT: function() {
      return this.$store.getters.decodedToken
    },
  },
  methods: {
    showOption: function() {
      const optionId = document.getElementById('option_' + this.idx)
      if (optionId.style.display == 'none') optionId.style.display = 'block'
      else optionId.style.display = 'none'
    },
    deleteShoppingbag: function() {
      this.$store.dispatch('deleteShoppingbag', this.itemInfo.psid)
    },
    minus: function() {
      if (this.changeInfo.pquantity > 1) this.changeInfo.pquantity--
    },
    plus: function() {
      this.changeInfo.pquantity++
    },
    getNewpsid: function(psid) {
      this.changeInfo.newpsid = psid
    },
    changeOption: function() {
      this.$store.dispatch('changeOption', this.changeInfo)
      this.changeInfo.oldpsid = this.changeInfo.newpsid
    },
  },
}
</script>

<style>

</style>