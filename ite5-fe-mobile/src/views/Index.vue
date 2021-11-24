<template>
  <div class="ms-2">
    <h1>Index</h1>
    <form class="d-flex my-3 ">
      <input class="form-control me-2">
      <button class="btn" type="submit">
        <img src="@/assets/search.png" alt="" style="width: 24px; border: #ced4da; opacity: 0.7;">
      </button>
    </form>
    <hr class="my-5">
    <div class="mt-5 d-flex justify-content-between" @click="showBrand">
      <h1 class="me-5">BRAND</h1>
      <img src="@/assets/down.png" alt="" class="btn" style="opacity: 0.4;">
    </div>
    <div id="brandIndex" style="display: none;">
      <h4>&nbsp;• the CASHMERE</h4>
      <h4>&nbsp;• FOURM STUDIO</h4>
      <h4>&nbsp;• FOURM MEN'S LOUNGE</h4>
      <h4>&nbsp;• LÄTT</h4>
      <h4>&nbsp;• LANVIN COLLECTION</h4>
      <h4>&nbsp;• LANVIN PARIS</h4>
      <h4>&nbsp;• CLUB MONACO</h4>
      <h4>&nbsp;• MINE</h4>
      <h4>&nbsp;• MUE</h4>
      <h4>&nbsp;• O'2nd</h4>
      <h4>&nbsp;• OBZEE</h4>
      <h4>&nbsp;• 3.1 Phillip Lim</h4>
      <h4>&nbsp;• ROCHAS</h4>
      <h4>&nbsp;• SYSTEM HOMME</h4>
      <h4>&nbsp;• SJSJ</h4>
      <h4>&nbsp;• SYSTEM</h4>
      <h4>&nbsp;• TOM GREYHOUND</h4>
      <h4>&nbsp;• TIME HOMME</h4>
      <h4>&nbsp;• TIME</h4>
      <h4>&nbsp;• FOURM THE STORE</h4>
    </div>
    <div class="mt-4 d-flex justify-content-between" @click="showFemaleDepth2">
      <h1 class="me-5">여성</h1>
      <img src="@/assets/down.png" alt="" class="btn" style="opacity: 0.4;">
    </div>
    <div id="femaleDepth2">
      <h3>&nbsp;• OUTER</h3>
      <h3>&nbsp;• TOP</h3>
      <h3>&nbsp;• DRESS</h3>
      <h3>&nbsp;• DRESS</h3>
    </div>
    <div class="mt-4 d-flex justify-content-between" @click="showMaleDepth2">
      <h1 class="me-5">남성</h1>
      <img src="@/assets/down.png" alt="" class="btn" style="opacity: 0.4;">
    </div>
    <div class="mt-4 d-flex justify-content-between" @click="showKidsDepth2">
      <h1 class="me-5">키즈</h1>
      <img src="@/assets/down.png" alt="" class="btn" style="opacity: 0.4;">
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'Index',
  methods: {
    showBrand() {
      const brandIndexId = document.getElementById('brandIndex')
      if (brandIndexId.style.display == 'none') brandIndexId.style.display = 'block'
      else brandIndexId.style.display = 'none'
    },
    showFemaleDepth2() {
      
    },
    showMaleDepth2() {

    },
    showKidsDepth2() {

    },
  }
}
</script>

<style>

</style>