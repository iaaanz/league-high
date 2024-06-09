import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../pages/Main.vue"),
    redirect: "home",
    children: [
      { path: "home", name: "home", component: () => import("../pages/components/Home.vue") },
      {
        path: "profile",
        name: "profile",
        component: () => import("../pages/components/Profile.vue"),
      },
      {
        path: "configurations",
        name: "configurations",
        component: () => import("../pages/components/Configurations.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/components/ErrorNotFound.vue"),
  },
];

export default routes;
