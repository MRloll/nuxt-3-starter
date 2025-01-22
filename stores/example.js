import { defineStore } from "pinia";

export const useExampleStore = defineStore("auth", () => {
  const fetchData = () => {
    return useAPI("posts");
  };

  return {
    fetchData,
  };
});
