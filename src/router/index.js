import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('../views/Home/Index.vue'),
  },
  {
    path: "/character/:id",
    name: "character",
    component: () => import('../views/Character/Index.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
