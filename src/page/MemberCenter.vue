<template>
  <div v-if="data">loading...</div>
  <div v-else class="logining_page">
    <h2>你已登入</h2>

    <h4>名字:{{ name }}</h4>
    <h4>使用者ID:{{ userID }}</h4>
    <h4>身分別:{{ role }}</h4>
    <h4>目前會員等級</h4>
  </div>
  <button @click="sign">登出</button>

  <div class="member_status">
    <h2>您購買清單</h2>
    <table>
      <thead>
        <tr>
          <td>訂單編號</td>
          <td>付款方式</td>
          <td>訂單金額</td>
          <td>商品名稱</td>
          <td>數量</td>
          <td>處理狀態</td>
          <td>客戶服務</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ orderNum }}</td>
          <td>信用卡</td>
          <td>$777</td>
          <td>XXXX商品</td>
          <td>1</td>
          <td>已送達</td>
          <td>聯繫客服</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="member_Plan_status">
    <h2>您計畫進度</h2>
    <table>
      <thead>
        <tr>
          <td>計畫名稱</td>
          <td>目前進度</td>
          <td>會員等級Pro功能</td>
          <td>回饋/建議</td>
          <!-- <td>數量</td> -->
          <!-- <td>處理狀態</td> -->
          <!-- <td>客戶服務</td> -->
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ orderNum }}</td>
          <td>
            <div class="demo-progress">
              <el-progress
                type="dashboard"
                :percentage="percentage"
                :color="colors"
              />
            </div>
          </td>
          <td>
            <h2 style="font-size: 25px;">金卡會員</h2>
            <h2 style="font-size: 25px;">是否啟用以下功能</h2>
            <ul class="user_function">
              <li><input type="checkbox">1對1專業秘書</li>
              <li><input type="checkbox">智能提醒鬧鐘</li>
              <li><input type="checkbox">智能聊天機器人</li>
            </ul>
          </td>
          <td>「看來您在進度上有一點落後，不要灰心！我們建議您每天設定一些小目標，這樣就更容易迎頭趕上了。加油！」</td>
          <!-- <td>1</td> -->
          <!-- <td>已送達</td> -->
          <!-- <td>聯繫客服</td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>
<!-- 先打API等待  =====>  loading   ===== >顯示loaging_page -->
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { Minus, Plus } from "@element-plus/icons-vue";

const name = ref("");
const userID = ref("");
const role = ref("");
const router = useRouter();

const orderNum = ref([]);

const data = ref(true);

onMounted(async () => {
  try {
    const apiBaseURL = import.meta.env.VITE_APP_API_BASE_URL;
    console.log(`Base URL: ${apiBaseURL}`); // 確認 API URL
    const apiURL = `${apiBaseURL}/api/v1/users/`;
    console.log(`登入API URL: ${apiURL}`); // 確認 API URL

    const res = await axios.get(apiURL);
    console.log(res);
    data.value = false;
    name.value = res.data.user.name;
    userID.value = res.data.user.userId;
    role.value = res.data.user.role;
  } catch (error) {
    console.log(error);
    router.push("/");
  }
});

const sign = async () => {
  try {
    const res = await axios.delete(`/api/v1/auth/logout`);
    console.log(res);
    alert("你正在登出");
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

// 狀態碼200 成功
//400  前後端
//500 後端

function getRandomInt(max) {
  const randNum = Math.floor(Math.random() * max);
  orderNum.value = `2024${randNum}`;
  // orderNum.value.push(randNum);
}
getRandomInt(100000);
console.log(orderNum.value);

const percentage = ref(10);
const percentage2 = ref(0);
const colors = [
  { color: "#f56c6c", percentage: 20 },
  { color: "#e6a23c", percentage: 40 },
  { color: "#5cb87a", percentage: 60 },
  { color: "#1989fa", percentage: 80 },
  { color: "#6f7ad3", percentage: 100 },
];

const increase = () => {
  percentage.value += 10;
  if (percentage.value > 100) {
    percentage.value = 100;
  }
};
const decrease = () => {
  percentage.value -= 10;
  if (percentage.value < 0) {
    percentage.value = 0;
  }
};
onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 10;
  }, 500);
});
</script>

<style lang="scss" scoped>
*{
  list-style: none;
}
.member_status {
  table {
    border-collapse: collapse; // 確保邊框不會重疊
    min-width: 100%;
    border: 5px solid green;
    @media (max-width: 768px) {
      background-color: greenyellow;
      width: 700px;
    }

    thead {
      tr {
        // border: 3px solid palegreen;
        background-color: red;
      }
      th,
      td {
        padding: 10px 30px;
        border: 1px solid black;
        text-align: center;
        font-size: 30px;
       
        @media (max-width: 768px) {
          font-size: 15px;
        }
      }
      .product-name {
        width: 270px;
        height: 50px;
      }
    }

    tbody {
      border: 1px solid black;
      tr,
      td {
        border: 1px solid black;
        text-align: center;
        font-size: 25px;
        padding: 10px 0;
        .user_Progress {
          margin: 0 20px;
        }
        @media (max-width: 768px) {
          font-size: 10px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    background-color: greenyellow;
    width: 20vw;
  }
}
.member_Plan_status {
  table {
    border-collapse: collapse; // 確保邊框不會重疊
    min-width: 100%;
    border-bottom: 10px solid green;
    @media (max-width: 768px) {
      background-color: greenyellow;
      width: 700px;
    }

    thead {
      tr {
        // border: 3px solid palegreen;
        background-color: gray;
      }
      th,
      td {
        padding: 5px 30px;
        // border-bottom: 5px solid black;
        text-align: center;
        font-size: 15px;
        width: 350px;
        h2{
          font-size: 15px;
        }
        @media (max-width: 768px) {
          font-size: 15px;
        }
      }
      .product-name {
        width: 270px;
        height: 50px;
      }
    }

    tbody {
      border: 1px solid black;
      tr,
      td {
        border: 1px solid black;
        text-align: center;
        font-size: 25px;
        padding: 10px 0;
        @media (max-width: 768px) {
          font-size: 10px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    background-color: greenyellow;
    width: 20vw;
  }
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>
