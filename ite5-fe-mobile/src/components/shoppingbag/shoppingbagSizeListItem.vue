<template>
  <div>
    <h4 class="me-3" :id="idx + '_' + cidx + 'seletTextSize_' + sidx" @click="selectSize">{{ size.psize }}</h4>
    <div class="mb-2" style="border: solid; border-color: white;" :id="idx + '_' + cidx + 'selectSize_' + sidx"></div>
    <!-- <h4 class="me-2" :id="idx + '_' + cidx + 'psstock' + sidx">{{ size.psstock }}</h4> -->
  </div>
</template>

<script>
export default {
  name: 'shoppingbagSizeListItem',
  props: {
    size: {
      type: Object
    },
    idx: {
      type: Number
    },
    sidx: {
      type: Number
    },
    cidx: {
      type: Number
    },
  },
  methods: {
    selectSize: function() {
      const selectSizeId = document.getElementById(this.idx + '_' + this.cidx + 'selectSize_' + this.sidx)
      const seletTextSizeId = document.getElementById(this.idx + '_' + this.cidx + 'seletTextSize_' + this.sidx)
      if (selectSizeId.style.borderColor == 'white') {
        selectSizeId.style.borderColor = '#d3d3d3'
        seletTextSizeId.style.fontWeight = 'bold'
      } else if (selectSizeId.style.borderColor == 'rgb(211, 211, 211)') {
        selectSizeId.style.borderColor = 'white'
        seletTextSizeId.style.fontWeight = ''
      }
      this.$emit('selectSize', this.size.psid)
    },
  },
}
</script>

<style>

</style>