<template>
  <div class="cartopen_box">
    <main>
      <h2>購物車</h2>
      <table>
        <thead>
          <tr>
            <td class="product-name">商品名稱</td>
            <td class="product-price">價格</td>
            <td class="quantity">數量</td>
            <td class="quantity">小計</td>
            <!-- <td class="oth">備註:</td> -->
            <td class="othMethod"></td>
          </tr>
        </thead>
        <tbody>
          <CartItem
            v-for="product in store.shoppingCart"
            :key="product.id"
            :product="product"
            @checkCart="handleCheckCart"
            ref="cartItems"
          />
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4"></td>
            <td>
              <button
                v-if="store.shoppingCart.length > 0"
                @click="store.removeAll"
                class="AllDelebtn"
              >
                一鍵刪除
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      <table class="checkout">
        <tbody>
          <tr>
            <td>運費</td>
            <td>$60</td>
            <!-- <td>99999999999999</td> -->
          </tr>
          <tr>
            <td>總計</td>
            <td>${{ store.total }}</td>
            <!-- <td>99999999999999</td> -->
          </tr>
        </tbody>
      </table>
      <div class="send_box">
        <button @click="checkProduct">結帳送出</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCartStore } from "../stores/cart.js";
import CartItem from "./CartItem.vue";

const store = useCartStore();
const cartItems = ref([]); // 使用 ref 來獲取子組件的引用

onMounted(() => {
  // 確保在組件掛載後獲取子組件的引用
  cartItems.value = Object.values(cartItems.value);
});

const handleCheckCart = (message) => {
  console.log(message); // 處理子組件傳遞的訊息
  alert(message);
};

const checkSend = () => {
  console.log("checkSend 被調用"); // 添加日誌
};
const checkProduct = () => {
  // console.log("checkSend 被調用"); // 添加日誌
  alert("您已送出訂單");
};

// {
//   "category": "書本",
//   "content": "測試的說明",
//   "description": "測試的描述",
//   "id": "-O182suwbu2sCGcyoK7-",
//   "imageUrl": "https://thumbsnap.com/i/qh5QKKgx.png",
//   "is_enabled": 1,
//   "origin_price": 350,
//   "price": 350,
//   "title": "不再數錢度日",
//   "unit": "本",
//   "num": 1
// },

const prodlist = ref([
  {
    id: "-O182suwbu2sCGcyoK7-",
    imageUrl: "https://thumbsnap.com/i/qh5QKKgx.png",
    title: "不再數錢度日",
    description: "測試的描述",
    origin_price: 350,
    price: 350,
    quantity: 1, // 假設新增的屬性
  },
]);

const cancel_Buy = (id) => {
  // 假設產品列表中的ID是數字類型，確保傳入的ID也是數字類型
  const numericId = Number(id);
  prodlist.value = prodlist.value.filter((product) => product.id !== numericId);
};

// const checkoutFun = ()=>{

// }
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.cartopen_box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  position: relative;
  // background-color: #3fa952;
  height: 1000px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 414px) {
    width: 90%;
    margin: 0 auto;
  }
  .cancel_box {
    button {
      padding: 15px 10px;
      position: absolute;
      right: 0;
    }
  }
  main {
    // border: 5px solid #000;
    width: 70%;
    // height: 500px;
    @media (max-width: 414px) {
      width: 100%;
      margin: 0 auto;
    }
    h2 {
      text-align: center;
      font-size: 35px;
    }
    table {
      border-collapse: collapse; /* 讓邊框合併為一條線 */
      @media (max-width: 768px) {
        margin: 0 auto;
      }
      @media (max-width: 414px) {
        width: 100%;
        margin: 0 auto;
      }
    }

    table {
      // border: 5px solid green;
      width: 80%;
      margin: 0 auto;
      @media (max-width: 768px) {
        margin: 0 auto;
      }
      @media (max-width: 414px) {
        margin: 0 auto;
        width: 390px;
      }
      thead {
        tr {
          background-color: #c1c7e7;
        }
        td {
          text-align: center;
          font-size: 25px;
          font-weight: 700;
          background-color: #5198c0;
          @media (max-width: 768px) {
            font-size: 20px;
          }
        }
        .product-name,
        .product-price,
        .quantity,
        .othMethod {
          height: 30px;
          @media (max-width: 768px) {
            height: 40px;
          }
          @media (max-width: 414px) {
            height: 50px;
          }
        }
      }
    }

    .checkout {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 50px 0;

      tr {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        td {
          width: 100%;
          text-align: center;
          @media (max-width: 414px) {
            font-size: 14px;
            padding: 10px 5px;
          }
        }
      }
    }

    .AllDelebtn {
      background-color: #f56c6c;
      padding: 8px 15px;
      border-radius: 6px;
      color: white;
      // max-width: 70px;
    }
    .send_box{
      width: 55%;
      // border: 5px solid palegreen;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      button{
        padding: 10px 25px;
        background-color: #5198c0;
        border-radius: 20px;
      }
    }
  }
}
</style>
