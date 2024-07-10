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
</template>
<!-- 先打API等待  =====>  loading   ===== >顯示loaging_page -->
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const name = ref("");
const userID = ref("");
const role = ref("");
const router = useRouter();

const orderNum = ref([]);

const data = ref(true);

onMounted(async () => {
  try {
    const res = await axios.get(`/api/v1/users/showMe`);
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
</script>

<style lang="scss">
table {
  border-collapse: collapse; // 確保邊框不會重疊

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
    }
  }
}
</style>
