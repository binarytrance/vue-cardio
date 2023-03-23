import BaseCounterVue from "./views/BaseCounter.vue";
import BaseUsersVue from "./views/BaseUsers.vue";
import TheWireVue from "./views/TheWire.vue";

export const routes = [
  {
    path: "/",
    component: TheWireVue,
  },
  {
    path: "/counter",
    component: BaseCounterVue,
  },
  {
    path: "/users",
    component: BaseUsersVue,
  },
];
