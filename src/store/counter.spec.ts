import { describe, beforeEach, it, expect } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { useCounterStore } from "./counter";

describe("Counter Store", () => {
  const initialCount = 0;

  beforeEach(() => {
    createTestingPinia({
      initialState: {
        counter: { count: initialCount },
      },
      stubActions: false,
    });
  });

  it("count should start with 0", () => {
    const counterStore = useCounterStore();

    expect(counterStore.count).toBe(initialCount);
  });

  it("count should increments once", () => {
    const counterStore = useCounterStore();

    counterStore.increment();

    expect(counterStore.count).toBe(initialCount + 1);
  });

  it("count should decrements once", () => {
    const counterStore = useCounterStore();

    counterStore.decrement();

    expect(counterStore.count).toBe(initialCount - 1);
  });

  it("count should increments by amount", () => {
    const counterStore = useCounterStore();

    const amount = 10;

    counterStore.incrementByAmount(amount);

    expect(counterStore.count).toBe(initialCount + amount);
  });

  it("count should decrements by amount", () => {
    const counterStore = useCounterStore();

    const amount = 10;

    counterStore.decrementByAmount(amount);

    expect(counterStore.count).toBe(initialCount - amount);
  });
});
