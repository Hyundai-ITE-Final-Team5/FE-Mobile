<template>
  <div>
    <h4 v-if="size.psstock > 0" class="me-4" style="" :id="cpidx + 'textSizeSelect_' + sidx" @click="selectSize">{{ size.psize }}</h4>
    <h4 v-if="size.psstock == 0" class="me-4 text-muted" style="text-decoration: line-through;">{{ size.psize }}</h4>
    <div class="mb-2 col-7" style="border: solid; border-color: white;" :id="cpidx + 'sizeSelect_' + sidx"></div>
  </div>
</template>

<script>
export default {
  name: 'detailSizeListItem',
  props: {
    size: {
      type: Object
    },
    cpidx: {
      type: Number
    },
    sidx: {
      type: Number
    },
  },
  methods: {
    selectSize: function() {
      const sizeSelectId = document.getElementById(this.cpidx + 'sizeSelect_' + this.sidx)
      const textSizeSelectId = document.getElementById(this.cpidx + 'textSizeSelect_' + this.sidx)
      if (sizeSelectId.style.borderColor == 'white') {
        sizeSelectId.style.borderColor = '#d3d3d3'
        textSizeSelectId.style.fontWeight = 'bold'
      } else if (sizeSelectId.style.borderColor == 'rgb(211, 211, 211)') {
        sizeSelectId.style.borderColor = 'white'
        textSizeSelectId.style.fontWeight = ''
      }
      this.$emit('selectSize', this.size.psid)
    },
  },
}
</script>

<style>

</style>