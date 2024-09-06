<script setup>
/**
 * Import the Header component from the specified file path.
 */
import Header from "@/components/Header.vue";
// import Windows from "./components/Windows.vue"
import Footer from "@/components/Footer.vue";

// import Login from "./components/Login.vue";
// import RegisterMember from "./components/RegisterMember.vue";

import { ref } from "vue";
// import WindowsVue from "./components/Windows.vue";

const isLogin = ref(false);
const isRegisterMember = ref(false);
</script>

<template>
  <div class="container">
    <Header />
     
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
* {
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  // margin: 10px 0 10px;
}
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  
  header {
    nav {
      border: 10px solid red;
    }
  }
}
</style>


