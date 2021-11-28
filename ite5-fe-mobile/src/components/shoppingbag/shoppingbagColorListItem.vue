<template>
  <div>
    <div class="d-flex">
      <img :src="color.pcchipimg" alt="" class="" style="height: 24px;">
      <h5 class="ms-2 me-3" :id="idx + '_textSelect_' + cidx" @click="selectColor">{{ color.pccolorcode }}</h5>
    </div>
    <div class="mb-2 col-10" style="border: solid; border-color: white;" :id="idx + '_colorSelect_' + cidx"></div>
    <div :id="idx + '_sizeInfo_' + cidx" style="display: none;">
      <div class="d-flex">
        <shoppingbagSizeListItem v-for="(size, sidx) in color.sizeList" 
                                 :key="sidx" :size="size" :idx="idx" :sidx="sidx" :cidx="cidx" @selectSize="sendpsid"/>
      </div>
    </div>
  </div>
</template>

<script>
import shoppingbagSizeListItem from '@/components/shoppingbag/shoppingbagSizeListItem'
export default {
  name: 'shoppingbagColorListItem',
  components: {
    shoppingbagSizeListItem
  },
  props: {
    color: {
      type: Object
    },
    idx: {
      type: Number
    },
    cidx: {
      type: Number
    },
  },
  methods: {
    selectColor: function() {
      const colorSelectId = document.getElementById(this.idx + '_colorSelect_' + this.cidx)
      const textSelectId = document.getElementById(this.idx + '_textSelect_' + this.cidx)
      const sizeInfoId = document.getElementById(this.idx + '_sizeInfo_' + this.cidx)
      if (colorSelectId.style.borderColor == 'white') {
        colorSelectId.style.borderColor = '#d3d3d3'
        textSelectId.style.fontWeight = 'bold'
        sizeInfoId.style.display = 'block'
      } else if (colorSelectId.style.borderColor == 'rgb(211, 211, 211)') {
        colorSelectId.style.borderColor = 'white'
        textSelectId.style.fontWeight = ''
        sizeInfoId.style.display = 'none'
      }
    },
    sendpsid: function(psid) {
      this.$emit('newpsid', psid)
    },
  },
}
</script>

<style>

</style>