import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TableView from "../views/TableView.vue";
import CounterView from "../views/CounterView.vue";
import PokemonView from "../views/PokemonView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: TableView,
  },
  {
    path: "/counter",
    name: "counter",
    component: CounterView,
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: PokemonView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
