import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    category: 'AAAAA',
    products: [
      {
        name: '벨티드 니트 재킷',
        img1: 'http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KJC210W_OW_W01.jpg/dims/resize/684x1032/',
        img2: 'http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KJC210W_OW_W02.jpg/dims/resize/684x1032/',
        img3: 'http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KJC210W_OW_W03.jpg/dims/resize/684x1032/',
        colorChipImg: [
          'http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KJC210W_OW_C01.jpg',
        ],
        brand: 'the CASHMERE',
        price: 595000,
      },
    ],
    user: {
      userName: '',
      like: [],
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
