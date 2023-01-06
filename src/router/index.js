import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Add from "../components/Add.vue";
import Edit from "../components/Edit.vue";
import List from "../components/List.vue";
import NotFound from "../views/NotFound.vue";
import view from "../components/view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/Add",
      name: "Add",
      component: Add,
    },
    {
      path: "/Edit/:id",
      name: "Edit",
      component: Edit,
    },
    {
      path: "/List",
      name: "List",
      component: List,
    },
    {
      path: "/view/:id",
      name: "view",
      component: view,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    // },
  ],
});

export default router;
