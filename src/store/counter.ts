import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  const incrementByAmount = (amount: number) => {
    count.value += amount;
  };

  const decrementByAmount = (amount: number) => {
    count.value -= amount;
  };

  return {
    count,
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
  };
});
