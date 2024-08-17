<template>
  <header>
    <nav :class="['desktop_menu', { active: menuActive }]">
      <router-link to="/aboutus">關於我們</router-link>
      <router-link to="/shopping">加值商城</router-link>
      <router-link to="/todolist">開始Plan</router-link>
      <router-link to="/enjoylife">享受放鬆生活</router-link>
    </nav>
    <!-- <ul :class="['desktop_menu', { active: menuActive }]" v-show="menuActive">
      <li>
        <router-link to="/aboutus">關於我們</router-link>
      </li>
      <li>
        <router-link to="/shopping">加值商城</router-link>
      </li>
      <li>
        <router-link to="/todolist">開始Plan</router-link>
      </li>
      <li>
        <router-link to="/enjoylife">享受放鬆生活</router-link>
      </li>
    </ul> -->
    <div class="logo_box">
      <router-link to="/">
        <img src="/src/image/Dream_LOGO.png" alt="" />
        <h2>設計你的計畫Plan</h2>
      </router-link>
    </div>
    <div class="user_box">
      <div>
        <router-link to="/login">
          <font-awesome-icon icon="fa-regular fa-user" class="user_link" />
        </router-link>
        <router-link to="/shopping">
          <font-awesome-icon
            icon="fa-solid fa-cart-shopping"
            class="user_link"
          />
        </router-link>
      </div>
    </div>
    <div class="phone_menu_btn" @click="openMenu">
      <button>
        <font-awesome-icon icon="fa-solid fa-bars" class="menu_bar" />
      </button>
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
  position: relative;
  nav {
    width: 30%;
    // border: 2px solid #000;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      background-color: rgb(0, 255, 89);
      display: none;
    }
    @media (max-width: 430px) {
      background-color: orange;
    }

    .menu_width {
      display: flex;
      width: 250px;
      // border: 5px solid rosybrown;
      gap: 0px;
      font-size: 25px;
      // justify-content: flex-start;
      // align-items: flex-start;
      flex-direction: column;
      @media (max-width: 768px) {
        display: block;
        width: 100%;
      }
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
    // .phone_menu_list{
    //   display: none;
    //   @media (max-width: 768px) {
    //   background-color: rgb(0, 255, 89);
    //   display: block;
    //   width: 200px;
    // }
    // }
  }
  .desktop_menu {
    // display: none;
    // border: 20px solid red;
    @media (max-width: 768px) {
      display: none;
      // width: 400px;
      // background-color: orange;
      // // border: 20px solid tomato;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      // position: absolute;
      // right: 0;
    }
    &.active {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      left: 0;
      margin: auto;
      z-index: 100;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      background-color: rgb(0, 255, 8);
      // border: 10px solid red;
      color: orange;
      // @media (max-width: 768px) {
      //   background-color: orange;
      //   width: 200px;
      //   display: flex;
      //   flex-direction: column;
      //   align-items: center;
      //   justify-content: flex-end;
      //   background-color: rgb(0, 255, 8);
      //   // border: 10px solid red;
      //   color: orange;
      // }
    }
  }
  .logo_box {
    // border: 2px solid red;
    width: 40%;
    display: flex;
    // justify-content: center;
    // align-items: center;
    flex-direction: column;
    @media (max-width: 768px) {
      // background-color: rgb(0, 255, 89);
      justify-content: flex-end;
      width: 50%;
    }
    img {
      max-width: 9%;
      object-fit: cover;
      @media (max-width: 768px) {
        max-width: 24%;
      }
    }
    h2 {
      font-size: 18px;
      text-align: center;
      @media (max-width: 768px) {
        font-size: 15px;
      }
    }
  }
  .user_box {
    width: 30%;
    // border: 3px solid pink;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;
    @media (max-width: 768px) {
      // background-color: rgb(0, 255, 89);
      display: none;
    }
    div {
      display: flex;
      width: 30%;
      // border: 2px solid red;
      .user_link {
        font-size: 35px;
      }
    }
  }
  .phone_menu_btn {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 50%;
      margin: 0 50px;
    }
    button {
      border: none;
      background: none;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      cursor: pointer;
      outline: none;
      .menu_bar {
        @media (max-width: 768px) {
          color: orange;
          font-size: 30px;
        }
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
