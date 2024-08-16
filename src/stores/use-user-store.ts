import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const isValidUser = ref<boolean>(false);

  const setIsValidUser = (isValid: boolean): void => {
    isValidUser.value = isValid;
  };

  return {
    isValidUser,
    setIsValidUser,
  };
});
