<template>
  <div>
    {{ itemInfo }}
    <div class="d-flex">
      <div class="col-4 ps-2">
        <img :src="itemInfo.pcimg1" alt="" style="width: 105px;">
      </div>
      <div class="col-8 mt-2 ms-2">
        <h5>{{ itemInfo.bname }}</h5>
        <h6>{{ itemInfo.pname }}</h6>
        <h6>{{ itemInfo.pcprice }}<span> 원</span></h6>
        <div class="d-flex mt-4">
          <button class="btn" style="color: #e4beb3; border-color: #e4beb3;">삭제</button>
          <button class="btn mx-2" style="color: gray; border-color: gray;">쇼핑백 담기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shoppingbagListItem',
  props: {
    item: {
      type: Object
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
}
</script>

<style>

</style>