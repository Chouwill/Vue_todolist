<template>
  <header>
    <div class="header_logo">
      <h2>
        <router-link to="/">夢想時間計畫</router-link>
      </h2>
    </div>
    <nav v-show="openbtn">
      <ul class="desktop_menu">
        <li>
          <router-link to="/todolist">開始體驗</router-link>
        </li>
        <li>
          <router-link to="/login">登入</router-link>
        </li>
        <!-- <li>
          <router-link to="/registermember">註冊</router-link>
        </li> -->
        <!-- <li>
          <router-link @click="loginlink" to="/membercenter"
            >會員中心</router-link
          >
        </li> -->
        <li>
          <router-link to="/shopping" @click="openCartlink"
            >加值服務商城</router-link
          >
          <router-link to="/cart">
            <font-awesome-icon
              icon="fa-solid fa-cart-shopping"
              class="cartOpen"
              v-show="cartlink"
            />
          </router-link>
        </li>
        <li>
          <router-link to="/aboutus">使用說明</router-link>
        </li>
      </ul>
    </nav>
    <div class="phone_menu" @click="openMenu">
      <button>
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const menu = ref(false);
const openbtn = ref(true);
//視窗開關

const cartlink = ref(false); // 尚未進入購物商城時，購物車icon是關閉

const openCartlink = () => {
  cartlink.value = !cartlink.value;
};

const openMenu = () => {
  openbtn.value = !openbtn.value;
  // console.log(openMenu.value);
};

const loginlink = () => {
  router.push("Login");
};

// axios.get("https://vue3-course-api.hexschool.io/api/apitest2024/products"),
//   axios.get("https://vue3-course-api.hexschool.io/api/2024vipplan/products"),
//   axios.get("https://vue3-course-api.hexschool.io/api/2024vipservice/products"),
</script>

<style lang="scss" scoped>
// * {
//   list-style: none;
//   box-sizing: border-box;
//   margin: 0 auto;
// }
header {
  background-color: #e8c6a5;
  background-color: #eebe77;
  // background-color: #3c91e0;
  width: 100%;
  display: flex;
  // padding: 10px;
  justify-content: space-between;
  align-items: center;
  .header_logo {
    flex: 1;
    font-size: 24px;
    margin: 0 50px;
  }
  nav {
    flex: 1;

    ul {
      display: flex;
      // width: 80%;
      justify-content: space-evenly;
      align-items: center;
      li {
        margin: 0 auto;
        list-style: none;
        
        a {
          font-size: 18px;
          // color: #333333;
        }
      }
    }
  }
  .phone_menu {
    display: none;
  }
}

@media (max-width: 768px) {
  header {
    width: 100%;
    .header_logo {
      h2 {
        font-size: 30px;
      }
    }
    nav {
      display: flex;
      flex-direction: column;
      width: 50%;
      // height: 500px;
      // background-color: red;
      ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        // height: 500px;
        background-color: #f5e4d0;
        
      }
    }
    .phone_menu {
      display: block;
      button {
        border: none;
        padding: 10px 15px;
        border-radius: 20px;
      }
    }
  }
}
</style>
