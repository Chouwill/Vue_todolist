<template>
  <h2>加值服務商城</h2>
  <div class="container">
    <ul class="products_list">
      <li v-for="item in data" :key="item.id">
        <img :src="item.imageUrl" alt="" />
        <div class="products_information">
          <p>{{ item.title }}</p>
          <p>${{ item.price }}</p>
        </div>
        <button>Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

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

.container {
  width: 100%;
  border: 5px solid red;
  .products_list {
    // width: 1000px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    li {
      display: flex;
      width: 25%;
      border: 10px solid orange;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        max-width: 40%;
      }
      .products_information {
        border: 4px solid palevioletred;
        width: 70%;
        gap: 10px;
        padding: 10px 0;
        p {
          text-align: center;
        }
        p {
          text-align: left;
          color: red;
        }
      }
      button {
        padding: 10px 10px;
        background-color: orange;
        border-radius: 20px;
        border: none;
        margin: 5px 5px;
      }
    }
  }
}
</style>
