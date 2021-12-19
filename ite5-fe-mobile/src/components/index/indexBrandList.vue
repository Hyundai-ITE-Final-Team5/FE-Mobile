<template>
  <div>
    <hr class="mt-5">
    <h1 class="mt-5 mx-2">SEARCH</h1>
    <form class="d-flex my-3 mx-2">
      <input v-model="searchInput" @input="submitAutoComplete" class="form-control me-2">
      <button class="btn" type="submit" @click="getBrandList">
        <router-link to="/product" class="text-decoration-none text-dark">
          <img src="@/assets/search.png" alt="" style="width: 24px; border: #ced4da; opacity: 0.7;">
        </router-link>
      </button>
    </form> 
    <div class="autocomplete disabled ms-3 mt-4">
      <indexSearchListItem v-for="(res, ridx) in result" :key="ridx" :res="res" :ridx="ridx" @putSearchInput="putDataSearchInput"/>
    </div>  
    <hr class="mt-5"> 
    <div class="d-flex justify-content-between mx-2" @click="showBrand">
      <h1 class="mt-5 me-5">BRAND</h1>
      <img src="@/assets/downSmall.png" alt="" class="btn mt-5" style="opacity: 0.4; height: 33px;">
    </div>
    <div id="brandIndex" class="mx-2" style="display: none;">
      <indexBrandListItem v-for="(b, idx) in brandIndex" :key="idx" :b="b" :idx="idx" />
    </div>
  </div>
</template>

<script>
import indexBrandListItem from '@/components/index/indexBrandListItem.vue'
import indexSearchListItem from '@/components/index/indexSearchListItem.vue'


export default {
  name: 'indexBrandList',
  components: {
    indexBrandListItem,
    indexSearchListItem,
  },
  data() {
    return {
      searchInput: null,
      result: null,
      selectedbno: null,
    };
  },  
  created: function() {
    this.$store.dispatch('getBrandIndex')
  },
  methods: {
    getBrandList() {
      this.$store.dispatch('resetProductList')
      this.$store.dispatch('getBrandList', this.selectedbno)
      this.$store.dispatch('changeBrandCallKey', this.selectedbno)
    },  
    putDataSearchInput(res) {
      this.searchInput = res
      for (let i = 0; i < this.brandIndex.length; i++) {
        if (this.brandIndex[i].bname == res) {
          this.selectedbno = this.brandIndex[i].bno
          break;
        }
      }      
    },  
    submitAutoComplete() {
      const autocomplete = document.querySelector(".autocomplete");
      const temp = []
      for (let i = 0; i < this.brandIndex.length; i++) {
        temp.push(this.brandIndex[i].bname)
      }
      if (this.searchInput) {
        autocomplete.classList.remove("disabled");
        this.result = temp.filter((brand) => {
          return brand.match(new RegExp("^" + this.searchInput, "i"));
        });
      } else {
        autocomplete.classList.add("disabled");
      }        
    
    },    
    showBrand() {
      const brandIndexId = document.getElementById('brandIndex')
      if (brandIndexId.style.display == 'none') brandIndexId.style.display = 'block'
      else brandIndexId.style.display = 'none'
    },   
  },
  computed: {
    brandIndex: function() {
      return this.$store.getters.brandIndex
    },
  },
}
</script>

<style scoped>
.disabled {
  display: none;
}
</style>