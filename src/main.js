import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router";
import App from "./App.vue";
import "./style.css";

// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});

console.log(swiper);

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

// -------------------------------------------
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";

import {
  faBars,
  faMinus,
  faPlus,
  faXmark,
  faCartShopping,
  faArrowUp,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faBars,
  faMinus,
  faPlus,
  faXmark,
  faCartShopping,
  faArrowUp,
  faEnvelope,
  faFacebook,
  faInstagram,
  faXTwitter,
  faUser,
  faArrowRight
);

const pinia = createPinia();

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
app.use(pinia);
app.mount("#app");
