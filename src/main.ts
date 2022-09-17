import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import { vOnlyNumbers } from "@/directives/onlyNumbers";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.directive("onlyNumbers", vOnlyNumbers);
app.mount("#app");
