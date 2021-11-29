<template>
  <div class="me-3">
    <div class="form-check">
      <input class="form-check-input" type="radio" name="pmname" :id="'pmmethod_' + pmidx" @click="selectpm">
      <label v-if="pm.pmmethod == 0" class="form-check-label" :for="'pmmethod_' + pmidx">
        신용카드
      </label>
      <label v-if="pm.pmmethod == 1" class="form-check-label" :for="'pmmethod_' + pmidx">
        계좌이체
      </label>
      <label v-if="pm.pmmethod == 2" class="form-check-label" :for="'pmmethod_' + pmidx">
        무통장 입금
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paymentListItem',
  props: {
    pm: {
      type: Object
    },
    pmidx: {
      type: Number
    },
  },
  methods: {
    selectpm: function() {
      this.$emit('selectpm', this.pm.pmcode)
    },
  },
}
</script>

<style>

</style>