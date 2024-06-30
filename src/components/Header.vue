<template>
  <header>
    <router-link to="/">
      <div class="center_logo">
        <!-- <img src="/src/image/BookPlanO.png" alt="" /> -->
        <img src="/src/image/BookPlan.png" alt="" />
        <h2>夢想時間計畫</h2>
      </div>
    </router-link>
    <ul class="nav" v-show="openbtn">
      <!-- <li class="center_logo">
        <img src="/src/image/BookPlanO.png" alt="" />
        <h2>夢想時間計畫</h2>
      </li> -->
      <li>
        <router-link to="/shopping">加值服務</router-link>
      </li>
      <li>
        <!-- <router-link to="/">使用說明</router-link> -->
      </li>
      <li>
        <router-link to="/aboutus">產品介紹</router-link>
      </li>
      <li>
        <!-- <router-link to="/">Todolist</router-link> -->
      </li>

      <li>
        <router-link to="/todolist">開始計畫</router-link>
      </li>
      <li>
        <router-link to="/login">登入</router-link>
      </li>
      <li>
        <router-link to="/registermember">註冊</router-link>
      </li>
      <li>
        <router-link @click="memberlink" to="/membercenter"
          >會員中心</router-link
        >
      </li>
    </ul>
    <a class="phonemenu" @click="openbtn = !openbtn" href="#">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </a>
  </header>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const menu = ref(false);
const openbtn = ref(false);

const memberlink = () => {
  router.push("Login");
};

// const openNenu = () => {
//   menu.value = true;
//   console.log(menu.value);
// };
</script>

<style lang="scss" scoped>
* {
  list-style: none;
  box-sizing: border-box;
  margin: 0 auto;
}
header {
  background-color: #ff7f27;
  background-color: #e3d5c9;
  // background-color: #f3efdd;

  width: 100%;
  padding: 5px 0;
  border-radius: 35px;
  .center_logo {
    max-width: 30%;
    min-width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // border: 5px solid red;
    img {
      width: 15%;
    }
  }
  .nav {
    display: flex;
    flex-direction: row;
    // border: 5px solid blue;
    // justify-content: space-evenly;
    align-items: center;
    gap: 15px;
    margin: 10px 0;
    li:last-child {
      padding-right: 15px;
    }
  }
  .phonemenu {
    display: block;
  }
}









@media (max-width: 768px) {
  header {
    width: 100%;
    height: auto;
    // background-color: red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 210px;
    padding: 10px 0;
    .center_logo {
      // border: 2px solid white;
      width: 100px;
      img {
        width: 40px;
        height: 40px;
      }
      h2 {
        font-size: 16px;
      }
    }
    .nav {
      display: flex;
      flex-direction: column;
      width: 500px;
      height: 200px;
      background-color: red;
    }
    .phonemenu {
      display: block;
      font-size: 20px;
      color: orange;

      // text-align: right;
    }
  }
}
</style>
