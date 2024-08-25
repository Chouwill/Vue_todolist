<template>
  <div class="container">
    <div class="page_title">
      <h2>加值服務商城</h2>
      <h3>優質書籍推薦:</h3>
    </div>
    <ul class="Books_product_list">
      <li v-for="item in booksdata" :key="item.id">
        <img :src="item.imageUrl" :alt="item.title" />
        <div class="product_information">
          <div class="product_text">
            <h4>{{ item.title }}</h4>
            <span>${{ item.price }}元</span>
          </div>
          <button @click="addToCart(item)">加入購物車</button>
        </div>
      </li>
    </ul>
    <div class="page_title">
      <h3>VIP尊榮方案服務:</h3>
    </div>
    <ul class="Vip_product_list">
      <li v-for="item in VipData" :key="item.id">
        <img :src="item.imageUrl" :alt="item.title" />
        <div class="Vip_information">
          <div class="Vip_text">
            <h4>{{ item.title }}</h4>
            <span>${{ item.price }}元</span>
          </div>
          <button @click="addToCart(item)">加入購物車</button>
        </div>
      </li>
    </ul>
    <div class="page_title">
      <h3>VIP尊榮方案簡介:</h3>
      <!-- <p></p> -->
    </div>
    <ul class="Vip_Serve_list">
      <li v-for="item in VipServe" :key="item.id">
        <img :src="item.imageUrl" :alt="item.title" />
        <div class="product_information">
          <div class="product_text">
            <h4>{{ item.title }}</h4>
            <!-- <span>${{ item.price }}元</span> -->
          </div>
          <!-- <button>加入購物車</button> -->
        </div>
      </li>
      <!-- <li><img src="/src/image/AI_alert.png" alt="" /></li>
    <li><img src="/src/image/AItalk.png" alt="" /></li>
    <li><img src="/src/image/secretary_small.png" alt="" /></li> -->
    </ul>
    <div class="table-container">
      <table class="membership-table">
        <thead>
          <tr>
            <th>會員等級</th>
            <th>價格</th>
            <th>提供服務</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>金牌會員</td>
            <td>50元</td>
            <td>智能提醒</td>
          </tr>
          <tr>
            <td>黑卡會員</td>
            <td>150元</td>
            <td>智能聊天機器人, 智能提醒</td>
          </tr>
          <tr>
            <td>白金會員</td>
            <td>298元</td>
            <td>1對1專業個人秘書, 智能聊天機器人, 智能提醒</td>
          </tr>
        </tbody>
      </table>
    </div>
    <aside>
      <div class="shopping_cart"></div>
    </aside>
    <el-dialog
      v-model="productInfo.visible"
      title="加入購物車"
      width="500"
      center
    >
      <span> {{ productInfo.title }}已加入購物車 </span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="productInfo.visible = false">關閉</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<!-- <template>
  <h2>加值服務商城</h2>
  <div class="container">
    <ul class="products_list">
      <li v-for="item in data" :key="item.id">
        <img :src="item.imageUrl" alt="" />
        <div class="products_information">
          <div class="product_title">
            <p>{{ item.title }}</p>
            <p>${{ item.price }}</p>
            <button>加入購物車</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template> -->

<script setup>
import axios from "axios";
import { ref, reactive, onMounted } from "vue";
import { useCartStore } from "../stores/cart.js";
const store = useCartStore();
// const visible = ref(false);
// 加入購物車彈窗的狀態
const productInfo = reactive({
  visible: false, // 彈窗的開關
  title: "", // 商品名稱
});

const booksdata = ref([]);

const VipData = ref([]);

const VipServe = ref([]);

const addToCart = (item) => {
  store.addToCart(item);
  productInfo.title = item.title;
  productInfo.visible = true;
};

// console.log(booksdata.value, VipData.value,VipServe.value);

const arr = [
  axios.get(
    "https://vue3-course-api.hexschool.io/api/dreamcompressionapi/products"
  ),
  axios.get("https://vue3-course-api.hexschool.io/api/vipbookplan/products"),
  axios.get(
    "https://vue3-course-api.hexschool.io/api/bookplanerviceintroduction/products"
  ),
];

