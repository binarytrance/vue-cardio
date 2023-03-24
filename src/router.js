// import BaseCounterVue from "@/views/BaseCounter.vue";
// import BaseUsersVue from "@/views/BaseUsers.vue";
import TheWireVue from "@/views/TheWire.vue";

export const routes = [
  {
    path: "/",
    component: TheWireVue,
  },
  {
    path: "/counter",
    component: () => import("@/views/BaseCounter.vue"), // lazy loading routes this way
  },
  {
    path: "/users",
    component: () => import("@/views/BaseUsers.vue"),
  },
  {
    path: "/game-over",
    component: () => import("@/views/GameOver.vue"),
  },
];
