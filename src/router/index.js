import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Todolist",
    component: () => import("../page/Todolist.vue"),
  },
  {
    path: "/prTodolist",
    name: "PrTodolist",
    component: () => import("../page/practise.vue"),
  },
  {
    path: "/note",
    name: "Todolist Note",
    component: () => import("../page/Note.vue"),
  },
  
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
