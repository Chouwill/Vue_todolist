<template>
  <div class="container">
    <div class="Register_box">
      <div class="Register_header">
        <router-link to="/login">會員登入</router-link>
        <router-link to="/registermember">會員註冊</router-link>
      </div>
      <ul class="main_Register">
        <li>
          <label for="">使用者名稱</label>
          <br />
          <el-input
            v-model="UserName"
            style="width: 240px"
            type="text"
            placeholder="請輸入帳號"
          />
        </li>
        <li>
          <label for="">使用者帳號</label>
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
          <label for="">確認密碼 </label>
          <el-input
            v-model="DoublePassword"
            style="width: 240px"
            type="password"
            placeholder="確認輸入密碼"
            show-password
          />
        </li>
        <!-- <li class="check_link">
          <input type="checkbox" name="" id="">
          <p>
            註冊即表示您同意提供真實資料並保護您的賬戶安全。
          </p>
        </li> -->
        <li>
          <!-- <input  type="button" value="登入" /> -->
          <el-button
            @click="RegisterSend"
            style="width: 240px; background-color: #4ba0d7"
            type="success"
            ><p style="color: #000; font-size: 16px">註冊</p></el-button
          >
        </li>
        <!-- <li class="forget_link">
            <a href="">忘記密碼</a>
          </li> -->
      </ul>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
const UserName = ref("");
const UserInput = ref("");
const Password = ref("");
const DoublePassword = ref("");

// const LoginInfo = reactive([]); //原本是這樣寫
// const LoginInfo = ref({}); //原本是這樣寫
// // reactive([])這樣不是陣列嗎，{}這是物件吧???  為何要這樣可以push進去

const RegisterSend = async (email) => {
  let regex =
    /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //email格式檢核
  console.log(UserInput.value);
  console.log(Password.value);
  console.log(DoublePassword.value);
  if (regex.test(UserInput.value) && Password.value === DoublePassword.value) {
    console.log("註冊成功");
    // LoginInfo.push({
    //   UserName: UserName.value,
    //   UserInput: UserInput.value,
    //   Password: Password.value,
    // });
    // LoginInfo.push(
    //   UserName.value,
    //   UserInput.value      原本是這樣寫
    //   Password.value,
    //   DoublePassword.value
    // );
    // console.log(LoginInfo);
    try {
      const apiURL = `${import.meta.VITE_APP_API_BASE_URL}/api/v1/auth/register`;
      console.log(`註冊API URL: ${apiURL}`); // 確認 API URL
      const res = await axios.post(apiURL, {
        name: UserName.value,
        email: UserInput.value,
        password: Password.value,
      });
      console.log(res);
    } catch (error) {
      console.log("註冊失敗", error);
    }
    // {
    //   LoginInfo
    // })
    return true;
  } else {
    console.log("檢核失敗");
    return false;
  }
};
// console.log(Password.value);
</script>

<style lang="scss" scoped>
* {
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
.container {
  width: 100%;
  background-color: #c7eeff;
  background-color: #a0d8f0;
  height: 90vh;
  @media (max-width: 768px) {
    height: 85vh;
  }
}
.Register_box {
  // border: 5px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 500px; //為何改成這個就變小了，我需要自適應變化
  margin: 50px auto;
  height: 400px;
  background-color: #f2f2f2;
  padding: 15px 30px;
  @media (max-width: 768px) {
    margin-top: 200px;
    }
  .Register_header {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: skyblue;
    height: 50px;

    a:first-child {
      color: #000;
      background-color: #f2f2f2;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
    }
    a:nth-child(2) {
      color: green;
      background-color: #4ba0d7;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
    }
  }
  .main_Register {
    width: 100%;
    // border: 1px solid green;
    // height: 150px;
    display: flex;
    // margin-right: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    li {
      margin: 10px auto 0;
      // margin: 0 auto;

      width: 240px;
      display: flex;

      flex-wrap: wrap;
      // border: 2px solid darkblue;
    }
    // .check_link{
    //     width: 500px;
    //     display: flex;
    //     border: 50px solid red;
    //     font-size: 15px;
    //     justify-content: center;
    //     align-items: center;
    // }
    li:nth-child(4) {
      // margin: 10px 0 10px;
      width: 240px;
      // background-color: red;
      display: flex;
      justify-content: left;
      align-items: end;
      // background-color: #000;
      //   margin-right: 20px;
      // ::v-deep .el-style{
      //   background-color: #4285F4 !important;
      // }
    }
  }
}
</style>
