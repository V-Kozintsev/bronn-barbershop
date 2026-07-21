import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import HomeView from "./views/HomeView.vue";
import ServicesView from "./views/ServicesView.vue";
import MastersView from "./views/MastersView.vue";
import BookingView from "./views/BookingView.vue";
import "./assets/styles.css";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/services", name: "services", component: ServicesView },
  { path: "/masters", name: "masters", component: MastersView },
  { path: "/booking", name: "booking", component: BookingView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

createApp(App).use(router).mount("#app");
