import { useAuthStore } from "@/stores/auth";

export default function guest({ next }) {
  const authStore = useAuthStore();

  if (authStore.authenticated) {
    return next({
      name: "home",
    });
  }

  return next();
}
