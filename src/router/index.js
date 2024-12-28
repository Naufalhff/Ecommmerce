import { createRouter, createWebHistory } from "vue-router";
import HomeUser from "../views/user/HomeUser.vue";
import DetailProduk from "@/views/user/DetailProduk.vue";

const routes = [
  {
    path: "/",
    name: "HomeUser",
    component: HomeUser,
  },
  {
    path: "/new-arrivals",
    name: "NewArrivals",
    component: HomeUser,
  },
  {
    path: "/product/:id",
    name: "DetailProduk",
    component: DetailProduk,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.name === "NewArrivals") {
      return {
        el: "#new-arrival-section",
        behavior: "smooth",
      };
    }
    return savedPosition || { top: 0 };
  },
});

export default router;
