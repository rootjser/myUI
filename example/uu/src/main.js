import { createApp } from "vue";
import App from "./App.vue";
import { select, button } from "myuitry";

createApp(App).use(select).use(button).mount("#app");
