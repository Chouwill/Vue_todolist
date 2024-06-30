<template>
  <h2>加值服務商城</h2>
  <ul class="product_list">
    <li v-for="item in data" :key="item.id">
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

const data = ref([]);

onMounted(async () => {
  try {
    axios
      .get(`https://vue3-course-api.hexschool.io/api/apitest2024/products`)
      .then((res) => {
        console.log(res);
        data.value = res.data.products;
      });
  } catch (e) {
    console.log(e);
  }
});
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  list-style: none;
  // margin: 5px 5px;
}

.product_list {
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
    .product_information{
      padding: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      width: 300px;
      border: 5px solid green;
      h4,span{
        font-weight: 900;
        font-size: 11px;
        color: #000;
        text-align: left;
      }
      button{
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
    img{
      max-width: 100%;
      max-height: 300px;
      margin: 10px 0;
      object-fit: cover;
    }
  }
}

// .container {
//   width: 100%;
//   border: 5px solid red;
//   .products_list {
//     width: 60%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-wrap: wrap;
//     gap: 10px;
//     li {
//       display: flex;
//       width: 30%;
//       border: 10px solid orange;
//       justify-content: center;
//       align-items: center;
//       flex-direction: column;
//       img {
//         max-width: 40%;
//       }
//       .products_information {
//         display: flex;
//         justify-content: space-around;
//         align-items: center;
//         border: 1px solid palevioletred;

//         width: 100%;
//         gap: 5px;
//         padding: 10px 0;
//         .product_title {
//           border: 3px solid red;
//           text-overflow: ellipsis;
//           overflow: hidden;
//           p {
//             // border: 5px solid teal;
//             font-size: 15px;
//             word-break: break-all;
//           }
//         }
//       }
//     }
//   }
// }

// button {
//   padding: 10px 10px;
//   background-color: orange;
//   border-radius: 20px;
//   border: none;
//   margin: 5px 5px;
// }
</style>
