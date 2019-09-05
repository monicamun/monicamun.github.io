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
                  <img id="img-porfolio" src="@/assets/moni6.jpg" alt />
                </div>
              </div>
              <div class="row">&nbsp;</div>
              <div class="row">
                <div class="col-lg">
                  <h4>Monica Muñoz</h4>
                  <h4>Front end developer</h4>
                </div>
              </div>
              <div class="row">&nbsp;</div>
              <div class="row">
                <div class="col-lg">
                  <router-link class="link btn btn-light" to="/about">About Me</router-link>
                </div>
              </div>
              <div class="row">
                <div class="col-lg">
                  <router-link class="link btn btn-light" to="/projects">Projects</router-link>
                </div>
              </div>
              <div class="row">
                <div class="col-lg">
                  <a
                    class="link btn btn-light"
                    href="./resume/cv_developer.pdf"
                    target="_blank"
                  >Resume</a>
                </div>
              </div>
              <div class="row">
                <div class="col-lg contact">
                  <a
                    href="https://www.linkedin.com/in/monica-yolanda-mu%C3%B1oz-nava-954b27185/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin fa-2x"></i>
                  </a>
                  <a href="https://github.com/monicamun" target="_blank">
                    <i class="fab fa-github-square fa-2x"></i>
                  </a>
                  <a href="mailto:mymunoznava@gmail.com">
                    <i class="fas fa-envelope-square fa-2x"></i>
                  </a>
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
              <div class="col"></div>
            </div>
            <div class="row">
              <div class="col">
                <transition
                  name="router-anim"
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut"
                >
                  <router-view />
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
  background-image: url("assets/vialactea.jpg");
  position: absolute;
  background-repeat: no-repeat;
  background-position-y: 19%;
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
#img-porfolio {
  max-width: 70%;
  margin-top: 10px;
  border-radius: 100px;
}
h2,
h1 {
  color: white;
}
.about-me {
  padding: 50px;
  text-align: justify;
}
.link {
  margin-bottom: 10px;
  display: block;
}
.contact {
  margin-top: 50px;
}
i {
  padding: 10px;
}
</style>
