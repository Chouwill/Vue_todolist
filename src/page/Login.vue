<template>
  <div class="container">
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
            v-model="UserInput"
            style="width: 240px"
            type="e-mail"
            placeholder="請輸入帳號"
          />
        </li>
        <li>
          <label for="">密碼 </label>

          <el-input
            v-model="Password"
            style="width: 240px"
            type="password"
            placeholder="請輸入密碼"
            show-password
          />
        </li>
        <li>
          <!-- <input  type="button" value="登入" /> -->
          <el-button
            @click="LoginSend"
            style="width: 240px; background-color: #4ba0d7"
            type="success"
            ><p style="color: #000; font-size: 16px">登入</p></el-button
          >
        </li>
        <li class="forget_link">
          <a href="">忘記密碼</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const UserInput = ref("123456@gmail.com");
const Password = ref("12345678");

const router = useRouter();
console.log(router);

const LoginSend = async () => {
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
    }
  } catch (error) {
    console.error(error);
    alert("使用者帳號密碼錯誤");
  }
};

// console.log(Password.value);
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
    // border: 5px solid red;
    max-width: 500px; //為何改成這個就變小了，我需要自適應變化
    margin: 50px auto;
    height: 350px;
    background-color: #f2f2f2;
    padding: 15px 30px;
    @media (max-width: 768px) {
      margin-top: 200px;
      max-width: 500px;
      // background-color: red;
    }
    @media (max-width: 414px) {
      margin-top: 200px;
      max-width: 500px;
      // background-color: red;
    }
    @media (max-width: 430px) {
      max-width: 500px;
      // background-color: red;
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
      // width: 100%;
      // border: 5px solid green;
      // height: 150px;
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
        // margin: 10px 0 10px;
        width: 240px;
        // background-color: red;
        display: flex;
        justify-content: right;
        align-items: end;
        margin-right: 20px;
        // ::v-deep .el-style{
        //   background-color: #4285F4 !important;
        // }
      }
    }
  }
}
</style>
