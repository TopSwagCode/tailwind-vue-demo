import { createStore } from "vuex";
import { StateType } from "@/types";

export default createStore({
  state: {
    count: 0,
  },
  getters: {
    currentCount(state: StateType): number {
      return state.count;
    },
  },
  mutations: {
    increment(state: StateType): void {
      state.count++;
    },
    decrement(state: StateType): void {
      state.count--;
    },
  },
  actions: {},
  modules: {},
});
