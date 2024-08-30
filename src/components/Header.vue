<template>
  <header>
    <div class="logo_box">
      <router-link to="/">
        <!-- <h2>設計你的計畫Plan</h2> -->
        <img src="/src/image/Dream_Plan-Photoroom (1).png" alt="" />
      </router-link>
    </div>
    <ul :class="['desktop_menu', { active: menuActive }]">
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
      <li class="user_team_link">
        <router-link to="/login">
          <font-awesome-icon
            icon="fa-regular fa-user"
            class="deskTop_user_link"
          />
        </router-link>
        <router-link to="/cart">
          <font-awesome-icon
            icon="fa-solid fa-cart-shopping"
            class="deskTop_user_link"
          />
        </router-link>
      </li>
    </ul>
    <div class="user_box">
      <div>
        <router-link to="/login">
          <font-awesome-icon icon="fa-regular fa-user" class="user_link" />
        </router-link>
        <router-link to="/cart">
          <font-awesome-icon
            icon="fa-solid fa-cart-shopping"
            class="user_link"
          />
        </router-link>
      </div>
    </div>
    <div class="phone_menu_cancel" style="display: none">
      <button>
        <!-- <font-awesome-icon icon="fa-solid fa-xmark" /> -->
      </button>
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
a{
  &:hover{
    // background-color: orange;
    color: orange;
  }
}
header {
  width: 100%;
  background-color: #4ba0d7;
  background-color: #1e7fb8;
  background-color: #4021BF;

  height: 15vh;
  display: flex;
  // padding: 100px 0;
  position: relative;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: #1F2D41;
  }

  .logo_box {
    // border: 2px solid red;
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 768px) {
      // background-color: rgb(0, 255, 89);
      display: flex;
      justify-content: flex-end;
      width: 85%;
      align-items: center;
    }
    @media (max-width: 414px) {
      // background-color: rgb(0, 255, 89);
      display: flex;
      justify-content: flex-end;
      width: 85%;
      align-items: center;
    }
    img {
      max-width: 50%;
      object-fit: cover;
      @media (max-width: 768px) {
        max-width: 75%;
      }
      @media (max-width: 414px) {
        max-width: 100%;
      }
    }
    h2 {
      font-size: 25px;
      text-align: center;
      @media (max-width: 768px) {
        font-size: 35px;
        line-height: 3.2;
      }
      @media (max-width: 768px) {
        font-size: 17px;
        line-height: 6.2;
        // margin-left: 20px;
      }
    }
  }
  ul {
    width: 33.3%;
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
      background-color: rgb(217, 255, 0);
    }
    li {
      &:nth-child(5) {
        display: none;
        @media (max-width: 768px) {
          display: flex;
          border: 5px solid red;
          justify-content: flex-start;
          // width: 100px;
        }
      }
      a {
        color: white;
        font-size: 20px;
      }
    }
    // .deskTop_user_link {
    //   display: none;
    //   @media (max-width: 768px) {
    //     // background-color: rgb(0, 255, 89);
    //     display: block;
    //     color: white;
    //     font-size: 40px;
    //   }
    //   @media (max-width: 430px) {
    //     background-color: rgb(217, 255, 0);
    //     display: block;
    //   }
    // }
  }
  .desktop_menu {
    // display: none;
    // border: 20px solid red;
    @media (max-width: 768px) {
      //display: none;
      // width: 400px;
      background-color: orange;
      // // border: 20px solid tomato;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      // position: absolute;
      // right: 0;
    }
    &.active {
      width: 50vw;
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
      color: rgb(68, 0, 255);
      @media (max-width: 768px) {
        display: flex;
      }
      li {
        // border-bottom: 3px solid gray;
        width: 80%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        &:nth-child(5){
          width: 40%;
          justify-content: flex-start;
          text-align: left;
          border-bottom: none;
        }
        a {
          // border-bottom: 3px solid gray;
          width: 100%;
          text-align: left;
          padding: 10px 0;
          display: flex;
          @media (max-width: 768px) {
            display: flex;
            color: #4bd76e;
            
          }
        }
      }
      .user_team_link{
        text-align: left;
        width: 40%;
        a{
          color: #000;
          text-align: left;
          font-size: 30px;
        }
      }
    }
  }
  .user_box {
    width: 33.3%;
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
        color: white;
        font-size: 35px;
        &:hover{
          color: orange;
        }
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
      z-index: 10;
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
