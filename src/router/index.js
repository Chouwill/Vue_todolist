import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/page/Index.vue"),
  },
  {
    path: "/todolist",
    name: "Todolist",
    component: () => import("@/page/Todolist.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/page/Login.vue"),
  },
  {
    path: "/registermember",
    name: "RegisterMember",
    component: () => import("@/page/RegisterMember.vue"),
  },
  // {
    // path: "/membercenter",
  //   name: "MemberCenter",
  //   component: () => import("@/page/MemberCenter.vue"),
  // },
  {
    path: "/shopping",
    name: "Shopping",
    component: () => import("@/page/Shopping.vue"),
  },
  {
    path: "/aboutus",
    name: "AboutUs",
    component: () => import("@/page/AboutUs.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/page/Cart.vue"),
  },
  {
    path: "/windows",
    name: "Windows",
    component: () => import("@/page/Windows.vue"),
  },
  {
    path: "/enjoylife",
    name: "Enjoylife",
    component: () => import("@/page/Enjoylife.vue"),
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
