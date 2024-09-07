<template>
  <div class="container">
    <h2>{{ userName || "你尚未登入" }}</h2>
    <!-- 顯示用戶名稱或提示信息 -->

    <div class="login_box">
      <div class="login_header">
        <router-link to="/login">會員登入</router-link>
        <router-link to="/registermember">會員註冊</router-link>
      </div>
      <ul class="main_login">
        <li>
          <label for="">帳號</label>
          <br />
          <el-input
            v-model="email"
            style="width: 240px"
            type="e-mail"
            placeholder="請輸入帳號"
          />
        </li>
        <li>
          <label for="">密碼 </label>
          <el-input
            v-model="password"
            style="width: 240px"
            type="password"
            placeholder="請輸入密碼"
            show-password
          />
        </li>
        <li>
          <el-button
            @click="login"
            style="width: 240px; background-color: #4ba0d7"
            type="success"
          >
            <p style="color: #000; font-size: 16px">登入</p>
          </el-button>
        </li>
        <li class="forget_link">
          <a href="">忘記密碼</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const email = ref("");   //每天會重置，要重新註冊  Test@gmail.com
const password = ref(""); //  test123456
// nickname : Test

const userName = ref(""); // 用來存儲用戶名稱

const router = useRouter();

const login = async () => {
  try {
    const requestData = {
      email: email.value,
      password: password.value,
    };
    console.log("Request Data:", requestData);

    const res = await axios.post(
      "https://todolist-api.hexschool.io/users/sign_in",
      requestData
    );
    alert("登入成功");
    // 當登入成功時，發送事件更新用戶名稱
    // const userName = res.data.nickname; // 假設用戶名稱在這裡
    // router.emit("updateUserName", userName)// 發送事件

    // router.push("/");
    console.log(res);
  } catch (e) {
    alert("登入錯誤");
    console.log(e.response.data);
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #c7eeff;
  background-color: #a0d8f0;
  height: 90vh;
  @media (max-width: 768px) {
    height: 85vh;
  }
  .login_box {
    max-width: 500px;
    margin: 50px auto;
    height: 350px;
    background-color: #f2f2f2;
    padding: 15px 30px;
    @media (max-width: 768px) {
      margin-top: 200px;
      max-width: 500px;
    }
    @media (max-width: 414px) {
      margin-top: 200px;
      max-width: 500px;
    }
    @media (max-width: 430px) {
      max-width: 500px;
    }
    .login_header {
      display: flex;
      justify-content: center;
      width: 100%;
      background-color: skyblue;
      height: 50px;

      a:first-child {
        color: #000;
        background-color: #eebe77;
        background-color: #4ba0d7;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
      }
      a:nth-child(2) {
        color: green;
        background-color: #f2f2f2;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
      }
    }
    .main_login {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      li {
        margin: 10px 0 10px;
        width: 240px;
        display: flex;
        flex-wrap: wrap;
      }
      li:nth-child(4) {
        width: 240px;
        display: flex;
        justify-content: right;
        align-items: end;
        margin-right: 20px;
      }
    }
  }
}
</style>
