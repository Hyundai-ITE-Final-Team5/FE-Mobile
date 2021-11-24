<template>
  <div>
    <div class="ps-0 my-5">
      <router-link to="/productdetail"><img :src="product.img1" 
            class="card-img-top upper-image" alt="item"></router-link>
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h5 class="card-title fw-bold">{{ product.brand }}</h5>
          <div>
            <img src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KJC210W_OW_C01.jpg" alt="" class="me-2" style="height: 24px;">
            <img src="http://newmedia.thehandsome.com/CM/2B/SS/CM2B0KSC104W_PR_C01.jpg" alt="" style="height: 24px;">
          </div>
        </div>
        <h6 class="card-text my-2">{{ product.name }}</h6>
        <h6 class="card-text">{{ product.price }} 원</h6>
        <div class="d-flex justify-content-between">
          <div class="mt-3">
            <img src="@/assets/heart_1.png" @click="changeLikeStatus" alt="" style=" height: 26px;" class="me-3" id="likeBtn">
            <img src="@/assets/shoppingbag.png" alt="" style="opacity: 0.8; height: 22px;">
          </div>
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
  },
  methods: {
    changeLikeStatus: function() {
      const likeBtnId = document.getElementById('likeBtn')
      const unlikeStatusSRC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIVSURBVFiF7dZdaM1hHMDxz2bZvJuXdoWizHAll0xcirTLJZQULnajlFxpc0PcKtemSZRbEVFuxbQYiWYRLrzktZ2Zi99z1tk6L/9jO1f2rafz/M/ze/s/z+/3+z/M8L9Tl2F9NRYjh2f4XUGnEevQgE94hbFqA1uAbgwn5fz4hktoLaLTlta+T9IZxinMz+q8DS+S8n2cQCe6cA0j+ImDBTqH8CuN3vS8DyfxKNl6XiLwCbRgSGzd7hIya/AQo9iPA2l+DyuLyNehA5+T7ZZyAVwWb7ilQqBz8EDkRQ63xNmXY2uS7S0lsCoJXKhgKM8KfMR7LM+oczH5KLZTjoqz2pTRGHGma6uQ35x8HMn/0VCwuFGU2OMqDA5WIUsk5EjyBeoLFufhh0ioWpFLPsZLsjCAITSLplMrlmARXhcLoD/9ttcwgG2TfE2gUWT07RoGcBcflCnZHvzBzho43yUqoLuc0FzRMt9i6TQ6X4Z3eCmSvSztohLuqNzdstAktj6ncocd57DYrhuYNQXn9biabHVVq3w6KV4Xb1Ets9Enw7mXog5nk4Gb4o6QlYXiAzWGMypffMpyXFTGgGx9vxVPk86xqTgupANfxTe9s4zcXnxJY890Oc+zHk/EtvaJtp2nGVfSWr+4VdWEJpwXZfpGZHZXmo/inOkp3YrsEA0rf/EcxPZ/MTSV7KzHhjQfEEk3wwxV8xe3En23HNjnBQAAAABJRU5ErkJggg=='
      const likeStatusSRC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJ+SURBVFiF7ZZNSFRRFIC/857znqZmuxYhgUWotBVat0tq08Ymy1FzEUWLwCJoM1BRSrkxqESmcbSZRChIwmUQ7doVqCVWGC2qhZSOOn/vtHGG8WfGpzmz0bN759x7vu++x7v3wm7s9JB8RQWJNflqDJN9pMyk52/5pIz1xvLOOXHFTuyN1mKmShzMWTsc+CqgmxLQ9vbK+ELyGiLtwIGsUhR4CXLHjgQns+fEvK21oDcRTqPsySr9QKTfSkTvy8jI/IYCsabzdYjxCuFwnoUuicpl63kwABD3tnQo8hCw88yZUtM8VToU+JRTYN7bsd9D4j1QnadROhwR2lAVRQKA4WLO9wSehopI/890oiS76pF4Dypu4ACGKoHlNbiBA1R7SDwAzqUTmTewePbCQUOT04DpstlWI+UktaZsJDQDWeYmycYiwAFM0zQa0w8ZAUflaBHgy1TNsDICAuXF4qtKxRoB1JkplgDCt7UC8KFoAlmsjID1p2pU4FehyQq/rdnK12sEZKw3pkJfoQVE9XH2ebJiA7Hm7LvAVAH5XyyPdmUnVgjIaN+CIXQATgHgKQP1yeBgNKcAgCc88FbQS9tNV+SqJxJ6tzq/7h5uRUJPEG5vH11vlUaCveuVcl5IFCTu9d0Drv8nvtuKDNzIdSnJeyMCWDrj6xSh283YVaGKdpZGQj35BrlqutTcclIcGQKqXMLnEGm1w8EXGw10vapYc1s9jjMMbHRofcRxmuzhwQk3fd1eJLCfPR23bGlApYv1f1NVpc+at4+5hcPmvysAi9624wbOI+DIcuqzI3qxLBx6s9leWxIAUL/fiE9M1wNYdYfGxe8vxOa1Gzsg/gGyWMmwqvxLtgAAAABJRU5ErkJggg=='
      if (likeBtnId.src == unlikeStatusSRC) likeBtnId.src = likeStatusSRC
      else  likeBtnId.src = unlikeStatusSRC
    },
  },
}
</script>

<style scoped>

</style>