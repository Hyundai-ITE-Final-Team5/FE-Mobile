<template>
  <div>
    <div class="d-flex" @click="selectColor">
      <img :src="colorChip.pcchipimg" alt="" class="" style="height: 24px;">
      <h5 class="ms-2 me-3" :id="'textSelect_' + cpidx">{{ colorChip.pccolorcode }}</h5>
    </div>
    <div class="mb-2 col-10" style="border: solid; border-color: white;" :id="'colorSelect_' + cpidx"></div>
    <div :id="'sizeInfo_' + cpidx" style="display: none;">
    <div class="d-flex mt-3">
      <detailSizeListItem v-for="(size, sidx) in colorChip.sizeinfo" :key="sidx" 
                          :size="size" :sidx="sidx" :cpidx="cpidx" @selectSize="sendpsid"/>
    </div>
    </div>
  </div>
</template>

<script>
import detailSizeListItem from '@/components/detail/detailSizeListItem'

export default {
  name: 'detailColorListItem',
  props: {
    colorChip: {
      type: Object
    },
    cpidx: {
      type: Number
    },
  },
  components: {
    detailSizeListItem,
  },
  methods: {
    selectColor: function() {
      const colorSelectId = document.getElementById('colorSelect_' + this.cpidx)
      const textSelectId = document.getElementById('textSelect_' + this.cpidx)
      const sizeInfoId = document.getElementById('sizeInfo_' + this.cpidx)
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
      this.$emit('sendpsid', psid)
    },
  },
}
</script>

<style scoped>

</style>