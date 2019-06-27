<template>
  <div id="app">
    <header>
      <div id="bg"></div>
    </header>

    <div id="main-container" class="container">
      <div class="row">
        <aside class="col col-lg-3">
          <div id="aside-information">
            <div class="container">
              <div class="row">
                <div class="col">
                  <img id="img-porfolio" src="@/assets/logotipo_tinto.png" alt="">
                </div>
                
              </div>
            </div>
          </div>
        </aside>

        <div class="col col-lg-9">
          <div class="container">
            <div id="empty-content" class="row">
              <div class="col">&nbsp;</div>
            </div>
            <div id="header" class="row">
              <div class="col">
                <h2>Monica Muñoz</h2>
                <div id="nav">
                  <router-link class="router-link" to="/">Home</router-link>|
                  <router-link class="router-link" to="/about">About</router-link>|
                  <router-link class="router-link" to="/projects">Projects</router-link>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <transition
                  name="router-anim"
                  enter-active-class="animated fadeInLeft"
                  leave-active-class="animated fadeOutLeft"
                >
                  <router-view/>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/animate.css@3.5.1.css";

#empty-content {
  height: 30px;
}

#header {
  height: 150px;
}

#main-container {
  margin-top: 50px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #ffffff;
    &.router-link-exact-active {
      color: #cf190c;
    }
  }
}

header {
  background-image: url("assets/pexels5.jpg");
  position: absolute;
  z-index: -1;
  right: 0px;
  left: 0px;
  top: 0px;
  height: 210px;
}
aside {
  margin-left: -7%;
}
#aside-information {
  -webkit-box-shadow: -1px 3px 6px 1px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: -1px 3px 6px 1px rgba(0, 0, 0, 0.58);
  box-shadow: -1px 3px 6px 1px rgba(0, 0, 0, 0.58);
  min-height: 650px;
  background-color: white;
}
#img-porfolio{
  max-width: 50%;
  margin-top: 10px
}
h2{
  color: white;
}
</style>
