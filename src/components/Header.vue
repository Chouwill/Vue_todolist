<template>
  <header>
    <div class="logo_box">
      <router-link to="/">
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
        <router-link v-if="!isLoggedIn" to="/login">
          <font-awesome-icon
            icon="fa-regular fa-user"
            class="deskTop_user_link"
          />
        </router-link>
        <div v-else class="user_container" @mouseover="showLogout = true" @mouseleave="showLogout = false">
          <router-link to="/membercenter" class="login_user_name">
            {{ truncatedUserName }}
          </router-link>
          <button v-if="showLogout" @click="logout" class="logout_button">登出</button>
        </div>
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
        <router-link v-if="!isLoggedIn" to="/login">
          <font-awesome-icon icon="fa-regular fa-user" class="user_link" />
        </router-link>
        <div v-else class="user_container" @mouseover="showLogout = true" @mouseleave="showLogout = false">
          <router-link to="/membercenter" class="login_user_name">
            {{ truncatedUserName }}
          </router-link>
          <button v-if="showLogout" @click="logout" class="logout_button">登出</button>
        </div>
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

<script setup>
import { onMounted, ref, onBeforeUnmount, watch } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const menuActive = ref(false);
const openbtn = ref(true);
const cartlink = ref(false);
const isLoggedIn = ref(false);
const userName = ref(""); // 定義 userName 變數
const truncatedUserName = ref(""); // 定義截取後的 userName 變數
const MAX_NAME_LENGTH = 3; // 設定最大顯示長度
const showLogout = ref(false); // 控制登出按鈕顯示

const openCartlink = () => {
  cartlink.value = !cartlink.value;
};

const openMenu = (e) => {
  menuActive.value = !menuActive.value;
  console.log(menuActive.value);
};

const checkLoginStatus = () => {
  isLoggedIn.value = localStorage.getItem("isLoggedIn") === "true";
  if (isLoggedIn.value) {
    userName.value = localStorage.getItem("userName");
    truncatedUserName.value =
      userName.value.length > MAX_NAME_LENGTH
        ? userName.value.substring(0, MAX_NAME_LENGTH) + "..."
        : userName.value;
  }
};

const login = async (credentials) => {
  try {
    const response = await axios.post("/api/login", credentials);
    if (response.data.success) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", response.data.userName);
      isLoggedIn.value = true;
      userName.value = response.data.userName;
      truncatedUserName.value =
        userName.value.length > MAX_NAME_LENGTH
          ? userName.value.substring(0, MAX_NAME_LENGTH) + "..."
          : userName.value;
      router.push("/membercenter");
    } else {
      console.error("Login failed:", response.data.message);
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

const logout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userName");
  isLoggedIn.value = false;
  router.push("/login");
};

onMounted(() => {
  checkLoginStatus();
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

watch(isLoggedIn, (newVal) => {
  if (newVal) {
    userName.value = localStorage.getItem("userName");
    truncatedUserName.value =
      userName.value.length > MAX_NAME_LENGTH
        ? userName.value.substring(0, MAX_NAME_LENGTH) + "..."
        : userName.value;
  }
});

const logoClass = ref("logo rounded");

const handleScroll = () => {
  console.log(window.scrollY);
  if (window.scrollY > 0) {
    logoClass.value = "logo square";
  } else {
    logoClass.value = "logo rounded";
  }
};
</script>

<style lang="scss" scoped>
* {
  list-style: none;
  box-sizing: border-box;
  margin: 0 auto;
}
a {
  &:hover {
    color: orange;
  }
}
header {
  width: 100%;
  background-color: #a0d8f0;
  height: 10vh;
  display: flex;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }

  .logo_box {
    width: 20%;
    border-radius: 0 0 100px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
      width: 85%;
    }
    @media (max-width: 414px) {
      width: 85%;
    }
    img {
      max-width: 85%;
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
      }
    }
  }
  ul {
    width: 60%;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      display: none;
    }
    @media (max-width: 430px) {
    }
    li {
      &:nth-child(5) {
        display: none;
        @media (max-width: 768px) {
          display: flex;
          justify-content: flex-start;
        }
      }
      a {
        color: white;
        color: #000;
        font-size: 20px;
        font-weight: 700;
        &:hover {
          color: #3b96cb;
        }
      }
    }
  }
  .desktop_menu {
    @media (max-width: 768px) {
      background-color: #7daac4;
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
        border-bottom: 3px solid rgb(49, 46, 46);
        width: 80%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        &:nth-child(5) {
          width: 40%;
          justify-content: flex-start;
          text-align: left;
          border-bottom: none;
        }
        a {
          width: 100%;
          text-align: left;
          padding: 10px 0;
          display: flex;
          @media (max-width: 768px) {
            display: flex;
            color: #000;
          }
        }
      }
      .user_team_link {
        text-align: left;
        width: 40%;
        a {
          color: #000;
          text-align: left;
          font-size: 30px;
        }
      }
      
    }
  }
  .user_box {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;
    @media (max-width: 768px) {
      display: none;
    }
    div {
      display: flex;
      width: 30%;
      // border: 2px solid palegreen;
      justify-content: center;
      align-items: center;
      .user_link {
        color: white;
        color: #000;
        font-size: 35px;

        &:hover {
          color: #3b96cb;
        }
      }
      .login_user_name {
        font-size: 20px;
        color: red;
        @media (max-width: 768px) {
          font-size: 15px;;
        }
        @media (max-width: 414px) {
          font-size: 15px;;
        }
      }
      .logout_button {
        display: flex;
        font-size: 15px;
        color: blue;
        background: none;
        border: none;
        cursor: pointer;
        transform: translateY(-10px);
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
        padding: 10px 50px;
        background-color: #fff;
        &:hover {
          text-decoration: underline;
        }
      }
      .user_container:hover .logout_button {
        transform: translateY(0);
        opacity: 1;
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
.rounded {
  border-radius: 0 0 20px 0;
}
.square {
  border-radius: 0;
}

header .desktop_menu.active .user_team_link a.login_user_name[data-v-c970699f] {
  color: #d70b0b;
  text-align: left;
  font-size: 20px; // 調整字體大小
}
</style>