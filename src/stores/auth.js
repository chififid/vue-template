import { defineStore } from "pinia";

import {
  signUpRequest,
  loginRequest,
  logoutRequest,
  sessionRequest,
} from "@/connectors/auth";
import { router } from "@/router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
  }),
  actions: {
    async session() {
      const res = await sessionRequest();
      if (!res) {
        this.$reset();
        return;
      }

      this.authenticated = true;
    },
    async signUp(userData) {
      return this.auth(signUpRequest, userData);
    },
    async login(userData) {
      return this.auth(loginRequest, userData);
    },
    async logout() {
      await logoutRequest();

      this.$reset();
      router.push({ name: "login" });
    },
    async auth(authRequest, userData) {
      try {
        await authRequest(userData);
        this.authenticated = true;
        router.push({ name: "home" });
      } catch (error) {
        return { error: error };
      }
    },
  },
});
