<template>
  <div class="cartopen_box">
    <div class="cancel_box">
      <button @click="openwindows">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
    </div>
    <main v-show="isShow">
      <h2>我是購物車</h2>
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
          <CartItem v-for="product in store.shoppingCart" :key="product.id" :product="product" />
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4"></td>
            <td>
              <button v-if="store.shoppingCart.length > 0" @click="store.removeAll">一鍵刪除</button>
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
        <button @click="checkSend">結帳送出</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../stores/cart.js";
import CartItem from "./CartItem.vue";

const store = useCartStore();
const productList = ref(store.shoppingCart)
const productNum = ref(0);

const isShow = ref(false);

const openwindows = () => {
  isShow.value = !isShow.value;
};

const addfun = () => {
  productNum.value++;
};
const deletefun = () => {
  if (productNum.value === 0) {
    return;
  }
  productNum.value--;
};

const checkSend = () => {
  alert("謝謝您完成訂購");
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
  @media (max-width: 768px) {
    // border: 5px solid red;
    width: 100%;
  }
  //   border: 10px solid red;
  position: relative;
  .cancel_box {
    // border: 1px solid forestgreen;
    button {
      padding: 15px 10px;
      position: absolute;
      right: 0;
    }
  }
  main {
    table {
      border-collapse: collapse; /* 讓邊框合併為一條線 */
    }

    table {
      thead {
        tr {
          // border: 3px solid palegreen;
          background-color: red;
        }
        td {
          text-align: center;
          font-size: 20px;
        }
        .product-name {
          width: 270px;
          height: 50px;
          background-color: forestgreen;
          height: 30px;
        }
        .product-price {
          width: 200px;
          background-color: pink;
          height: 30px;
        }
        .quantity {
          width: 150px;
          background-color: orange;
          height: 30px;
        }
        .oth {
          width: 100px;
        }
        .othMethod {
          width: 200px;
          background-color: gray;
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
        width: 700px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        // border-bottom: 5px solid red;

        td {
          width: 100%;
          text-align: center;
        }
      }
    }

    .send_box {
      display: flex;
      justify-content: center;
      align-items: center;
      // border: 5px solid rebeccapurple;
      button {
        padding: 15px 25px;
        border-radius: 20px;
        background-color: red;
      }
    }
  }
}
</style>
