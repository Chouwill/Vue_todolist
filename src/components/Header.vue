<template>
  <header>
    <div class="center_logo">
      <img src="/src/image/BookPlanO.png" alt="" />
      <h2>夢想時間計畫</h2>
    </div>
    <ul class="nav">
      <!-- <li class="center_logo">
        <img src="/src/image/BookPlanO.png" alt="" />
        <h2>夢想時間計畫</h2>
      </li> -->
      <li>
        <router-link to="/shopping">加值服務</router-link>
      </li>
      <li>
        <router-link to="/">使用說明</router-link>
      </li>
      <li>
        <router-link to="/">關於我們</router-link>
      </li>
      <li>
        <router-link to="/">Todolist</router-link>
      </li>

      <li>
        <router-link to="/">開始計畫</router-link>
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
    <a class="phonemenu" @click="openNenu" href="#">MENU</a>
  </header>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const menu = ref(false);

const memberlink = () => {
  // router.push("Login");
};

const openNenu = () => {
  menu.value = true;
  console.log(menu.value);
};
</script>

<style lang="scss" scoped>
* {
  list-style: none;
  box-sizing: border-box;
}
header {
  background-color: #ff7f27;
  width: 50%;
  padding: 10px 40px;
  border-radius: 26px;
  .center_logo {
    max-width: 30%;
    min-width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // border: 5px solid red;
    img {
      width: 30%;
    }
    
  }
  .nav {
      display: flex;
      flex-direction: row;
      // border: 5px solid blue;
      justify-content: space-evenly;
      align-items: center;
      gap: 15px;
      margin: 10px 0;
    }
  .phonemenu {
    display: none;
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
    .center_logo{
      border: 2px solid white;
      width: 100px;
      img{
        width: 80px;
        height: 80px;
      }
      h2{
        font-size: 16px;
      }
    }
    .nav {
      display: none;
    }
    .phonemenu {
      display: block;
      // text-align: right;
    }
  }
}
</style>
