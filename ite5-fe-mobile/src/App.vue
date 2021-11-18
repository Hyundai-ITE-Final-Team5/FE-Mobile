<template>
  <div id="app">
    <div class="mb-5" id="nav">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <h2><a href="/" class="text-decoration-none">한섬</a></h2>
          <a href="/shoppingbag">bag</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/mypage">MyPage</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="/product">AAAAA</a></li>
                  <li><a class="dropdown-item" href="#">BBBBB</a></li>
                  <!-- <li><hr class="dropdown-divider"></li> -->
                  <li><a class="dropdown-item" href="#">CCCCC</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    <router-view/>
    <div class="fixed-bottom p-2">
      <button class="btn btn-dark mb-3" @click="showFooterNavBar" id="footerNavBarBtn">></button>
      <div id="footerNavBar" style="visibility: hidden;">
        <div class="d-flex justify-content-between" id="nav">
          <router-link to="/" class="btn btn-outline-dark col-3">Home</router-link>
          <router-link to="/about" class="btn btn-outline-dark col-3">About</router-link>
          <router-link to="/like" class="btn btn-outline-dark col-3">Like</router-link>
          <router-link to="/mypage" class="btn btn-outline-dark col-3">MyPage</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      showFooterNavBar: function() {
        const footerNavBarId = document.getElementById('footerNavBar')
        const footerNavBarBtnId = document.getElementById('footerNavBarBtn')
        if (footerNavBarId.style.visibility == 'hidden') footerNavBarId.style.visibility = 'visible'
        else footerNavBarId.style.visibility = 'hidden'
        if (footerNavBarId.style.visibility == 'hidden') {
          footerNavBarBtnId.style.backgroundColor = 'black'
          footerNavBarBtnId.style.color = 'white'
        } else {
          footerNavBarBtnId.style.backgroundColor = 'white'
          footerNavBarBtnId.style.color = 'black'
        }

      }
    },
  }
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
/* 스크롤바 숨기기 구현할 예정 */
#app::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: green;
}
</style>
