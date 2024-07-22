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
            <td class="oth">備註:</td>
            <td class="othMethod"></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, id) in prodlist" :key="id">
            <td>
              <input type="checkbox" />
              <img src="https://picsum.photos/100/50/?random=10" />
              <h4>{{ item.name }}</h4>
            </td>
            <td>{{ item.price }}</td>
            <td>
              <div class="delebox">
                <font-awesome-icon
                  icon="fa-solid fa-minus"
                  @click="deletefun"
                />
              </div>
              <h3>{{ productNum }}</h3>

              <div class="addbox">
                <font-awesome-icon
                  icon="fa-solid fa-plus"
                  @click="addfun"
                />
              </div>
            </td>
            <td>
              <button @click="cancel_Buy(item.id)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="checkout">
        <tbody>
          <tr>
            <td>運費</td>
            <td>$60</td>
            <!-- <td>99999999999999</td> -->
          </tr>
          <tr>
            <td>$小計</td>
            <td>$6000</td>
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

const prodlist = ref([
  {
    id: 1,
    name: "產品A",
    description: "這是產品A的描述",
    price: 100,
    quantity: 0, // 假設新增的屬性

    // inStock: true,
  },
  {
    id: 2,
    name: "產品B",
    description: "這是產品B的描述",
    price: 10,
    quantity: 0, // 假設新增的屬性

    // inStock: true,
  },
  {
    id: 3,
    name: "產品P",
    description: "這是產品P的描述",
    price: 1000,
    quantity: 0, // 假設新增的屬性

    // inStock: true,
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
      tbody {
        tr {
          td:first-child {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
          }
          td:nth-child(2) {
            background-color: yellow;
            text-align: center;
          }
          td:nth-child(3) {
            background-color: teal;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
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
