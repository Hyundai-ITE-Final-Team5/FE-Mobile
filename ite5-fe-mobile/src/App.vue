<template>
  <div id="app">
    <div class="mb-5 fixed-top" id="nav">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <div class="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="border-width: 0;">
            <span class="navbar-toggler-icon"></span>
          </div>
          <h4 class="pt-1"><a href="/" class="text-decoration-none">HANDSOME</a></h4>
          <div class="d-flex">
            <a href="/shoppingbag"><img src="@/assets/shoppingbag.png" alt=""></a>
            <div style="font-size: 1em; padding-top: 4px;">(0)</div>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-3">
              <li class="nav-item">
                <div @click="closeMenuHome" class="text-decoration-none fs-4" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">Home</div>
              </li>
              <li class="nav-item">
                <div @click="closeMenuIndex" class="text-decoration-none fs-4" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">Index</div>
              </li>
              <li class="nav-item">
                <div @click="closeMenuMyPage" class="text-decoration-none fs-4" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">MyPage</div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle fs-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="/product" @click="categoryAAAAA">AAAAA</a></li>
                  <!-- <li><a class="dropdown-item" href="#">BBBBB</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">CCCCC</a></li> -->
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" aria-label="Search">
              <button class="btn" type="submit"><img src="@/assets/search.png" alt="" style="width: 24px;"></button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    <router-view style="margin-top: 70px;"/>
    <div class="fixed-bottom ps-2 pe-2" id="footerNav">
      <button class="btn mb-3" style="color: white;" @click="showFooterNavBar" id="footerNavBarBtn">
        <img src="@/assets/up.png" alt="" id="footerNavBarBtnImg" style="width: 20px; opacity: 0.5;">
      </button>
      <div id="footerNavBar" style="background-color: white;">
        <div class="d-flex justify-content-between" id="nav">
            <router-link to="/" class="col-3 text-center text-decoration-none">
              <img src="@/assets/home.png" alt="" style="width: 24px;" @click="moveMenuStatusBarHome">
              <h6 class="mt-1" @click="moveMenuStatusBarHome">Home</h6>
            </router-link>
            <router-link to="/index" class="col-3 text-center text-decoration-none">
              <img src="@/assets/index.png" alt="" style="width: 24px;" @click="moveMenuStatusBarIndex">
              <h6 class="mt-1" @click="moveMenuStatusBarIndex">Index</h6>
            </router-link>
            <router-link to="/like" class="col-3 text-center text-decoration-none">
              <img src="@/assets/heart.png" alt="" style="width: 24px;" @click="moveMenuStatusBarLike">
              <h6 class="mt-1" @click="moveMenuStatusBarLike">Like</h6>
            </router-link>
            <router-link to="/mypage" class="col-3 text-center text-decoration-none">
              <img src="@/assets/user.png" alt="" style="width: 24px;" @click="moveMenuStatusBarMyPage">
              <h6 class="mt-1" @click="moveMenuStatusBarMyPage">My Page</h6>
            </router-link>
        </div>
        <div class="mb-2 col-3" style="border: solid; border-color: #d3d3d3;" id="menuStatusBar"></div>
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
        const footerNavBarBtnImgId = document.getElementById('footerNavBarBtnImg')
        if (footerNavBarId.classList.contains("showFooterNavBar") == true) {
          footerNavBarId.classList.remove("showFooterNavBar")
          footerNavBarId.classList.add("closeFooterNavBar")
          footerNavBarBtnId.classList.remove("showFooterNavBar")
          footerNavBarBtnId.classList.add("closeFooterNavBar")
          footerNavBarBtnImgId.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAA3NCSVQICAjb4U/gAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkUExURf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMcmPmUAAAALdFJOUwAGISQ/f6KxudjjxauaGAAAAAlwSFlzAAAAvAAAALwBzx0kHgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABcSURBVCjPY6AOUEtCsJlX7zKAc6x2716MkNi9Gy5ltXt7NUwKKFEoDpMCSggwQqVAEgwMUCmQBAMDRAoiAZWCSECluiESIKkdDLMhEiCpnQwegTCHiLYwUAYYGABJ9yeVCRLuYQAAAABJRU5ErkJggg=='
        } else {
          footerNavBarId.classList.remove("closeFooterNavBar")
          footerNavBarId.classList.add("showFooterNavBar")
          footerNavBarBtnId.classList.remove("closeFooterNavBar")
          footerNavBarBtnId.classList.add("showFooterNavBar")
          footerNavBarBtnImgId.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAA3NCSVQICAjb4U/gAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkUExURf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMcmPmUAAAALdFJOUwAGISQ/f6KxudjjxauaGAAAAAlwSFlzAAAAvAAAALwBzx0kHgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABeSURBVCjPY6AYeATCWKItDLO3C0DYjNU7Gbp3F0I44rt3MFjthkgxVu9ezMC8GiIlvnuXAQNUCizBAJWCSECkoBIQKZgEWAomAZaCS4Ck4BIgKYQEA4NaEgMVAAMDAOogJ5Va++q/AAAAAElFTkSuQmCC'
        }
      },
      closeMenuHome: function() {
        this.$router.push('/')
        const menuStatusBarId = document.getElementById('menuStatusBar')
        menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
        menuStatusBarId.classList.add("moveHome")
      },
      closeMenuIndex: function() {
        this.$router.push('/index')
        const menuStatusBarId = document.getElementById('menuStatusBar')
        menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
        menuStatusBarId.classList.add("moveIndex")
      },
      closeMenuMyPage: function() {
        this.$router.push('/mypage')
        const menuStatusBarId = document.getElementById('menuStatusBar')
        menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
        menuStatusBarId.classList.add("moveMyPage")
      },
      moveMenuStatusBarHome: function() {
        const menuStatusBarId = document.getElementById('menuStatusBar')
        menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
        menuStatusBarId.classList.add("moveHome")
      },
      moveMenuStatusBarIndex: function() {
        const menuStatusBarId = document.getElementById('menuStatusBar')
        menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
        menuStatusBarId.classList.add("moveIndex")
      },
      moveMenuStatusBarLike: function() {
        const menuStatusBarId = document.getElementById('menuStatusBar')
        menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
        menuStatusBarId.classList.add("moveLike")
      },
      moveMenuStatusBarMyPage: function() {
        const menuStatusBarId = document.getElementById('menuStatusBar')
        menuStatusBarId.classList.remove("moveHome", "moveIndex", "moveLike", "moveMyPage")
        menuStatusBarId.classList.add("moveMyPage")
      },
      categoryAAAAA: function() {
        const category = 'AAAAA'
        this.$store.dispatch('getCategoryAAAAA', category)
      },
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
  background-color: white;
}

#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  font-weight: bolder;
}
#footerNavBar {
  position: relative;
  top: 14vh;
}
#footerNavBarBtn {
  position: relative;
  top: 10vh;
}
#footerNav {
  padding: 0px;
  background-color: transparent;
}
#footerNav a {
  color: #2c3e50;
  opacity: 0.3;
}

#footerNav a.router-link-exact-active {
  font-weight: bolder;
  opacity: 1;
}

.moveHome {
  transform: translate(0vw, 0vw);
  transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.moveIndex {
  transform: translate(24vw, 0vw);
  transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.moveLike {
  transform: translate(48vw, 0vw);
  transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.moveMyPage {
  transform: translate(72vw, 0vw);
  transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.showFooterNavBar {
  transform: translate(0vw, -30vw);
  transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.closeFooterNavBar {
  transform: translate(0vw, 0vw);
  transition:transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
