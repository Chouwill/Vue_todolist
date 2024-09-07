import { id } from "element-plus/es/locales.mjs";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("user", () => {
  const userinfo = ref({
    id: null,
    name: null,
    role: null,
  });

  return { userinfo };
});
