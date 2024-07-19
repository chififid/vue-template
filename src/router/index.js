import { createRouter, createWebHistory } from "vue-router";
import auth from "@/middlewares/auth";
import guest from "@/middlewares/guest";

import HomeView from "@/ui/pages/Home/HomePage.vue";
import LoginView from "@/ui/pages/Login/LoginPage.vue";
import RegistrationView from "@/ui/pages/Registration/RegistrationPage.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      middleware: guest,
    },
  },
  {
    path: "/registration",
    name: "registration",
    component: RegistrationView,
    meta: {
      middleware: guest,
    },
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      middleware: auth,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export { routes, router };
