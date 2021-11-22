<template>
  <div>
    <div class="text-center ps-0 my-5">
      <img :src="product.img1" 
            class="card-img-top upper-image" alt="item">
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ product.brand }}</h5>
        <h6 class="card-text my-2">{{ product.name }}</h6>
        <h6 class="card-text">₩ {{ product.price }}</h6>
        <div>
          <img :src="product.colorChipImg[0]" alt="" style="width: 24px;" class="mx-2"> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: {
    product: {
      type: Object,
    },
    idx: {
      type: Number,
    },
  }
}
</script>

<style scoped>

</style>