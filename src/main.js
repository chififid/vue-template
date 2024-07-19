import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/ui/App.vue";
import { router } from "@/router";
import { configure } from "vee-validate";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { useAuthStore } from "@/stores/auth";

configure({
  validateOnModelUpdate: false,
});

const app = createApp(App);

app.use(createPinia());
const authStore = useAuthStore();
authStore.session();

app.use(router);
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }

  return to.meta.middleware({ to, from, next });
});

app.use(VueQueryPlugin)

app.mount("#app");
