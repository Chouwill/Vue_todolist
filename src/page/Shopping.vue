<template>
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
        <button>加入購物車</button>
      </div>
    </li>
  </ul>
  <div class="page_title">
    <h3>VIP訂閱加值服務:</h3>
  </div>
  <ul class="Vip_product_list">
    <li v-for="item in VipData" :key="item.id">
      <img :src="item.imageUrl" :alt="item.title" />
      <div class="product_information">
        <div class="product_text">
          <h4>{{ item.title }}</h4>
          <span>${{ item.price }}元</span>
        </div>
        <button>加入購物車</button>
      </div>
    </li>
  </ul>
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
import { ref, onMounted } from "vue";

const booksdata = ref([]);

const VipData = ref([]);

const arr = [
  axios.get("https://vue3-course-api.hexschool.io/api/apitest2024/products"),
  axios.get(
    "https://vue3-course-api.hexschool.io/api/2024vipshopping/products"
  ),
  // axios.get(
  //   "https://vue3-course-api.heapi/2024vipshopping/products"
  // ),
];

onMounted(async () => {
  // try {
  //   axios
  //     .get(`https://vue3-course-api.hexschool.io/api/2024vipshopping/products`)
  //     .then((res) => {
  //       console.log(res);
  //       data.value = res.data.products;
  //     });
  // } catch (e) {
  //   console.log(e);
  // }
  try {
    const resArr = await Promise.all(arr); //Promise.allSettled  沒生效????
    console.log(resArr[0].data);
    booksdata.value = resArr[0].data.products; //  書籍API
    // ---------------------------------------------
    console.log(resArr[1].data);
    VipData.value = resArr[1].data.products; // 加值服務API
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
.page_title {
  width: 100%;
  border: 10px solid rgb(102, 0, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  h2 {
    width: 100%;
    text-align: center;
  }
  h3 {
    width: 60%;
    text-align: left;
    border: 5px solid salmon;
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
  border: 5px solid red;
  li {
    width: calc(100% - 30px) / 3;
    // width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 5px solid yellow;
    .product_information {
      padding: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      width: 300px;
      border: 5px solid green;
      h4,
      span {
        font-weight: 900;
        font-size: 11px; //太大每個購物車按鈕會不一樣
        color: #000;
        text-align: left;
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
        &:hover {
          background-color: #9c9a9a;
        }
        &:active {
          background-color: #9c9a9a;
          box-shadow: inset 4px 10px 8px rgba(0, 0, 0, 0.2);
        }
      }
    }
    img {
      max-width: 100%;
      max-height: 300px;
      margin: 10px 0;
      object-fit: cover;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 5px solid green;
  }
  li {
    // width: calc(100% - 30px) / 3;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // border: 5px solid yellow;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      border: 5px solid gray;
    }
    .product_information {
      padding: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      width: 300px;
      // border: 5px solid green;
      h4,
      span {
        font-weight: 900;
        font-size: 15px;
        color: #000;
        text-align: left;
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
        &:hover {
          background-color: #9c9a9a;
        }
        &:active {
          background-color: #9c9a9a;
          box-shadow: inset 4px 10px 8px rgba(0, 0, 0, 0.2);
        }
      }
    }
    img {
      width: 80%;
      height: 300px;
      margin: 10px 0;
      object-fit: cover;
      // border: 10px solid red;
      @media (max-width: 768px) {
        width: 100%;
        border: 10px solid red;
      }
    }
  }
}
</style>
