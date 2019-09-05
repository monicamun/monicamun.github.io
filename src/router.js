import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: About
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    }
  ]
});