onMounted(async () => {
  try {
    const resArr = await Promise.all(arr); //Promise.allSettled  沒生效????
    console.log(resArr[0].data);
    booksdata.value = resArr[0].data.products; //  書籍API
    // ---------------------------------------------
    console.log(resArr[1].data);
    VipData.value = resArr[1].data.products; // 會員等級API
    // -----------------------------------------------
    console.log(resArr[1].data);
    VipServe.value = resArr[2].data.products; // 會員等級分級介紹
  } catch (error) {
    console.log("錯誤處理", error);
  }
  console.log("執行其他動作");
});
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  list-style: none;
  // margin: 5px 5px;
}
.container {
  width: 100%;
  border: 5px solid red;
  .page_title {
    width: 100%;
    // border: 10px solid rgb(102, 0, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    h2 {
      width: 100%;
      text-align: center;
      @media (max-width: 768px) {
        background-color: rgb(0, 255, 89);
        text-align: left;
        width: 95%;
      }
    }
    h3 {
      width: 60%;
      text-align: left;
      // border: 5px solid salmon;
      @media (max-width: 768px) {
        background-color: rgb(0, 255, 89);
        text-align: left;
        width: 90%;
      }
    }
  }

  .Books_product_list {
    max-width: 60%;
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    padding: 0 24px;
    margin-bottom: 3rem;
    // border: 5px solid red;
    @media (max-width: 768px) {
      // background-color: rgb(55, 0, 255);
      display: flex;
      max-width: 90%;
      flex-wrap: wrap;
      gap: 30px;
    }
    @media (max-width: 414px) {
      background-color: rgb(0, 255, 47);
      display: flex;
      max-width: 100%;
      flex-wrap: wrap;
      gap: 30px;
    }
    li {
      width: calc(100% - 30px) / 3;
      // width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      // border: 5px solid yellow;
      position: relative;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* 加深陰影效果 */
      @media (max-width: 768px) {
        // background-color: rgb(0, 255, 89);
        display: flex;
        width: 40%;
        flex-direction: column;
      }
      @media (max-width: 414px) {
        background-color: rgb(255, 0, 179);
        display: flex;
        width: 80%;
        flex-direction: column;
      }
      img {
        width: 200px;
        height: 270px;
        margin: 10px 0;
        object-fit: cover;
      }
      .product_information {
        padding: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        width: 300px;
        // border: 5px solid green;
        .product_text {
          width: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          // background-color: #4ba0d7;
          // background-color: #4bd76e;
          padding: 5px 10px;
          height: 60px;
          // position: absolute;

          bottom: 73px;
          opacity: 0.8;

          h4,
          span {
            font-weight: 900;
            font-size: 13px; //太大每個購物車按鈕會不一樣
            color: #000;
            text-align: center;
          }
        }
        button {
          width: 100px;
          // height: 41px;
          padding: 10px 10px;
          border-radius: 5px;
          border: none;
          font-weight: 700;
          font-size: 16px;
          color: #ffffff;
          background-color: #4ba0d7;
          transition: background-color 0.3s ease;
          cursor: pointer;
          @media (max-width: 390px) {
            // width: 100%;
            font-size: 15px;
            // height: 500px;
          }

          &:hover {
            background-color: #3a8bb5;
          }
          &:active {
            background-color: #3a8bb5;
            box-shadow: inset 4px 10px 8px rgba(0, 0, 0, 0.2); /* 按壓效果 */
          }
        }
      }
    }
  }
  .Vip_product_list {
    max-width: 60%;
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    padding: 0 24px;
    margin-bottom: 3rem;
    // border: 5px solid red;
    @media (max-width: 768px) {
      // background-color: rgb(55, 0, 255);
      display: flex;
      max-width: 90%;
      flex-wrap: wrap;
    }
    @media (max-width: 414px) {
      background-color: rgb(0, 255, 47);
      display: flex;
      max-width: 100%;
      flex-wrap: wrap;
      gap: 30px;
    }
    li {
      width: calc(100% - 30px) / 3;
      // width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      // border: 5px solid yellow;
      position: relative;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* 加深陰影效果 */
      @media (max-width: 768px) {
        // background-color: rgb(0, 255, 89);
        display: flex;
        width: 40%;
        flex-direction: column;
      }
      @media (max-width: 414px) {
        background-color: rgb(255, 85, 0);
        display: flex;
        width: 80%;
        flex-direction: column;
      }
      img {
        width: 200px;
        height: 270px;
        margin: 10px 0;
        object-fit: cover;
      }
      .Vip_information {
        padding: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: 300px;
        // border: 5px solid green;
        .Vip_text {
          width: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          // background-color: #4ba0d7;
          padding: 5px 10px;
          height: 60px;
          position: absolute;
          margin: 55px 0 0 0;
          bottom: 55px;
          opacity: 0.8;
          // border: 5px solid green;

          h4,
          span {
            font-weight: 900;
            font-size: 13px; //太大每個購物車按鈕會不一樣
            color: #000;
            text-align: center;
          }
        }
        button {
          width: 100px;
          // height: 41px;
          padding: 10px 10px;
          border-radius: 5px;
          border: none;
          font-weight: 700;
          font-size: 16px;
          color: #ffffff;
          background-color: #4ba0d7;
          transition: background-color 0.3s ease;
          cursor: pointer;

          &:hover {
            background-color: #3a8bb5;
          }
          &:active {
            background-color: #3a8bb5;
            box-shadow: inset 4px 10px 8px rgba(0, 0, 0, 0.2); /* 按壓效果 */
          }
        }
      }
    }
  }
  .Vip_Serve_list {
    max-width: 60%;
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    padding: 0 24px;
    margin-bottom: 3rem;
    @media (max-width: 768px) {
      // background-color: rgb(55, 0, 255);
      display: flex;
      max-width: 90%;
      flex-wrap: wrap;
    }
    @media (max-width: 414px) {
      background-color: rgb(0, 255, 47);
      display: flex;
      max-width: 100%;
      flex-wrap: wrap;
      gap: 30px;
    }

    li {
      width: calc(100% - 30px) / 3;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* 加深陰影效果 */
      @media (max-width: 768px) {
        // background-color: rgb(0, 255, 89);
        display: flex;
        width: 40%;
        flex-direction: column;
      }
      @media (max-width: 414px) {
        background-color: rgb(255, 0, 179);
        display: flex;
        width: 80%;
        flex-direction: column;
      }
      img {
        width: 200px;
        height: 270px;
        margin: 10px 0;
        object-fit: cover;
      }
      .product_information {
        padding: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: 300px;
        .product_text {
          width: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          // background-color: #4ba0d7;
          padding: 5px 10px;
          height: 60px;
          position: absolute;
          bottom: 0px;
          opacity: 0.8;

          h4 {
            font-weight: 900;
            font-size: 13px;
            color: #000;
            text-align: center;
          }
        }
      }
    }
  }

  .table-container {
    max-width: 900px;
    width: 50%;
    margin: 50px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    @media (max-width: 768px) {
      border: 5px solid red;
      max-width: 900px;
      width: auto;
    }
  }

  .membership-table {
    width: 100%;
    border-collapse: collapse;
    font-family: "Arial", sans-serif;
    text-align: left;
    font-size: 16px;
    line-height: 1.6;

    thead {
      background-color: #f5e4d0;
      color: #795227; // 深灰色文字
      text-align: center;

      th {
        padding: 15px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
    }

    tbody {
      tr {
        &:nth-child(even) {
          background-color: #f9f9f9;
        }

        &:hover {
          background-color: #f1f1f1;
        }

        td {
          text-align: center;
          padding: 15px;
          border-bottom: 1px solid #e0e0e0;
          transition: background-color 0.3s;

          &:first-child {
            font-weight: bold;
            color: #333;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
