<template>
  <header>
    <nav>
      <div class="menu_width">
        <router-link to="/">關於我們</router-link>
        <router-link to="/">豐富資源</router-link>
      </div>
      <div class="menu_width">
        <router-link to="/todolist">開始Plan</router-link>

        <router-link to="/">享受放鬆生活</router-link>
      </div>
    </nav>
    <div class="logo_box">
      <img src="/src/image/Dream_LOGO.png" alt="" />
      <h2>設計你的讀書計畫Plan</h2>
    </div>
    <div class="user_box">
      <div>
        <router-link to="/">
          <font-awesome-icon icon="fa-regular fa-user" class="user_link" />
        </router-link>
        <router-link to="/">
          <font-awesome-icon
            icon="fa-solid fa-cart-shopping"
            class="user_link"
          />
        </router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
* {
  list-style: none;
  box-sizing: border-box;
  margin: 0 auto;
}
header {
  width: 100%;
  background-color: #4ba0d7;
  height: 15vh;
  display: flex;
  // padding: 100px 0;
  nav {
    width: 30%;
    border: 2px solid #000;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .menu_width {
      display: flex;
      width: 250px;
      // border: 5px solid rosybrown;
      gap: 0px;
      font-size: 25px;
      // justify-content: flex-start;
      // align-items: flex-start;
      flex-direction: column;
      &:nth-child(1) {
        // border: 3px solid orange;
        text-align: right;
      }
      a,
      .router-link {
        // text-align: left;
        color: bisque;
        width: 100%;
        white-space: nowrap;
        display: block;
      }
    }
  }
  .logo_box {
    border: 2px solid red;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      max-width: 14%;
      object-fit: contain;
    }
  }
  .user_box {
    width: 30%;
    border: 3px solid pink;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;
    div {
      display: flex;
      width: 30%;
      // border: 2px solid red;
      .user_link {
        font-size: 35px;
      }
    }
  }
}
</style>

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
