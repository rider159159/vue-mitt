import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "page1",
    component: () => import("../views/page1.vue")
  },
  {
    path: "/page2",
    name: "page2",
    component: () => import("../views/page2.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
