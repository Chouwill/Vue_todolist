<template>
  <header>
    <div class="header_logo">
      <router-link to="/">夢想時間計畫</router-link>
    </div>
    <nav>
      <ul :class="['desktop_menu', { active: menuActive }]">
        <li>
          <router-link to="/todolist">開始體驗</router-link>
        </li>
        <li>
          <router-link to="/login">會員中心</router-link>
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
    <!-- <router-link to="/membercenter">會員中心</router-link> -->
  </header>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const menuActive = ref(false);
const openbtn = ref(true);
//視窗開關

const cartlink = ref(false); // 尚未進入購物商城時，購物車icon是關閉

const openCartlink = () => {
  cartlink.value = !cartlink.value;
};

const openMenu = (e) => {
  // openbtn.value = !openbtn.value;
  menuActive.value = !menuActive.value;
  // console.log(e.target.nodeName);
  // if (e.target.nodeName === "P") {
  //   menu.value = false;
  // }
  console.log(menuActive.value);
};
// ------------------------------------------------------------------
// step 1 點擊會員中心判斷是否登入，否，則會帶到登入或註冊

// 目前無法進入會員中心，並且無法判斷狀態

const loginlink = () => {
  router.push("Login");
};

const isLoginMemberStatus = async () => {
  //檢查 是否維持在登入狀態，否，則會被導入登入或註冊
  console.log(UserInput.value);
  console.log(Password.value);
  // axios.post(`http://localhost:2500/api/v1/auth/login`, {
  //   email: UserInput.value,
  //   Password: Password.value,
  // });
  try {
    const response = await axios.post(`/api/v1/auth/login`, {
      email: UserInput.value,
      password: Password.value,
    });
    console.log(response.request.status);
    if (response.request.status === 200) {
      alert("Ok");
      router.push("MemberCenter"); // 跳轉畫面
    } else {
      alert("你未登入");
      router.push("Login");
    }
  } catch (error) {
    console.error(error);
    alert("使用者帳號密碼錯誤");
  }
};

// axios.get("https://vue3-course-api.hexschool.io/api/apitest2024/products"),
//   axios.get("https://vue3-course-api.hexschool.io/api/2024vipplan/products"),
//   axios.get("https://vue3-course-api.hexschool.io/api/2024vipservice/products"),
</script>

<style lang="scss" scoped>
* {
  list-style: none;
  box-sizing: border-box;
  margin: 0 auto;
}
header {
  background-color: #e8c6a5;
  background-color: #eebe77;
  // background-color: #3c91e0;
  width: 100%;
  display: flex;
  padding: 30px 0;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .header_logo {
    flex: 1;
    margin: 0 50px;
    a {
      font-size: 35px;
      @media (max-width: 430px) {
        font-size: 19px;
      }
    }
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
    padding: 0 0;
    // max-height: 80px;
    position: relative;
    .header_logo {
      h2 {
        font-size: 30px;
      }
    }
    nav {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;
      height: 100px;
      // background-color: red;
      // border: 5px solid green;
      box-sizing: border-box;
      .desktop_menu {
        // display: flex;
        // flex-direction: column;
        // // width: 100%;
        // // height: 500px;
        // background-color: #f5e4d0;
        display: none;
        width: 100%;
        margin: 0 auto;
        &.active {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: orange;
        }
      }
    }
    .phone_menu {
      display: block;
      margin-right: 20px;

      button {
        border: none;
        padding: 10px 15px;
        border-radius: 20px;
      }
    }
  }
}
</style>
