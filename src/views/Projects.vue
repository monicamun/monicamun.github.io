<template>
  <div class="about">
    <h1>Projects I've worked on</h1>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <a href="https://monicamun.github.io/selectivo-moni-notas" target="_blank">
              <img src="@/assets/moni-notas.png" class="card-img-top" />
            </a>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">
                Application to create and save notes. You can create different users.
                <br />
                <br />Built with: vue, javascript, node, mongodb, heroku, firebase,json web token, materialize
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <a href="https://monicamun.github.io/GDL002-burger-queen/" target="_blank">
              <img src="@/assets/burger-queen.png" class="card-img-top" />
            </a>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">
                An interface where they can take orders using a tablet, and send them to the kitchen so that they are prepared neatly and efficiently.
                <br />
                <br />Built with: javascript and react
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <a href="https://monicamun.github.io/GDL-open-house" target="_blank">
              <img src="@/assets/food_finder.png" class="card-img-top" />
            </a>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">
                It is a web application that helps you find places to eat near you and that you can filter by rating. This app was created by a team, the part I worked on was the google maps integration.
                <br />
                <br />Built with: react js, API google maps
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <a href="https://github.com/monicamun/GDL002-md-links" target="_blank">
              <img src="@/assets/md-links.png" class="card-img-top" />
            </a>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">
                Library (npm) + console application. Read markdown (md) files and return a list of all links found, you can also validate that the links are valid and return statistics on how many links were found and how many were unique.
                <br />
                <br />Built with: node, console, npm, javascript, markdown, regex
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.btn-primary {
  margin-top: 20px;
}

#img-projects {
  width: 20%;
}
.shadow-pop-br {
  -webkit-animation: shadow-pop-br 1s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  animation: shadow-pop-br 1s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2019-6-20 18:42:33
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation shadow-pop-br
 * ----------------------------------------
 */
@-webkit-keyframes shadow-pop-br {
  0% {
    box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
      0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  100% {
    box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e,
      4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e,
      8px 8px #3e3e3e;
    -webkit-transform: translateX(-8px) translateY(-8px);
    transform: translateX(-8px) translateY(-8px);
  }
}
@keyframes shadow-pop-br {
  0% {
    box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
      0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  100% {
    box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e,
      4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e,
      8px 8px #3e3e3e;
    -webkit-transform: translateX(-8px) translateY(-8px);
    transform: translateX(-8px) translateY(-8px);
  }
}
.mb-2 {
  margin: 20px;
}
.card {
  margin-top: 8px;
  margin-left: 8px;
}
</style>


