import { Directive } from "vue";

export const vOnlyNumbers: Directive<HTMLInputElement> = {
  mounted(el) {
    el.addEventListener("keyup", () => {
      const onlyNumbersRegex = /[^\d]/g;

      if (!onlyNumbersRegex.test(el.value)) {
        el.value = Number(el.value.replace(onlyNumbersRegex, "")).toString();
      }
    });
  },
};

export default vOnlyNumbers;
