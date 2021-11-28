<template>
  <div>
    <div class="d-flex">
      <shoppingbagColorListItem v-for="(color, cidx) in item.colornsize.colorList" 
                                :key="cidx" :color="color" :idx="idx" :cidx="cidx" @newpsid="sendNewpsid"/>
    </div>
  </div>
</template>

<script>
import shoppingbagColorListItem from '@/components/shoppingbag/shoppingbagColorListItem'

export default {
  name: 'shoppingbagColorList',
  props: {
    item: {
      type: Object
    },
    idx: {
      type: Number
    },
  },
  components: {
    shoppingbagColorListItem,
  },
  methods: {
    sendNewpsid: function(psid) {
      this.$emit('changepsid', psid)
    }
  },
}
</script>

<style>

</style>