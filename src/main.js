import { createApp } from "vue";
import "./style.css";
// import axios from "axios";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router";
import App from "./App.vue";

// -------------------------------------------
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, } from "@fortawesome/free-solid-svg-icons";
// import {} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faBars,
);

// --------------------------------------
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// library.add(faUserSecret)
// -----------------------------------
// app.component('font-awesome-icon', FontAwesomeIcon)
app.use(ElementPlus);
// app.use(axios);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
