import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // This will now automatically look for index.js
import "./style.css";

// Standard Vue instantiation
createApp(App)
  .use(router)
  .mount("#app");