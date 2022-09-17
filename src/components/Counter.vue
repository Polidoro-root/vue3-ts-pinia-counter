<script setup lang="ts">
import { computed, ref } from "vue";
import { useCounterStore } from "@/store/counter";

const props = defineProps<{ msg: string }>();

const amount = ref(0);
const counterStore = useCounterStore();

const countMinusAmount = computed(() => counterStore.count - amount.value);

const countPlusAmount = computed(() => counterStore.count + amount.value);

const decrementByAmount = () => counterStore.decrementByAmount(amount.value);

const incrementByAmount = () => counterStore.incrementByAmount(amount.value);
</script>

<template>
  <section>
    <h1>{{ msg }}</h1>

    <article>
      <button type="button" @click="decrementByAmount">
        {{ countMinusAmount }}
      </button>
      <label for="amount">
        Amount
        <input
          id="amount"
          name="amount"
          type="number"
          v-model.number="amount"
          v-only-numbers
        />
      </label>
      <button type="button" @click="incrementByAmount">
        {{ countPlusAmount }}
      </button>
    </article>

    <article>
      <button type="button" @click="counterStore.decrement">-</button>
      <label for="counter">
        Counter
        <input
          name="counter"
          type="number"
          v-model.number="counterStore.count"
          v-only-numbers
        />
      </label>

      <button type="button" @click="counterStore.increment">+</button>
    </article>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

article {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
}

label {
  display: flex;
  flex-direction: column;
}

input {
  text-align: center;
  align-items: center;
  width: 100%;
  max-width: 150px;
}

section article:first-child button {
  width: 100px;
}

button {
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
